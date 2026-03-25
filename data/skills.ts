// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Frameworks/Libraries"
  | "Tools/Platforms"
  | "Soft Skills";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string;
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "C", category: "Languages", logoKey: "c" },
    { name: "C++", category: "Languages", logoKey: "cplusplus" },
    { name: "Java", category: "Languages", logoKey: "java" },
    { name: "HTML", category: "Languages", logoKey: "html5" },
    { name: "CSS", category: "Languages", logoKey: "css3" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
  ],
  "Frameworks/Libraries": [
    { name: "TensorFlow", category: "Frameworks/Libraries", logoKey: "tensorflow" },
    { name: "Anaconda", category: "Frameworks/Libraries", logoKey: "python" },
  ],
  "Tools/Platforms": [
    { name: "Leetcode", category: "Tools/Platforms", logoKey: "leetcode" },
    { name: "GeeksForGeeks", category: "Tools/Platforms", logoKey: "github" },
    { name: "Excel", category: "Tools/Platforms", logoKey: "excel" },
    { name: "MySQL", category: "Tools/Platforms", logoKey: "mysql" },
  ],
  "Soft Skills": [
    { name: "Problem-Solving", category: "Soft Skills", logoKey: "target" },
    { name: "Team Player", category: "Soft Skills", logoKey: "users" },
    { name: "Project Management", category: "Soft Skills", logoKey: "activity" },
    { name: "Adaptability", category: "Soft Skills", logoKey: "refresh-cw" },
  ],
};
