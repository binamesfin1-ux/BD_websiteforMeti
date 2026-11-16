// scripts/generate-audio.mjs
// Generates clean, soothing musical chime WAV files for local development & fallback.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const audioDir = path.join(__dirname, '..', 'public', 'audio');

if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

// Generate 16-bit PCM Mono WAV buffer
function createWav(durationSeconds, sampleRate, sampleGenerator) {
  const numSamples = Math.floor(durationSeconds * sampleRate);
  const dataSize = numSamples * 2;
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF identifier
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);

  // fmt chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size
  buffer.writeUInt16LE(1, 20);  // PCM = 1
  buffer.writeUInt16LE(1, 22);  // Mono = 1 channel
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28); // ByteRate
  buffer.writeUInt16LE(2, 32);  // BlockAlign
  buffer.writeUInt16LE(16, 34); // BitsPerSample

  // data chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    let sample = sampleGenerator(t, durationSeconds);
    // Clamp to -1..1
    sample = Math.max(-1, Math.min(1, sample));
    const intSample = Math.floor(sample * 32767);
    buffer.writeInt16LE(intSample, offset);
    offset += 2;
  }

  return buffer;
}

const sampleRate = 44100;

// 1. Click sound: Soft warm acoustic tap / woodblock chime (0.12s)
const clickWav = createWav(0.12, sampleRate, (t, dur) => {
  const env = Math.exp(-t * 35);
  return (Math.sin(2 * Math.PI * 659.25 * t) + 0.4 * Math.sin(2 * Math.PI * 1318.5 * t)) * env * 0.4;
});
fs.writeFileSync(path.join(audioDir, 'click.mp3'), clickWav);

// 2. Opening sound: Magical harp / wind chime arpeggio sweep (2.5s)
const openingWav = createWav(2.5, sampleRate, (t, dur) => {
  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]; // C5, E5, G5, C6, E6, G6
  let out = 0;
  notes.forEach((freq, idx) => {
    const start = idx * 0.15;
    if (t >= start) {
      const noteT = t - start;
      const env = Math.exp(-noteT * 3.5);
      out += Math.sin(2 * Math.PI * freq * noteT) * env * 0.2;
    }
  });
  return out;
});
fs.writeFileSync(path.join(audioDir, 'opening.mp3'), openingWav);

// 3. Celebration sound: Joyful triumphant fanfare & sparkle chimes (3.2s)
const celebrationWav = createWav(3.2, sampleRate, (t, dur) => {
  const chords = [
    { start: 0.0, freqs: [523.25, 659.25, 783.99] },       // C Maj
    { start: 0.4, freqs: [587.33, 739.99, 880.00] },       // D Maj
    { start: 0.8, freqs: [659.25, 830.61, 987.77] },       // E Maj
    { start: 1.2, freqs: [783.99, 1046.50, 1318.51, 1567.98] } // Grand C Maj chord
  ];
  let out = 0;
  chords.forEach(c => {
    if (t >= c.start) {
      const noteT = t - c.start;
      const env = Math.exp(-noteT * 2.2);
      c.freqs.forEach(f => {
        out += Math.sin(2 * Math.PI * f * noteT) * env * 0.12;
      });
    }
  });
  // Add a sparkle shimmer on top
  const shimmer = Math.sin(2 * Math.PI * 2093.00 * t) * Math.exp(-((t - 1.2) * 2)) * 0.08;
  return out + (t > 1.2 ? shimmer : 0);
});
fs.writeFileSync(path.join(audioDir, 'celebration.mp3'), celebrationWav);

// 4. Background music: Warm, peaceful, cinematic music-box lullaby loop (16s)
const musicWav = createWav(16.0, sampleRate, (t, dur) => {
  // Gentle soothing acoustic melody in G major
  const melody = [
    { t: 0.0, f: 392.00 }, // G4
    { t: 0.8, f: 440.00 }, // A4
    { t: 1.6, f: 493.88 }, // B4
    { t: 2.4, f: 587.33 }, // D5
    { t: 3.6, f: 523.25 }, // C5
    { t: 4.4, f: 493.88 }, // B4
    { t: 5.2, f: 440.00 }, // A4
    { t: 6.4, f: 392.00 }, // G4
    { t: 8.0, f: 493.88 }, // B4
    { t: 8.8, f: 587.33 }, // D5
    { t: 9.6, f: 659.25 }, // E5
    { t: 10.4, f: 783.99 }, // G5
    { t: 11.6, f: 659.25 }, // E5
    { t: 12.4, f: 587.33 }, // D5
    { t: 13.2, f: 493.88 }, // B4
    { t: 14.4, f: 392.00 }  // G4
  ];

  // Gentle bass drone
  const bass = (Math.sin(2 * Math.PI * 98.00 * t) + 0.5 * Math.sin(2 * Math.PI * 146.83 * t)) * 0.12;

  let melOut = 0;
  melody.forEach(m => {
    if (t >= m.t && t < m.t + 2.5) {
      const noteT = t - m.t;
      // Music box bell timbre: fundamental + 2nd harmonic + 3rd harmonic
      const env = Math.exp(-noteT * 2.0);
      const tone = Math.sin(2 * Math.PI * m.f * noteT) +
                   0.3 * Math.sin(2 * Math.PI * (m.f * 2.0) * noteT) +
                   0.1 * Math.sin(2 * Math.PI * (m.f * 3.0) * noteT);
      melOut += tone * env * 0.16;
    }
  });

  // Overall gentle fade in and out for loop smoothness
  let loopEnv = 1;
  if (t < 0.5) loopEnv = t / 0.5;
  if (t > dur - 0.5) loopEnv = (dur - t) / 0.5;

  return (melOut + bass) * loopEnv;
});
fs.writeFileSync(path.join(audioDir, 'birthday-music.mp3'), musicWav);

console.log('Audio files successfully created in public/audio/');

