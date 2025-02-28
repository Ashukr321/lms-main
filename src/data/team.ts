import Ashutosh from "@/assets/Ashutosh.jpg";
import Himanshu from "@/assets/Himanshu.jpg";
import angle from "@/assets/angel.jpg";
import { StaticImageData } from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string | StaticImageData;
  linkedin: string;
  github: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Angel",
    role: "CTO",
    image: angle,
    linkedin: "https://www.linkedin.com/in/angel3002/",
    github: "https://github.com/angel7544",
  },
  {
    name: "Ashutosh Kumar",
    role: "CEO & Founder",
    image: Ashutosh,
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-7ba1a6211/",
    github: "https://github.com/ashukr321",
  },
  {
    name: "Himanshu Kumar",
    role: "Head of Education",
    image: Himanshu,
    linkedin: "https://www.linkedin.com/in/himanshu-kumar-b6b96b248",
    github: "https://github.com/himanshu-010",
  },
  // {
  //   name: 'Muskan Kumari',
  //   role: 'Lead Developer',
  //   image: Ashutosh,
  //   linkedin: 'https://linkedin.com',
  //   github: 'https://github.com'
  // }
];

export default teamMembers;
