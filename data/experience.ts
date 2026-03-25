export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  {
    id: "dsa-training",
    title: "Data Structures & Algorithms Training",
    company: "Cipher Schools",
    location: "India / Remote",
    startDate: "July 2025",
    endDate: "Present",
    description: "Completed structured training in Data Structures and Algorithms (DSA) using Java.",
    achievements: [
      "Solved coding exercises while analyzing time and space complexity for optimized solutions",
      "Participated in weekly coding contests to improve problem-solving skills and time-bound efficiency",
      "Tech Used: Java, Data Structures & Algorithms (DSA), Time & Space Complexity Analysis, Competitive Programming"
    ],
    type: "education",
  }
];
