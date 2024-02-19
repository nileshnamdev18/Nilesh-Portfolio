import {school, meta, shopify, starbucks,jit,  tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    mui,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    bootstrap,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
       
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
   
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material UI",
        type: "React UI framework"
    },
     {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
];

export const education = [
    {
        title: "B.Tech [IT]",
        company_name: "Jawaharlal Institute of Technology",
        icon: jit,
        iconBg: "lightgrey",
        date: "2022 - 2026",
        points: [
            "Focusing on the core subjects and major programming fundamentals.",
            "Collaborating with my batchmates and work together for projects and assignments.",
            "Learning responsive design and enhanced features in websites.",
        ],
    },
    {
        title: "Higher Secondary",
        company_name: "12th Maths",
        icon: school,
        iconBg: "#fbc3bc",
        date: "2022",
        points: [
            "Passed with 78.8%. ",
            "Gold Medal in International Maths Olympiad (IMO).",
            "Bronze Medal in International Science Olympiad (ISO)."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Wanderlust',
        description: 'Created a full-stack replica of the popular travelling platform "Airbnb," enabling users to signup and login, and rent their hotel and home, all the major frontend and backend technologies are used in this web app, users can also give comments, the map function for location is also used in it. ',
        link: 'https://wanderlust-z7ph.onrender.com',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Simon Game',
        description: 'A simple Simon game is a memory game where players need to repeat a sequence of colors or sounds that the game plays, press start key to start the game and the white colour blinks then follow the sequence and level up if you choose wrong color then you will be out and your score print.',
        link: 'https://simon-game-seven-ochre.vercel.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Weather App',
        description: 'WeatherApp is an application built using React. It allows users to check the current weather conditions for their location or any city around the world. The app fetches weather data and providing information such as temperature, humidity, etc. Users can also search for specific cities to view their weather details.',
        link: 'https://weather-app-theta-beige-44.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Spotify UI clone',
        description: 'Explore your favorite tunes with ease through a seamless navigation experience. Dive into a world of audio bliss with our Spotify UI clone, designed for music lovers by music lovers',
        link: 'https://github.com/nileshnamdev18/Spotify-UI-clone',
    }
];