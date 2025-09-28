import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "NIT Raipur",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2023 - Present",
      points: [
        "Currently pursuing Electronics and Communication Engineering at NIT Raipur (2023-2027)",
        "Developing full-stack web applications using MERN stack technologies",
        "Building healthcare management systems with React.js, Node.js, and MongoDB",
        "Creating real-time applications with WebRTC and Socket.io for video communication",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Personal Projects",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2023 - Present", 
      points: [
        "Developed health record management system with React.js and modern UI libraries",
        "Implemented responsive design using Tailwind CSS and Material-UI",
        "Created interactive user interfaces with framer-motion animations",
        "Integrated third-party APIs for enhanced functionality and data visualization",
      ],
    },
    {
      title: "Backend Developer", 
      company_name: "Open Source",
      icon: shopify,
      iconBg: "#383E56",
      date: "2024 - Present",
      points: [
        "Built RESTful APIs using Node.js and Express.js for various applications",
        "Designed and implemented database schemas with MongoDB and Mongoose",
        "Developed real-time communication features using WebRTC and Socket.io",
        "Created restaurant management system with admin and employee dashboards",
      ],
    },
    {
      title: "Student Developer",
      company_name: "Electronics & Communication",
      icon: meta,
      iconBg: "#E6DEDD", 
      date: "2023 - 2027",
      points: [
        "Learning advanced concepts in Electronics and Communication Engineering",
        "Combining hardware knowledge with software development skills",
        "Participating in hackathons and coding competitions",
        "Contributing to open source projects and building innovative solutions",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Health Record App",
      description:
        "A comprehensive MERN-stack healthcare management system that revolutionizes how patients interact with healthcare providers. Features include nearby hospital locator, appointment scheduling, health records management, and real-time communication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      source_code_link: "https://github.com/prince04kumar/health-record-app",
      live_demo_link: "https://health-record-app-demo.vercel.app",
    },
    {
      name: "Restaurant Management System",
      description:
        "A complete digital menu and restaurant management system with separate dashboards for admins and employees. Features include order management, inventory tracking, employee attendance, and real-time KOT generation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      source_code_link: "https://github.com/prince04kumar/clint-app",
    },
    {
      name: "WebRTC Video Call",
      description:
        "Real-time video calling application built with WebRTC and Socket.io. Features include peer-to-peer video calls, screen sharing, audio/video controls, and room-based communication with fallback TURN servers.",
      tags: [
        {
          name: "webrtc",
          color: "blue-text-gradient",
        },
        {
          name: "socketio",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=500&h=300&fit=crop",
      source_code_link: "https://github.com/prince04kumar/WebRtc",
      live_demo_link: "https://webrtc-cc9n.onrender.com",
    },
    {
      name: "Portfolio Website",
      description:
        "Modern 3D portfolio website built with React.js, Three.js, and Framer Motion. Features interactive 3D models, smooth animations, responsive design, and dynamic GitHub statistics integration.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "framermotion",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      source_code_link: "https://github.com/prince04kumar/MyPortfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  