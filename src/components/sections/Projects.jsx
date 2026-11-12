import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Taskomi",
    description:
      "Taskomi is a modern job marketplace that connects clients with skilled workers, making it easy to post, find, and manage jobs online.",
    tech: ["React", "Spring Boot", "Redis", "Tailwind CSS"],
    links: [
      { label: "View Live Project ➡️", url: "https://taskomi.africa/login" },
    ],
  },
  {
    title: "ChatBot – AI-powered Conversation",
    description:
      "ChatBot is a simple AI assistant powered by OpenAI, built to deliver smart, real-time responses in a clean chat interface.",
    tech: ["React", "FastAPI", "OpenAI API", "Tailwind CSS"],
    links: [
      {
        label: "View Project ➡️",
        url: "https://front-end-vert-nine-45.vercel.app/",
      },
    ],
  },
  {
    title: "Blog App",
    description:
      "This is a web app that is used as way of communication mainly using the popular blogging methodology.",
    tech: ["React", "Spring Boot", "Tailwind CSS"],
    links: [
      {
        label: "View Project ➡️",
        url: "https://front-end-vert-nine-45.vercel.app/",
      },
    ],
  },

  {
    title: "E-commerce Demo",
    description:
        "This is a demo ecommerce shop done as a small class project at Klab.",
    tech: ["React", "Express", "Tailwind CSS","TanStack Query","Zod","React-hook form"],
    links: [
      {
        label: "View Project ➡️",
        url: "https://ecommerce-frontnend-d9my7v7kf-niyoblaise7-gmailcoms-projects.vercel.app?_vercel_share=aozDceSXS5Zv15TOz7V26YM10sq0tTnB",
      },
    ],
  },
  {
    title: "RURA Regulatory Tracking Platform ",
    description:
        "This is a project that helps RURA and business in regulatory compliance by removing manual work. In this system everything is automated wih a slight touch of human feel but most of the work is done by AI",
    tech: ["React", "Spring-boot", "Tailwind CSS","spring-security","oAuth 2"],
    links: [
      {
        label: "View Project ➡️",
        url: "https://rura-regulatory-tracking-platform.vercel.app/",
      },
    ],
  },
  {
    title: "Pokedex",
    description:
      "A Pokemon cards reveal for the different animals on pokemon show casing their strength and so on",
    tech: ["React-Native", "REST-APIS", "Native wind"],
    links: [
      { label: "View Project ➡️", url: "https://github.com/niyoblaise/Pokedex" },
    ],
  },

  {
    title: "SPTTS (Smart Public Transport Tracking System)",
    description:
      "SPTTS is a smart public transport tracking system that helps users monitor buses, routes, and locations in real time through an easy-to-use platform.",
    tech: ["React", "Spring Boot", "GPS", "Tailwind CSS", "PostGIS"],
    links: [
      {
        label: "View Frontend ➡️",
        url: "https://github.com/niyoblaise/SPTTS-Frontend",
      },
      {
        label: "View Backend ➡️",
        url: "https://github.com/niyoblaise/SPTTS-Backend",
      },
    ],
  },
  {
    title: "Project X",
    description:
      "Project X is a project management platform that helps users organize projects, assignments, deadlines, and tasks efficiently.",
    tech: ["React", "Spring Boot", "Tailwind CSS"],
    links: [
      {
        label: "View Frontend ➡️",
        url: "https://github.com/niyoblaise/ProjectXFrontend",
      },
      {
        label: "View Backend ➡️",
        url: "https://github.com/niyoblaise/ProjectXBackend",
      },
    ],
  },
  {
    title: "CineBooking",
    description:
      "CineBooking is a movie booking platform that allows users to browse movies, view showtimes, select seats, and book tickets online.",
    tech: ["React", "Spring Boot", "Tailwind CSS"],
    links: [
      {
        label: "View Frontend ➡️",
        url: "https://github.com/niyoblaise/CineBookingFrontend",
      },
      {
        label: "View Backend ➡️",
        url: "https://github.com/niyoblaise/CineBookingBackend",
      },
    ],
  },
  {
    title: "TalentTrack",
    description:
      "TalentTrack is a talent management platform that connects job seekers with opportunities while helping organizations manage and discover skilled talent.",
    tech: ["React", "Dot Net", "C#", "Tailwind CSS"],
    links: [
      {
        label: "View Frontend ➡️",
        url: "https://talenttrack-frontend.vercel.app/login",
      },
      {
        label: "View Backend ➡️",
        url: "https://github.com/niyoblaise/TalentTrack/tree/main/TalentTrack2",
      },
    ],
  },
  {
    title: "Finance Dashboard",
    description:
      "Finance Dashboard is a Flutter-based mobile app that helps users track balances, transactions, savings goals, and financial statistics through a clean, modern dashboard.",
    tech: ["Flutter", "REST-APIS"],
    links: [
      {
        label: "View Project ➡️",
        url: "https://github.com/niyoblaise/finance_dashboard",
      },
    ],
  },
  {
    title: "NIRDA IP Advisory",
    description:
      "NIRDA Knowledge is an IP advisory platform that helps manage and provide access to intellectual property knowledge and advisory services through a centralized backend system.",
    tech: ["Spring Boot", "Java"],
    links: [
      {
        label: "View Project ➡️",
        url: "https://github.com/niyoblaise/NIRDA_knowledge",
      },
    ],
  },
  {
    title: "Subscriber Loan Management System",
    description:
      "Subscriber Loan Management System is a digital platform that manages subscriber loan applications, approvals, repayments, and account records through a streamlined system.",
    tech: ["Spring Boot"],
    links: [
      {
        label: "View Project ➡️",
        url: "https://github.com/niyoblaise/Subscriber-Loan-Management-System-",
      },
    ],
  },
  {
    title: "Election Management system",
    description:
      "A desktop-based application built with Java Swing, designed to securely and efficiently manage elections.",
    tech: ["Java", "Swing", "MySQL", "JDBC"],
    links: [
      {
        label: "View on GitHub ➡️",
        url: "https://github.com/niyoblaise/Election-Management-System",
      },
    ],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 scroll-mt-16"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col justify-between bg-white/[0.02]"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                  {project.links.map((link, lIndex) => (
                    <a
                      key={lIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:mt-10">
            <a
              href="https://github.com/niyoblaise"
              className="w-full sm:w-auto text-center border border-blue-500/50 text-blue-400 py-2.5 px-6 rounded-2xl font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my GitHub
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
