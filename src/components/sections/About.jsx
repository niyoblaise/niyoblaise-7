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
    "Vite",
    "Material UI",
    "Bootstrap",
    "Framer Motion",
      "React-Hook form",
    "Tanstack query",
  ];

  const mobileSkills = [
    "React Native",
    "Expo",
    "TypeScript",
    "Firebase",
    "REST APIs",
    "Push Notifications",
    "QR / Barcode Scanning",
    "Offline-First",
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
    "Caddy",
    "Portainer",
  ];

  const generalSkills = [
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

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <span
        key={index}
        className="bg-blue-500/10 text-blue-400 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium
        hover:bg-blue-500/20
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
        transition-all"
      >
        {skill}
      </span>
    ));

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 scroll-mt-16"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent text-center">
            Meet the Developer
          </h2>

          <div className="glass rounded-xl p-5 sm:p-6 md:p-8 border border-white/10 hover:translate-y-1 transition-all">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Hey there! I&apos;m a Full-Stack Software Engineer based in
              Kigali, Rwanda. I build modern web and mobile applications using
              technologies across frontend, backend, databases, and DevOps. I
              enjoy turning ideas into reliable, responsive, and user-friendly
              products.
            </p>

            <div className="mb-6 sm:mb-8">
              <a
                href="/Niyonshuti-Blaise-CV.pdf"
                className="border border-blue-500/50 text-blue-400 py-2.5 px-5 rounded-2xl font-medium transition inline-flex items-center justify-center relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="rounded-xl p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  Frontend Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {renderSkills(frontendSkills)}
                </div>
              </div>

              <div className="rounded-xl p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  Mobile Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {renderSkills(mobileSkills)}
                </div>
              </div>

              <div className="rounded-xl p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  Backend Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {renderSkills(backendSkills)}
                </div>
              </div>

              <div className="rounded-xl p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  Database & Data
                </h3>
                <div className="flex flex-wrap gap-2">
                  {renderSkills(databaseSkills)}
                </div>
              </div>

              <div className="rounded-xl p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  DevOps & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {renderSkills(devopsSkills)}
                </div>
              </div>

              <div className="rounded-xl p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  General Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {renderSkills(generalSkills)}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 sm:mt-8">
            <div className="p-5 sm:p-6 rounded-xl border border-white/10 hover:translate-y-1 transition-all bg-white/[0.02]">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                Education
              </h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-white">
                    Bachelor&apos;s in Software Engineering
                  </strong>{" "}
                  - Adventist University of Central Africa (2022-Present)
                </li>

                <li>
                  <strong className="text-white">
                    Certificate in Computing Technology
                  </strong>{" "}
                  - African College of Commerce and Technology (2018-2019)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
