import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Next.js",
    "Redux",
    "Zustand",
    "React Native",
    "Expo",
    "Vite",
    "Material UI",
    "Bootstrap",
    "Framer Motion",
  ];

  const backendSkills = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Python",
    "FastAPI",
    "Flask",
    "REST APIs",
    "JWT",
    "RBAC",
    "2FA / TOTP",
    "Firebase",
  ];

  const databaseSkills = [
    "PostgreSQL",
    "PostGIS",
    "MySQL",
    "MariaDB",
    "Oracle",
    "MongoDB",
    "Redis",
  ];

  const devopsSkills = [
    "Docker",
    "Docker Compose",
    "Nginx",
    "Linux",
    "Ubuntu",
    "Git",
    "GitHub",
    "CI/CD",
    "VPS Deployment",
    "Vercel",
    "Render",
  ];

  const generalSkills = [
    "Git & GitHub",
    "API Integration",
    "Authentication",
    "Database Design",
    "System Design",
    "Responsive Design",
    "Mobile App Development",
    "Cloud Deployment",
    "Testing",
    "Debugging",
    "Performance Optimization",
    "Agile Development",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Meet the Developer
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-4">
              Hey there! I’m a Frontend Engineer 👨‍💻 based in Kigali, Rwanda 🇷🇼 –
              the heart of Africa 🌍. I specialize in building accessible,
              responsive, and user-centered web and mobile experiences. With a
              passion for clean code and sleek design 🎨, I turn ideas into
              interactive, pixel-perfect products that not only look good but
              work flawlessly across devices 🚀. Whether it's crafting intuitive
              UI/UX, optimizing performance, or collaborating with teams across
              the globe 🌐 – I’m all about building with purpose and impact.
              Let’s create something amazing together 💡✨
            </p>
            <div>
              <a
                href="/Niyonshuti-Blaise-CV.pdf"
                className="border border-blue-500/50 text-blue-500 text-white py-2 px-4 rounded-2xl font-medium transition relative overflow-hidden
                hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV 📄
              </a>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
    <div className="flex flex-wrap gap-2">
      {frontendSkills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full
          text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
          transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
  <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">Mobile Skills</h3>
    <div className="flex flex-wrap gap-2">
      {mobileSkills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full
          text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
          transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>


  <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">Backend Skills</h3>
    <div className="flex flex-wrap gap-2">
      {backendSkills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full
          text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
          transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">Database & Data</h3>
    <div className="flex flex-wrap gap-2">
      {databaseSkills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full
          text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
          transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">DevOps & Tools</h3>
    <div className="flex flex-wrap gap-2">
      {devopsSkills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full
          text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
          transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">General Skills</h3>
    <div className="flex flex-wrap gap-2">
      {generalSkills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full
          text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
          transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul list-disc list-inside text-gray-300 space-y-2>
                <li>
                  <strong>🎓 Bachelors in Software Engineering</strong> -
                  Adventist University of Central Africa (2022-Present)
                </li>
                <li>
                  <strong> 📜 Certificate in Computing Technology</strong> -
                  African College of commerce and Technology (2018-2019)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
