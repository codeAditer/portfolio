export const about = {
  name: "Aditya Sharma",
  role: "Full Stack Developer",
  about:
    "Computer Science graduate passionate about building scalable web applications and backend systems. I specialize in Spring Boot, Java, React, and Next.js, with a strong focus on authentication, authorization, API design, and modern web development. I enjoy solving real-world problems and creating products that deliver meaningful user experiences.",
  email: "aditya@example.com",
};

export const seo = {
  title: `${about.name} | ${about.role}`,
  description:
    "Full Stack Developer specializing in Spring Boot, Java, React, Next.js, authentication systems, REST APIs, and scalable web applications.",
  keywords:
    "Aditya Sharma, Full Stack Developer, Java Developer, Spring Boot, React, Next.js, Backend Developer, REST API, Authentication, RBAC, Portfolio",
};

export const forms = {
  formspreeUrl: "https://formspree.io/f/<your-form-id>",
};

export const skills = [
  { name: "React", alt: "react logo", icon: "/react.svg" },
  { name: "Next.js", alt: "nextjs logo", icon: "/nextjs.svg" },
  { name: "JavaScript", alt: "javascript logo", icon: "/js.svg" },

  { name: "Tailwind CSS", alt: "tailwind logo", icon: "/tailwind.svg" },
];

export const socials = {
  github: "https://github.com/codeAditer/codeAditer",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "",
};

export const projects = {
  pinProjects: [
    {
      title: "Authentication Service",
      description:
        "Built a production-ready authentication and authorization service using Spring Boot 3 and Spring Security 6. Implemented JWT authentication, custom X-Auth-Token extraction, device-based authorization, session management, and role-based access control.",
      tags: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
      link: "",
    },
    {
      title: "Hotel Management Dashboard",
      description:
        "Developed a hotel desk management system with React, Handsontable, and Supabase. Features include guest management, room tracking, billing, arrivals, departures, and real-time data handling.",
      tags: ["React", "Supabase", "Handsontable", "JavaScript"],
      link: "",
    },
    {
      title: "Developer Portfolio Platform",
      description:
        "Designed and developed a modern portfolio website using Next.js and Tailwind CSS with responsive layouts, optimized performance, SEO best practices, and reusable UI components.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "",
    },
  ],

  otherProjects: [
    {
      title: "RBAC Management System",
      description:
        "Implemented enterprise-grade Role-Based Access Control with permission management, role hierarchy, route protection, and audit logging.",
      tags: ["Spring Security", "RBAC", "Java"],
      link: "",
    },
    {
      title: "Task Management API",
      description:
        "Built RESTful APIs with authentication, authorization, pagination, filtering, validation, and exception handling using Spring Boot.",
      tags: ["Spring Boot", "REST API", "PostgreSQL"],
      link: "",
    },
    {
      title: "Personal Blogging Platform",
      description:
        "Created a content publishing platform with markdown support, SEO optimization, category management, and responsive design.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      link: "",
    },
  ],
};

export const experience = [
  {
    title: "Full Stack Developer",
    description:
      "Built full-stack applications using Java, Spring Boot, React, and Next.js. Developed secure authentication systems, REST APIs, admin dashboards, and responsive user interfaces while following clean architecture principles.",
    date: "2024 - Present",
  },
  {
    title: "Backend Engineering Projects",
    description:
      "Designed and implemented authentication services featuring JWT security, custom token extraction, device-based authorization, session revocation, payload validation, and API documentation using SpringDoc OpenAPI.",
    date: "2024",
  },
  {
    title: "Computer Science Graduate",
    description:
      "Completed B.Tech in Computer Science and Engineering while building practical projects in web development, backend engineering, databases, and software architecture.",
    date: "2019 - 2023",
  },
];

export const blogs = [
  {
    title: "Building Device-Based Authentication with Spring Security",
    date: "2025",
    link: "#",
  },
  {
    title: "Designing Enterprise RBAC Systems in Spring Boot",
    date: "2025",
    link: "#",
  },
  {
    title: "Lessons Learned While Building Full Stack Applications",
    date: "2025",
    link: "#",
  },
];
