import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  mongodb,
  git,
  docker,
  java,
  bootstrap,
  firebase,
  mysql,
  postgresql,
  postman,
  springboot,
  thymeleaf,
  versel,
  mobilecontact,
  donation,
  worldwise,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Advance Java",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "BootStrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  // {
  //   name: "Firebase",
  //   icon: firebase,
  // },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Postgresql",
  //   icon: postgresql,
  // },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "Versel",
  //   icon: versel,
  // },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Thymeleaf",
    icon: thymeleaf,
  },
];

const experiences = [
  {
    title: "Java Developer",
    icon: java,
    iconBg: "#383E56",
    date: "February 2022 - Present",
    points: [
      "Strong Java Fundamentals: Proficient in core Java, including syntax, data types, control structures, and solid understanding of OOP principles.",
      "Java APIs and Libraries: Familiarity with essential Java SE and EE APIs, using common libraries in development.",
      "Development Environments (IDEs): Competent in popular Java IDEs like Eclipse, IntelliJ IDEA, or NetBeans for coding and debugging.",
      "Database Interaction: Experienced with databases, understanding concepts, and using Java to interact (e.g., MySQL, PostgreSQL).",
    ],
  },
  {
    title: "Frontend Developer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "HTML, CSS, JavaScript: Proficient in building the foundation of web applications using HTML for structure, CSS for styling, and JavaScript for interactivity.",
      "Responsive Design: Implementing responsive design and ensuring cross-browser compatibility.",
      "Frontend Frameworks: Familiarity with popular frontend frameworks such as React, Angular, or Vue for efficient and scalable development.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    icon: springboot,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Spring Boot Framework: Proficient in utilizing the Spring Boot framework for rapid development of robust and scalable backend applications.",
      "Java Programming: Strong command of Java programming language for building the logic and functionality of backend systems.",
      "RESTful API Development: Expertise in designing and implementing RESTful APIs for seamless communication between the frontend and backend components.",
      "Database Interaction: Experienced with databases, understanding concepts, and using Java to interact (e.g., MySQL, PostgreSQL).",
    ],
  },
  {
    title: "Advance Java",
    icon: java,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Servlets and JSP: Proficient in developing dynamic web applications using Servlets for server-side logic and JSP for efficient presentation.",
      "Java Persistence API (JPA): Skilled in using JPA for seamless integration with databases, providing a standardized way to manage relational data.",
      "Spring Framework: Expertise in advanced Spring features, including dependency injection, aspect-oriented programming, and Spring MVC for building scalable and maintainable applications.",
      "Web Services (SOAP and REST): Experience in designing and implementing web services using both SOAP and RESTful protocols, facilitating interoperability between different systems.",
    ],
  },
];

const projects = [
  {
    name: "Mobile Contact Master",
    description:
      "Mobile Contact Master is a user-friendly tool powered by Spring Boot, helping you easily organize and secure your contacts. With features like sorting and search, it simplifies contact management, ensuring your information is accessible and well-organized.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "Thymeleaf",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "SpringJPA",
        color: "green-text-gradient",
      },
      {
        name: "SpringSecurity",
        color: "green-text-gradient",
      },
      {
        name: "Restfull API's",
        color: "pink-text-gradient",
      },
    ],
    image: mobilecontact,
    source_code_link: "https://github.com/mohitsupolia/Mobile-Contact-Master",
  },
  {
    name: "Donation Webapplication",
    description:
      "Our donation website makes it easy to give back. With a simple interface, you can securely contribute, track your donations, and support causes that matter to you hassle-free",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "Thymeleaf",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "SpringJPA",
        color: "green-text-gradient",
      },
      {
        name: "SpringSecurity",
        color: "green-text-gradient",
      },
      {
        name: "Restfull API's",
        color: "pink-text-gradient",
      },
    ],
    image: donation,
    source_code_link: "https://github.com/mohitsupolia/Donation-Website-Payment-Integration-",
  },
  {
    name: "WorldWide Adventure Track",
    description:
      "Explore the world effortlessly with our adventure tracking website. Log your travels, share your stories, and discover exciting new destinations on your personal journey map.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "API's",
        color: "pink-text-gradient",
      },
    ],
    image: worldwise,
    source_code_link: "https://github.com/mohitsupolia/WorldWise-adventure-track",
  },
];

export { services, technologies, experiences, projects };
