// Audio Engine & Web Audio API Synthesizer Fallback
// Guarantees sound effects and music work seamlessly across development and production!

function getAudioCandidates(filename: string): string[] {
  const isProd = import.meta.env.PROD;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  if (isProd) {
    return [
      `${cleanBase}audio/${filename}`,
      `/BD_websiteforMeti/audio/${filename}`,
      `./audio/${filename}`,
      `/audio/${filename}`,
    ];
  } else {
    return [
      `/audio/${filename}`,
      `${cleanBase}audio/${filename}`,
      `./audio/${filename}`,
    ];
  }
}

class SoundEngine {
  private audioCtx: AudioContext | null = null;
  private bgAudio: HTMLAudioElement | null = null;
  private isSynthesizingBg = false;
  private bgSynthInterval: number | null = null;
  private currentVolume = 0.6;
  private isMuted = false;
  private currentCandidateIndex = 0;
  private bgCandidates: string[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.bgCandidates = getAudioCandidates('birthday-music.mp3');
      this.initBackgroundMusic();
    }
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  // Set master volume (0.0 to 1.0)
  public setVolume(vol: number) {
    this.currentVolume = Math.max(0, Math.min(1, vol));
    if (this.bgAudio) {
      this.bgAudio.volume = this.isMuted ? 0 : this.currentVolume;
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.bgAudio) {
      this.bgAudio.volume = muted ? 0 : this.currentVolume;
    }
  }

  // Play click / tap sound effect
  public playClick(src?: string) {
    if (this.isMuted) return;
    const candidates = src ? [src] : getAudioCandidates('click.mp3');
    this.playAudioFileWithFallback(candidates, 0.7, () => this.synthClick());
  }

  // Play envelope opening sound
  public playOpening(src?: string) {
    if (this.isMuted) return;
    const candidates = src ? [src] : getAudioCandidates('opening.mp3');
    this.playAudioFileWithFallback(candidates, 1.0, () => this.synthOpening());
  }

  // Play celebration fanfare
  public playCelebration(src?: string) {
    if (this.isMuted) return;
    const candidates = src ? [src] : getAudioCandidates('celebration.mp3');
    this.playAudioFileWithFallback(candidates, 1.0, () => this.synthCelebration());
  }

  private playAudioFileWithFallback(
    candidates: string[],
    volumeMultiplier: number,
    synthFallback: () => void
  ) {
    let index = 0;
    const tryNext = () => {
      if (index >= candidates.length) {
        synthFallback();
        return;
      }
      const audio = new Audio(candidates[index]);
      audio.volume = this.currentVolume * volumeMultiplier;
      const promise = audio.play();
      if (promise !== undefined) {
        promise.catch(() => {
          index++;
          tryNext();
        });
      }
    };
    tryNext();
  }

  // Synthesize soft warm woodblock bell tap via Web Audio API
  private synthClick() {
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);

    gain.gain.setValueAtTime(this.currentVolume * 0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  // Synthesize magical harp arpeggio
  private synthOpening() {
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];

    notes.forEach((freq, idx) => {
      const start = now + idx * 0.12;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(this.currentVolume * 0.25, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 1.25);
    });
  }

  // Synthesize celebratory fanfare chord progression
  private synthCelebration() {
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const chords = [
      { t: 0.0, freqs: [523.25, 659.25, 783.99], dur: 0.35 },
      { t: 0.3, freqs: [587.33, 739.99, 880.00], dur: 0.35 },
      { t: 0.6, freqs: [659.25, 830.61, 987.77], dur: 0.4 },
      { t: 0.95, freqs: [783.99, 1046.50, 1318.51, 1567.98], dur: 1.8 },
    ];

    chords.forEach((chord) => {
      chord.freqs.forEach((freq) => {
        const start = now + chord.t;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(this.currentVolume * 0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + chord.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + chord.dur + 0.05);
      });
    });
  }

  // Background music management
  public initBackgroundMusic(src?: string): HTMLAudioElement {
    if (src) {
      this.bgCandidates = [src, ...getAudioCandidates('birthday-music.mp3')];
      this.currentCandidateIndex = 0;
    }

    if (!this.bgAudio) {
      this.bgAudio = new Audio();
      this.bgAudio.loop = true;
      this.bgAudio.preload = 'auto';

      this.bgAudio.addEventListener('error', () => {
        // Try next candidate URL
        this.currentCandidateIndex++;
        if (this.currentCandidateIndex < this.bgCandidates.length && this.bgAudio) {
          const nextSrc = this.bgCandidates[this.currentCandidateIndex];
          this.bgAudio.src = nextSrc;
          this.bgAudio.load();
        } else {
          // If all paths fail, fall back to soft procedural ambient
          this.startProceduralAmbient();
        }
      });
    }

    if (this.bgCandidates.length > 0) {
      const chosenSrc = this.bgCandidates[this.currentCandidateIndex] || this.bgCandidates[0];
      const currentSrc = this.bgAudio.getAttribute('src');
      if (!currentSrc || (!currentSrc.includes(chosenSrc) && !this.bgAudio.src.includes(chosenSrc))) {
        this.bgAudio.src = chosenSrc;
        this.bgAudio.load();
      }
    }

    this.bgAudio.volume = this.isMuted ? 0 : this.currentVolume;
    return this.bgAudio;
  }

  public playBackgroundMusic() {
    if (!this.bgAudio) {
      this.initBackgroundMusic();
    }

    if (!this.bgAudio) {
      this.startProceduralAmbient();
      return;
    }

    this.bgAudio.volume = this.isMuted ? 0 : this.currentVolume;
    const playPromise = this.bgAudio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.stopProceduralAmbient();
        })
        .catch(() => {
          // If browser policy blocked or file is missing, try next candidate or ambient
          this.currentCandidateIndex++;
          if (this.currentCandidateIndex < this.bgCandidates.length && this.bgAudio) {
            this.bgAudio.src = this.bgCandidates[this.currentCandidateIndex];
            this.bgAudio.load();
            this.bgAudio.play().catch(() => this.startProceduralAmbient());
          } else {
            this.startProceduralAmbient();
          }
        });
    }
  }

  public pauseBackgroundMusic() {
    if (this.bgAudio) {
      this.bgAudio.pause();
    }
    this.stopProceduralAmbient();
  }

  // Fallback procedural acoustic music box
  private startProceduralAmbient() {
    if (this.isSynthesizingBg) return;
    this.isSynthesizingBg = true;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const scale = [392.0, 440.0, 493.88, 523.25, 587.33, 659.25, 783.99];
    let step = 0;

    const playNote = () => {
      if (!this.isSynthesizingBg || this.isMuted) return;
      const freq = scale[step % scale.length];
      step = (step + Math.floor(Math.random() * 2) + 1) % scale.length;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(this.currentVolume * 0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 2.3);
    };

    playNote();
    this.bgSynthInterval = window.setInterval(playNote, 1400);
  }

  private stopProceduralAmbient() {
    this.isSynthesizingBg = false;
    if (this.bgSynthInterval !== null) {
      clearInterval(this.bgSynthInterval);
      this.bgSynthInterval = null;
    }
  }
}

export const soundEngine = new SoundEngine();
