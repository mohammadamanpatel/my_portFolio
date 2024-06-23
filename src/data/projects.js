import project1Img from '../assets/projects/project 1.png';
import project2Img from '../assets/projects/project 2.png';
import project3Img from '../assets/projects/project 3.png';
import project4Img from '../assets/projects/project 4.png';

const projects = [
  {
    title: "Learning Management System",
    imageSrc: project1Img,
    description: "LMS with student and admin phases. Intuitive course exploration, advanced analytics. Built with Express.js, React.js, Redux Toolkit, Tailwind CSS, and MongoDB.",
    skills: ["Express.js", "React.js", "Redux Toolkit", "Tailwind CSS", "MongoDB"],
    source: "https://github.com/mohammadamanpatel/My-LMS-Project.git"
  },
  {
    title: "Mern Blog",
    imageSrc: project2Img,
    description: "Blog app using MERN stack. Features Redux Toolkit, Firebase, Tailwind CSS. Express.js backend with Google OAuth, JWT Tokens, MongoDB.",
    skills: ["Express.js", "React.js", "Redux Toolkit", "Tailwind CSS", "MongoDB", "Firebase"],
    source: "https://amans-blog-39xs.onrender.com"
  },
  {
    title: "Mern Estate",
    imageSrc: project3Img,
    description: "Real estate platform with React.js frontend and Express.js backend. Secure authentication, advanced search. Built with Tailwind CSS, Redux Toolkit, Firebase, MongoDB.",
    skills: ["Express.js", "React.js", "Redux Toolkit", "Tailwind CSS", "MongoDB", "Firebase"],
    source: "https://my-estate-app.onrender.com"
  },
  {
    title: "Instagram Clone",
    imageSrc: project4Img,
    description: "Instagram clone using Express.js and EJS. User-friendly profile and post creation with image uploads. Features account management, login, MongoDB integration.",
    skills: ["EJS", "Express.js", "MongoDB"],
    source: "https://github.com/mohammadamanpatel/Insta_Clone.git"
  }
];

export default projects;
