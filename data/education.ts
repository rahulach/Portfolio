export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "lpu",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    startDate: "August 2023",
    endDate: "Present",
    gpa: "7.4 CGPA",
  },
  {
    id: "star-public",
    degree: "Intermediate",
    institution: "Star Public School",
    location: "Khairthal, Alwar",
    startDate: "April 2020",
    endDate: "March 2022",
    gpa: "81%",
  },
  {
    id: "central-academy",
    degree: "Matriculation",
    institution: "Central Academy School",
    location: "Khairthal, Alwar",
    startDate: "April 2019",
    endDate: "March 2020",
    gpa: "88%",
  },
];
