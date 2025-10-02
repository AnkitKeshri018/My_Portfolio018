// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import tech from './assets/company_logo/techiehelp_logo.jpg';
import ibm from './assets/company_logo/ibm.png';


// Education Section Logo's
import iiit from './assets/education_logo/iiitdharwad.png';
import StKarens from './assets/education_logo/Karens.png';
import StPaul from './assets/education_logo/stpaul.jpg';


// Project Section Logo's

import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: tech,
      role: "Frontend Web Developer Internship",
      company: "TechieHelp",
      date: "August 2025 - September 2025",
      desc: "Developed responsive and user-friendly web applications using HTML, CSS, JavaScript, and React, handling frontend development and integrating dynamic features for real-world projects. Collaborated with cross-functional teams to implement designs, optimize performance, and ensure seamless user experience. Participated in a hackathon during the internship, where I built a complete project from scratch, focusing on practical, creative, and scalable solutions, and was selected as the winner. Gained hands-on experience in version control (Git/GitHub), debugging, and agile development workflows.",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript"],
    },
    {
      id: 1,
      img: ibm,
      role: "Frontend Web Developer Internship",
      company: "IBM SkillsBuild",
      date: "Sept 2025 - Oct 2025",
      desc: "Developed responsive and user-friendly web applications using HTML, CSS, JavaScript, and React, focusing on building scalable frontend solutions. Collaborated with cross-functional teams to implement designs, optimize performance, and ensure seamless user experience. Gained hands-on experience in version control (Git/GitHub), debugging, and agile development workflows, while working on real-world projects that strengthened my practical web development skills.",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript"],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: iiit,
      school: "Indian Institue Of Information Technology , Dharwad",
      date: "July 2023 - July 2027",
      grade: "7.98 CGPA",
      desc: "Currently pursuing a Bachelor’s degree in  Computer Science & Engineering at IIT Dharwad. Gaining a strong foundation in core computer science concepts, software development, and problem-solving, while also exploring hands-on projects and technical skills in web development, programming, and other emerging technologies.",
      degree: "BTech",
    },
    {
      id: 1,
      img: StKarens,
      school: "St Karens High School , Patna",
      date: "",
      grade: "90%",
      desc: "I Completed Class 12 (Senior Secondary) from St Karen's High School, focusing on Science stream. Developed a strong foundation in core subjects and analytical skills, preparing for higher education and technical learning.",
      degree: "Senior Secondary Education / Class XII",
    },
    {
      id: 2,
      img: StPaul,
      school: "St Pauls's Schhol , Sasaram",
      date: "",
      grade: "87%",
      desc: "Completed Class 10 (Secondary Education) from St Puls's Schhol, building fundamental knowledge in core subjects and strengthening problem-solving and learning skills for future academic pursuits.",
      degree: "Secondary Education / Class X",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: [
        "React JS",
        "Node.js",
        "MongoDB",
        "Express",
        "Payment Integration",
      ],
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: [
        "React JS",
        "Node.js",
        "MongoDB",
        "Express",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      webapp: "https://webversedigital.com/",
    },
  ];  