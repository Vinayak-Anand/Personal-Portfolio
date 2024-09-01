import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, ExpressJS , NestJS,  MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, ExpressJS,NestJS, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
// ];

export const PROJECTS = [
  {
    title: "Aesthetics - Full Stack AI SaaS",
    image: project1,
    description:
      "Developed an AI-based image editor and generator with 5 types of image transformations (Image Restore, Remove, Background Remover, Generative Fill, and Object Recolor) using Cloudinary AI API.",
    technologies: ["NextJS", "MongoDB", "TypeScript"],
    year: 2024,
    url: "https://aesthetics-six.vercel.app/", // Example URL
  },
  {
    title: "Ensurance - Insurance Comparison AI bot",
    image: project2,
    description:
      "Developed an AI-powered health insurance assistant, enabling user-friendly interactions and plan comparisons using the ChatPDF API.",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: 2023,
    url: "https://dot-config-iiits.github.io/ensurance/", // Example URL
  },
  {
    title: "Cyber Tea - Cyber Security Workshop Website",
    image: project3,
    description:
      "Contributed to a platform for cybersecurity workshops by 20+ industry experts, offering dynamic registration for 100+ students and 50+ academia.",
    technologies: ["HTML", "CSS", "ReactJS", "Three.JS"],
    year: 2023,
    url: "https://cybertea.vercel.app/", // Example URL
  },
  {
    title: "Movie Recommendation System",
    image: project4,
    description:
      "Developed a personalized movie recommendation system based on selected content using Python and data processing libraries.",
    technologies: ["Python", "Streamlit", "pandas", "NumPy"],
    year: 2024,
    url: "https://vinayak-anand-movie-recommendation-system-app-qha2zo.streamlit.app/", // Example URL
  },
];


export const CONTACT = {
  address: "Student at Indian Institute of Information Technology, Sri City",
  linkedin: "https://www.linkedin.com/in/vinayak-anand/",
  email: "vinayakanand010503@gmail.com",
};
