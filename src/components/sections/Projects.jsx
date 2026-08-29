import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Taskomi</h3>
              <p className="text-gray-400 mb-4">
                Taskomi is a modern job marketplace that connects clients with
                skilled workers, making it easy to post, find, and manage jobs
                online.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Spring Boot", "Redis", "Tailwind CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://taskomi.africa/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Live Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                🤖 ChatBot – AI-powered Conversation
              </h3>
              <p className="text-gray-400 mb-4">
                ChatBot is a simple AI assistant powered by OpenAI, built to
                deliver smart, real-time responses in a clean chat interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "FastAPI", "OpenAI API", "Tailwind CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://front-end-vert-nine-45.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Blog App ✍️</h3>
              <p className="text-gray-400 mb-4">
                This is a web app that is used as way of communication mainly
                using the popular blogging methodology.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Sping-Boot", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://front-end-vert-nine-45.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Pokedex</h3>
              <p className="text-gray-400 mb-4">
                A Pokemon cards reveal for the different animals on pokemon show
                casing their strength and so on
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React-Native", "REST-APIS", "Native wind"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/niyoblaise/Pokedex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                SPTTS (Smart Public Transport Tracking System)
              </h3>
              <p className="text-gray-400 mb-4">
                SPTTS is a smart public transport tracking system that helps
                users monitor buses, routes, and locations in real time through
                an easy-to-use platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Spring Boot", "GPS", "Tailwind CSS", "PostGIS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/niyoblaise/SPTTS-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Frontend ➡️
                </a>
                <a
                  href="https://github.com/niyoblaise/SPTTS-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Backend ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Project X</h3>
              <p className="text-gray-400 mb-4">
                Project X is a project management platform that helps users
                organize projects, assignments, deadlines, and tasks
                efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Spring Boot", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/niyoblaise/ProjectXFrontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Frontend ➡️
                </a>
                <a
                  href="https://github.com/niyoblaise/ProjectXBackend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Backend ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">CineBooking</h3>
              <p className="text-gray-400 mb-4">
                CineBooking is a movie booking platform that allows users to
                browse movies, view showtimes, select seats, and book tickets
                online.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Spring Boot", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/niyoblaise/CineBookingFrontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Frontend ➡️
                </a>
                <a
                  href="https://github.com/niyoblaise/CineBookingBackend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Backend ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">TalentTrack</h3>
              <p className="text-gray-400 mb-4">
                TalentTrack is a talent management platform that connects job
                seekers with opportunities while helping organizations manage
                and discover skilled talent.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Spring Boot", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://talenttrack-frontend.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Frontend ➡️
                </a>
                <a
                  href="https://github.com/niyoblaise/TalentTrack/tree/main/TalentTrack2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Backend ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Subscriber Loan Management System
              </h3>
              <p className="text-gray-400 mb-4">
                Subscriber Loan Management System is a digital platform that
                manages subscriber loan applications, approvals, repayments, and
                account records through a streamlined system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Spring Boot"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/niyoblaise/Subscriber-Loan-Management-System-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Election Management system 📥
              </h3>
              <p className="text-gray-400 mb-4">
                A desktop-based application built with Java Swing, designed to
                securely and efficiently manage elections.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Swing", "MySQL", "JDBC"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/niyoblaise/Election-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3"
                >
                  View on GitHub ➡️
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/niyoblaise"
              className="border border-blue-500/50 text-blue-400 py-2 px-4 rounded-2xl font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐙 Visit my GitHub
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
