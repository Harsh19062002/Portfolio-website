import bootstrap from "./assets/bootstrap.png";
import css from "./assets/css.png";
import git from "./assets/git.png";
import html from "./assets/html.png";
import javascript from "./assets/javascript.png";
import reactimage from "./assets/reactjs.png";
import tailwind from "./assets/tailwindcss.png";
import express from "./assets/express.png";
import node from "./assets/nodejs.png";
import mongodb from "./assets/mongodb.png";
import mysql from "./assets/mysql.png";
import schoolLogo from "./assets/custLogo.png";
import harshImage from "./assets/harsh.png";
import postman from "./assets/postman.png";
import vscode from "./assets/vscode.png";
import github from "./assets/github.png";
import nextjs from "./assets/nextjs.png";
import mc from "./assets/mc.png";
import reactjs from "./assets/reactjs.png";
import collageLogo from "./assets/images.jpeg";
import java from "./assets/java.png";
import EcommerceFrontend from "./assets/E-commerce-Frontend.png";
import EcommerceAdmin from "./assets/E-commerce-Admin.png";
import ChatApp from "./assets/Chat-App.png";

// Skill categories data
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "Bootstrap", logo: bootstrap },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "ReactJS", logo: reactjs },
      { name: "NextJS", logo: nextjs },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: node },
      { name: "Express.js", logo: express },
      { name: "MongoDB", logo: mongodb },
      { name: "MySQL", logo: mysql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: git },
      { name: "GitHub", logo: github },
      { name: "Postman", logo: postman },
      { name: "VS Code", logo: vscode },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascript },
      { name: "Java", logo: java },
    ],
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    school: "Acropolis Institute of Technology and Research, Indore",
    date: "2020 - 2024",
    grade: "7.45 CGPA",
    desc: "Focused on web development, data structures, algorithms, and software engineering principles. Participated in multiple hackathons and coding events.",
    img: collageLogo, // Make sure the image path is correct
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    school: "St. George School, Dhar",
    date: "2019 - 2020",
    grade: "72.6%",
    desc: "Specialized in PCM (Physics, Chemistry, Mathematics) Developed a strong foundation in logical reasoning and mathematics.",
    img: schoolLogo,
  },
  {
    id: 3,
    degree: "Secondary School Education",
    school: "St. George School, Dhar",
    date: "2017 - 2018",
    grade: "66.6%",
    desc: "Built a strong academic foundation and developed interest in computers and problem-solving. Participated in science exhibitions ",
    img: schoolLogo,
  },
];
  

// Project data
export const projects = [
  {
    id: 1,
    title: "E-commerce Frontend",
    description: "A fully responsive e-commerce frontend built with React, featuring product listings, cart, and checkout functionality.",
    tags: ["React", "JavaScript",  "HTML","Tailwind CSS","Node.js","Express.js","MongoDB","Cloudinary" ,"Responsive Design"],
    image: EcommerceFrontend, // Using the imported image
    github: "https://github.com/Harsh19062002/E-commerce-Project", // Replace with actual GitHub link
    webapp: "https://e-commerce-frontend-liart-chi.vercel.app/", // Replace with actual live URL
  },
  {
    id: 2,
    title: "E-commerce Admin",
    description: "Admin panel for managing products, orders, and customers, built with React and Redux.",
    tags: ["React", "JavaScript",  "HTML","Tailwind CSS","Node.js","Express.js","MongoDB","Cloudinary" ,"Responsive Design"],
    image: EcommerceAdmin, // Using the imported image
    github: "https://github.com/Harsh19062002/E-commerce-Project", // Replace with actual GitHub link
    webapp: "https://e-commerce-admin-cyan-theta.vercel.app/", // Replace with actual live URL
  },
  {
    id: 3,
    title: "Chat App",
    description: "A real-time chat application built with Node.js, Express, and Socket.IO.",
    tags: ["React", "JavaScript",  "HTML","Tailwind CSS","Node.js","Express.js","MongoDB","Cloudinary" ,"Socket.IO","Responsive Design"],
    image: ChatApp, // Using the imported image
    github: "https://github.com/Harsh19062002/Mern-chat-app", // Replace with actual GitHub link
    webapp: "https://mern-chat-app-t7iz.onrender.com/signup", // Replace with actual live URL
  },
  // Add more projects as needed
];

export {
  bootstrap,
  css,
  git,
  html,
  javascript,
  reactimage,
  tailwind,
  express,
  node,
  mongodb,
  mysql,
  schoolLogo,
  harshImage,
  postman,
  vscode,
  github,
  nextjs,
  mc,
  reactjs,
  collageLogo,
};
