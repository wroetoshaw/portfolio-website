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
    cbdc,
  wms,
  blockchainIcon,
  aiIcon,

  blockbeatz,


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
      title: "Blockchain Intern",
      company_name: "SimplyFI Softech India",
      icon: blockchainIcon,
      iconBg: "#5E72E4",
      date: "May 2023 - July 2023",
      points: [
        "Upgraded the Hyperledger Fabric network from version 2.2 to 2.5, showcasing proficiency in maintenance, version control, and system upgrades.",
        "Conducted extensive research on Central Bank Digital Currency (CBDC) and actively contributed to the setup of the network on the Hyperledger Fabric platform.",
        "Improved the scalability of the network setup by collaborating with the team to configure YAML files and implement policies, ensuring a secure and efficient CBDC network infrastructure.",
        "Worked with the team to develop and deploy smart contracts on the CBDC network, enabling seamless transactions and financial operations.",
      ],
    },
    {
      title: "AI Intern",
      company_name: "SmartBridge",
      icon: aiIcon,
      iconBg: "#FF5733",
      date: "May 2023 - June 2023",
      points: [
        "Gained invaluable insights into the field of Artificial Intelligence through dedicated learning and mentorship from seasoned professionals, enhancing proficiency and understanding in this cutting-edge discipline.",
        "Participated in hands-on projects and exercises to develop practical skills in AI algorithms, machine learning, and natural language processing.",
        "Contributed to the development of AI models and solutions, addressing real-world challenges in various domains.",
        "Explored and experimented with state-of-the-art AI technologies, frameworks, and tools to stay abreast of the latest advancements in the field.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Internationally Genetically Engineered Machine - VIT",
      icon: igem,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Nov 2022",
      points: [
        "Designed and developed the Wiki page for iGEM VIT, contributing to the silver medal-winning team from VIT Vellore in the prestigious International Genetically Engineered Machine competition, a global event showcasing excellence in synthetic biology.",
        "Played a crucial role in creating a visually appealing and user-friendly interface for the iGEM VIT Wiki page using EJS, CSS, and JavaScript.",
        "Managed and updated the Wiki page throughout the competition, ensuring all project details were accurately reflected and presented to the judges and global audience.",
        "Collaborated with team members to integrate project information, research findings, and experimental data into the Wiki page, providing a comprehensive overview of the team's work.",
      ],
    },
    {
      title: "Senior Core Member",
      company_name: "SIAM-VIT",
      icon: siam,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Coordinated with the team of developers and designers to create the SIAM-VIT website, playing a key role in leading the development and design of the organization's website.",
        "Mentored junior web developers, guiding them in their learning and development of technical skills, fostering a collaborative and growth-oriented team environment.",
        "Managed the project workflows of the technical team, overseeing and coordinating the efforts of other team members to ensure efficient project delivery.",
        "Actively participated in code reviews, providing constructive feedback to other developers, and ensuring code quality and adherence to best practices.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "crwn-clothing",
      description:
      "CRWN Clothing's completely functional e-commerce website uses React JS, Redux, functional components, and hooks. It offers dynamic, user-friendly shopping. The site sells hats, shirts, trousers and shoes. Firebase handles authentication, database storage, and hosting. The project shows proficiency in state management system design and web development standards.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
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
      name: "BlockBeatz",
      description:
      "BlockBeatz's direct-to-fan strategy affects the music industry. Musicians can sell digital tracks safely on the blockchain. The project uses JavaScript, Next.js, Solidity, and the Hardhat blockchain technology. It demonstrates innovation and blockchain development best practises.",
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "next.js",
          color: "black-text-gradient",
        },
        {
          name: "solidity",
          color: "orange-text-gradient",
        },
        {
          name: "hardhat",
          color: "gray-text-gradient",
        },
      ],
      image: blockbeatz,
      source_code_link: "https://github.com/wroetoshaw/BlockBeats",
    },
    {
      name: "CBDC Network",
      description:
      "Hyperledger Fabric-based Central Bank Digital Currency (CBDC) network. This project shows blockchain knowledge and secure infrastructure development. Advanced policies and YAML files provide smooth transactions and financial security. Fabric, Linux, and Docker construct a powerful CBDC network.",      tags: [
        {
          name: "hyperledger fabric",
          color: "blue-text-gradient",
        },
        {
          name: "linux",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "cyan-text-gradient",
        },
      ],
      image: cbdc,
      source_code_link: "https://github.com/wroetoshaw/cbdc-work",
    },
    {
      name: "WMS (Workforce Management System)",
      description:
      "Developed a Java-based, SQL-based Workforce Management System (WMS). Following Java development best practises, the project prioritises readability, maintainability, and scalability. The WMS helps companies organise shifts, track attendance, and streamline operations.",
      tags: [
        {
          name: "java",
          color: "red-text-gradient",
        },
        {
          name: "sql",
          color: "blue-text-gradient",
        },
      ],
      image: wms,
      source_code_link: "https://github.com/wroetoshaw/WFM-Workforce-Management-System",
  },
    {
      name: "Buildcraft",
      description:
      "Buildcraft is a web-based game that uses Perlin noise techniques for terrain generation, the Three.js framework for 3D graphics, and game rules to deliver an immersive learning experience. This project explores new web technologies while teaching players game mechanics. JavaScript and Three.js build the project.",
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "three.js",
          color: "orange-text-gradient",
        },
      ],
      image: build,
      source_code_link: "https://github.com/wroetoshaw/Minecraft",
    },
    {
      name: "SmartRecruiter",
      description:
      "SmartRecruiter is a Python-based chatbot that uses machine learning to interview job candidates and give recruiters relevant feedback. The chatbot uses NLP to analyse the candidate's mood, sentiment, and answer accuracy to simulate a recruiter. Python and TensorFlow build the project.",      tags: [
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "jupyter notebook",
          color: "purple-text-gradient",
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
      "DopeMart is a web software for supermarket proprietors. Tendering, supplier email notifications, OTP customer verification, and accessible data views for owners are included. DopeMart simplifies supermarket operations, notifies suppliers, and verifies customers with OTP for security. EJS, Node.js, and SCSS build the app.",
      tags: [
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: smgs ,
      source_code_link: "https://github.com/wroetoshaw/Supermarket-Mangement-System",
    },
  ];
  
  
  export { services, technologies, experiences, projects };