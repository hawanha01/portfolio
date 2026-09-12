export type Recommendation = {
  quote: string;
  name: string;
  title: string;
  initials: string;
  photo: string;
};

export const recommendations: Recommendation[] = [
  {
    quote:
      "His proactive communication, reliability under pressure, and passion for clean and scalable code made him an invaluable member of our engineering team.",
    name: "Salman Nasir",
    title: "Chief Executive Officer · Ilsa Interactive",
    initials: "SN",
    photo: "/recommendations/salman-nasir-avatar.webp"
  },
  {
    quote:
      "What impressed me most was Hamza's ability to learn rapidly and apply knowledge effectively. Even when encountering subjects for the very first time, he adapted quickly and demonstrated a strong analytical mindset.",
    name: "Mr. Asim Rasul",
    title: "Assistant Professor, Computer Science · University of the Punjab",
    initials: "AR",
    photo: "/recommendations/asimrasul-avatar.webp"
  },
  {
    quote:
      "His ability to grasp new concepts rapidly and apply them in problem-solving is very good. He consistently displayed initiative, curiosity, and persistence in tackling challenging exercises.",
    name: "Dr. Saadia Shahzad",
    title: "Assistant Professor, Computer Science · University of the Punjab",
    initials: "SS",
    photo: "/recommendations/sadia-avatar.webp"
  }
];
