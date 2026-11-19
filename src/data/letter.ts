// Section 7: A Letter For Her
// "Something I Want You to Read"

export interface PersonalLetter {
  sectionTitle: string;
  sectionSubtitle: string;
  paperHeading: string;
  salutation: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  postScript?: string;
  dateBadge: string;
}

export const letterData: PersonalLetter = {
  sectionTitle: "Something I Want You to Read",
  sectionSubtitle: "Chapter 05 · A Personal Letter",
  paperHeading: "A Note From The Heart",
  salutation: "Dearest Meto,",
  paragraphs: [
    "As another year turns around the sun, I wanted to pause the fast-moving noise of the world for a few minutes and give you something you can keep and revisit whenever you need a reminder of who you are to me.",
    "It is easy in day-to-day life to get caught up in schedules, routines, and responsibilities, and forget to say the simple truths out loud. So I want to say this clearly: having you as my sister is one of the greatest privileges of my life.",
    "I have watched you navigate this past year with so much courage and dignity. Even when things were difficult or uncertain, you met them with patience, quiet resilience, and an unwavering kindness that inspires me more than you probably realize.",
    "You have an extraordinary gift for making the people around you feel comfortable, safe, and truly valued. The warmth you carry into every room isn't an accident—it's who you are at your core.",
    "As you step into this new chapter, my deepest wish is that you grant yourself the same patience, understanding, and love that you so effortlessly give to others. Take up space. Trust your instincts. Dream without shrinking yourself, and celebrate every small step forward.",
    "No matter what changes around us, or where life takes us next, remember that you will always have someone cheering for you, believing in you, and ready to stand by your side through it all.",
  ],
  closing: "With all my love and endless pride,",
  signature: "Your Sibling,Chara",
  postScript: "P.S. Don't worry, you still don't have to share your birthday cake with anyone... unless it's me!",
  dateBadge: "November 19 · Today & Always",
};

