import { RevealOnScroll } from "../RevealOnScroll"

export const Projects  = () =>{

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">
                        🤖 ChatBot – AI-powered Conversation
                    </h3>
                    <p className="text-gray-400 mb-4">
                    ChatBot is a simple AI assistant powered by OpenAI, built to deliver smart,
                    real-time responses in a clean chat interface .
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React","FastAPI","OpenAI API","Tailwind css"].map((tech,key) =>
                            <span key={key} className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full
                        text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all
                        ">{tech}</span>

                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://front-end-vert-nine-45.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3">View Project ➡️</a>
                    </div>
                </div>



                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">
                        🤖 ChatBot – AI-powered Conversation
                    </h3>
                    <p className="text-gray-400 mb-4">
                    ChatBot is a simple AI assistant powered by OpenAI, built to deliver smart,
                    real-time responses in a clean chat interface .
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React","FastAPI","OpenAI API","Tailwind css"].map((tech,key) =>
                            <span key={key} className="bg-blue-500/10 text-blue-500 ml-1 px-3 py-1 rounded-full
                        text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all
                        ">{tech}</span>

                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://front-end-vert-nine-45.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors my-1 ml-3">View Project ➡️</a>
                    </div>
                </div>
                




                

            </div>

        </div>
        </RevealOnScroll>
    </section>
}