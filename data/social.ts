export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/rahulach",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rahul-acharya-028779298/",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:acharyarahul165@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+919024845857",
    icon: "phone",
  },
];
