import { RevealOnScroll } from "../RevealOnScroll"

export const Home = ()=>{
    return <section id="home"
    className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-6xl mx-auto">

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">

                <div className="relative group">
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden 
                    shadow-2xl shadow-blue-500/20 border-4 border-blue-500/30 
                    transition-all duration-500 hover:shadow-blue-500/40 hover:scale-105">
                        <img 
                            src="/profile.jpg" 
                            alt="Blaise Niyonshuti - Frontend Engineer"
                            className="w-full h-full object-cover object-[center_5%] transition-transform duration-500 
                            group-hover:scale-110"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                </div>

            
                <div className="flex-1 max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500
                    to-purple-600 bg-clip-text text-transparent leading-tight">
                        Sup.. , I'm Blaise 
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0 text-left lg:text-left">
                    👨‍💻 Frontend Engineer | Passionate about crafting accessible & user-friendly Web and Mobile experiences
📍 Based in Kigali, Rwanda 🇷🇼 – the ❤️ of Africa 🌍
🚀 Turning ideas into pixel-perfect interfaces with a touch of creativity ✨    
                    </p>
                </div>
            </div>

            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#projects" 
                className="bg-blue-500 text-white py-3 px-6 rounded-2xl font-medium transition relative overflow-hidden
                hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] group">
                    <span className="relative z-10">📁 view projects</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>

                <a href="#contact" 
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-2xl font-medium
                transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
                hover:bg-blue-500/10 group">
                    <span className="relative z-10">📬 hit me up</span>
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    
}