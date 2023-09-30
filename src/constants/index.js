import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    unity,
    net,
    cplusplus,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    python,
    sql,
    cnormal,
    json,
    php,
    cells,
    sales,
    notes,
    personal_website
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
      id: "projects",
      title: "Projects",
    },
    // {
    //   id: "research",
    //   title: "Research"
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Researcher",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "HTML 5",
      icon: html,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "VR/AR Intern",
      company_name: "Epoka University",
      icon: unity,
      iconBg: "#383E56",
      date: "Oct 2022 - April 2023",
      points: [
        "Understanding the fundamentals of VR/AR development and design.",
        "Utilizing Render for 3D models and Oculus VR headset for testing.",
        "Programming simple projects with Unity and C#",
        "Participating in code reviews and providing constructive feedback in teams",
      ],
    },
    {
      title: "Programming Tutor",
      company_name: "Epoka University",
      icon: cplusplus,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Mar 2023",
      points: [
        "Providing in-person and online tutoring to students in programming courses.",
        "Creating study plans for the students and helping them to achieve their goals.",
        "Identifiying weak areas of the students and helping them to improve.",
        "Developing simple projects with the students.",
      ],
    },
    {
      title: ".NET/C# Intern",
      company_name: "Kreatx",
      icon: net,
      iconBg: "#383E56",
      date: "Feb 2023 - Mar 2023",
      points: [
        "Understanding the fundamentals of .NET.",
        "Completing tasks with .NET using Microsoft Sql Server.",
        "Implementing Rest API services with .NET and C#.",
        "Understanding the difference between the MVC architecture and Rest API architecture.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Image Processing with Machine Learning",
      description:
        "Cell image segmentation using machine learning with deep neural networks. The project is implemented with Python and the dataset is publicly available. Several modified structures have been proposed ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "image-processing",
          color: "pink-text-gradient",
        },
      ],
      image: cells,
      source_code_link: "https://github.com/DanielAvdiu/Image_Processing_With_Machine_Learning",
    },
    {
      name: "Data Visualizer",
      description:
        "Data Visualizer implemented with Streamlit. Using an excel file with data, we can simply visualize the data with different types of graphs. The project is implemented using Streamlit. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "streamlit",
          color: "green-text-gradient",
        },
        {
          name: "data-visualization",
          color: "pink-text-gradient",
        },
      ],
      image: sales,
      source_code_link: "https://github.com/DanielAvdiu/Data_Visualizer",
    },
    {
      name: "3D Website with Three.js",
      description:
        "A 3D website implemented with Three.js. The website is implemented with React.js and Three.js. The website is responsive and can be used on mobile devices. ",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: personal_website,
      source_code_link: "https://github.com/DanielAvdiu/3D_Website",
    },

    {
      name: "Note Keeper with React.js",
      description:
        "A simple note keeper implemented with React.js. The website is responsive and can be used on mobile devices. The website is implemented with React.js and Tailwind CSS. The project represents a note keeping website ",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Json Server",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_code_link: "https://github.com/DanielAvdiu/note_keeper_react_js",
    },

    // {
    //   name: "Huffman Encoding Algorithm",
    //   description:
    //     "Huffman Encoding Algorithm implemented using C++ and Python. The algorithm intends to use shorter binary code for the most repeated characters.",
    //   tags: [
    //     {
    //       name: "C++",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Python",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/DanielAvdiu",
    // },

    // {
    //   name: "Store Management System",
    //   description:
    //     "Store management system in the form of a desktop application. The project is implemented using Java, JavaFX and CSS for styling. ",
    //   tags: [
    //     {
    //       name: "Java",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "JavaFX",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "CSS",
    //       color: "green-text-gradient",
    //     },

    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/DanielAvdiu",
    // },
  ];
  
  export { services, technologies, experiences, projects };