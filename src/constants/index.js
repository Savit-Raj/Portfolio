import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    ntlk,
    vite,
    css,
    reactjs,
    sklearn,
    tailwind,
    opencv,
    tensorflow,
    git,
    figma,
    pytorch,
    ai,
    figma1,
    fend,
    ml,
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
        title: "AI/ML Engineer",
        icon: web,
    },
    {
        title: "Software Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "UI/UX Designer",
        icon: creator,
    },
];
const technologies = [
    {
        name: "Vite",
        icon: vite,
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
        name: "NLTK",
        icon: ntlk,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Scikit Learn",
        icon: sklearn,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Open CV",
        icon: opencv,
    },
    {
        name: "tensorflow",
        icon: tensorflow,
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
        name: "pytorch",
        icon: pytorch,
    },
];
const experiences = [
    {
        title: "UI/UX Odyssey",
        company_name: "2nd Semester",
        icon: figma1,
        iconBg: "#383E56",
        date: "Apr 2023 - Jul 2023",
        points: [
            "Designing captivating web experiences with Figma to ensuring seamless user interactions.",
            "Secured second runner-up in a prestigious competition with exceptional website designs, demonstrating keen attention to detail and a talent for engaging user experiences.",
        ],
    },
    {
        title: "Frontend Exploration",
        company_name: "3rd Semester",
        icon: fend,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Dec 2023",
        points: [
            "Expertise in modern frontend frameworks like React.js, Vite.js, or TailwindCSS for building dynamic web applications.",
            "Proficient in implementing pixel-perfect designs and ensuring cross-browser compatibility.",
            "Collaborative team player, working closely with designers and backend developers to deliver top-quality products.",
            "Familiarity with version control systems such as Git, facilitating seamless collaboration and efficient code management within development teams.",
        ],
    },
    {
        title: "ML/DL Study",
        company_name: "4th Semester",
        icon: ml,
        iconBg: "#383E56",
        date: "Jan 2024 - Apr 2024",
        points: [
            "Expertise in developing and deploying machine learning models using TensorFlow, PyTorch, or scikit-learn.",
            "Skilled in data preprocessing, feature engineering, and model evaluation for optimal performance.",
            "Proficient in implementing a variety of machine learning algorithms, including deep learning architectures.",
            "Strong understanding of neural networks, CNNs, RNNs, and other advanced techniques.",
        ],
    },
    {
        title: "CV & NLP Anatomy",
        company_name: "5th Semester",
        icon: ai,
        iconBg: "#E6DEDD",
        date: "Aug 2024 - Present",
        points: [
            "Expertise in computer vision using OpenCV or TensorFlow for image processing and object detection.",
            "Skilled in NLP techniques like sentiment analysis and named entity recognition.",
            "Proficient in developing and deploying ML models for both computer vision and NLP tasks.",
            "Strong grasp of neural network architectures like CNNs and RNNs for these applications.",
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
        image: "https://randomuser.me/api/portraits/men/7.jpg",
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];
export { services, technologies, experiences, testimonials, projects };