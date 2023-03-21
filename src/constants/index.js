import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    solidity,
    cpp,
    css,
    reactjs,
    tailwind,
    nodejs,
    java,
    git,
    tensorflow,
    figma,
    remix,
    metamask,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    crwn,
    smgs,
    smart,
    build,
    igem,
    iet,
    siam,


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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "React Developer + THREE.js",
      icon: backend,
    },
    {
      title: "Decentralized Application Developer",
      icon: creator,
    },
    {
      title: "AI, Deep Learning Enthusiast",
      icon: mobile,
    },
  ];
  
  const technologies = [
    
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "remix",
      icon: remix,
    },
    {
      name: "metamask",
      icon: metamask,
    }
    
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "iGEM-VIT",
      icon: igem,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Nov 2022",
      points: [
        "As a web developer for the Internationally Genetically Engineered Machine (iGEM) team at VIT, I was responsible for designing and developing the team's wiki page.",
        "The wiki page was a critical component of the team's submission to the iGEM competition, which is a global synthetic biology competition that attracts teams from around the world.",
        "Managed and updated the wiki page throughout the competition, ensuring all project details were accurately reflected",
        "Utilized ejs, CSS, and JavaScript to develop a visually appealing and user-friendly interface for our project",
      ],
    },
    {
      title: "Senior Core memeber",
      company_name: "SIAM-VIT",
      icon: siam,
      iconBg: "#383E56",
      date: "JAN 2022 - Present",
      points: [
        "Coordinated with the team of developers and designers to create the siam-vit website: played a key role in leading the development and design of the organization's website. ",
        "Mentored junior web developers: responsibility to mentor and guide junior web developers in their learning and development of technical skills. ",
        "Managed the project workflows of the technical team:  responsibility to oversee and manage the workflows of the other team members",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    {
      title: "Senior Core memeber",
      company_name: "IET",
      icon: iet,
      iconBg: "#383E56",
      date: "Oct 2021 - Present",
      points: [
        "As a senior core member of the Technical Chapter at VIT: significant role in managing sponsorships for various technical events organized by the chapter",
        "Creating promotional videos for the events and highlighting the achievements of the chapter in various technical competitions",
        "Plan and execute various technical events and workshops for the students of VIT",
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "crwn-clothing",
      description:
        "CRWN Clothing is a React-based e-commerce website that offers a dynamic and user-friendly shopping experience. The website features a wide range of clothing products, from hats to shoes, and is built entirely with functional components and hooks. The back-end is powered by Firebase, providing seamless authentication, database storage, and hosting capabilities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: crwn,
      source_code_link: "https://github.com/wroetoshaw/crwn-clothing",
    },
    
    {
      name: "Buildcraft",
      description:
        "Buildcarft is a web-based game that combines the power of perlin noise algorithms for terrain generation, Three.js framework for rendering 3D graphics, and game mechanics to provide an immersive learning experience. The goal of this project is to explore the capabilities of these modern web technologies while providing players with insights into how game mechanics work.",
      tags: [
        {
          name: "THREE js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        ,
      ],
      image: build,
      source_code_link: "https://github.com/wroetoshaw/Minecraft",
    },

    {
      name: "Smartrecruiter",
      description:
        "SmartRecruiter is a Python-based chatbot that utilizes machine learning techniques to interact with job candidates during interviews, providing recruiters with valuable insights into the candidate's performance. The chatbot replicates the experience of an actual recruiter by analyzing the candidate's mood, sentiment, and correctness of their answers using NLP techniques.",
      tags: [
        {
          name: "jupyter-Notebook",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tensorflow",
          color: "pink-text-gradient",
        },
      ],
      image: smart,
      source_code_link: "https://github.com/wroetoshaw/smartrecruiter",
    },
    {
      name: "DopeMart",
      description:
        "Dope-Mart is a web-based application that helps supermarket owners manage their operations more efficiently. The system includes a tendering system, instant email notifications for suppliers, customer verification using OTP, and transparent data views for owners. The system streamlines supermarket operations while ensuring suppliers receive timely notifications, and customers are verified using OTP for security.",
      tags: [
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "node js",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: smgs,
      source_code_link: "https://github.com/wroetoshaw/Supermarket-Mangement-System",
    },
    
  ];
  
  export { services, technologies, experiences, projects };