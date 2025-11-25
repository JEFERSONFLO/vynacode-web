import {
    ChevronsDown,
    FolderOpen,
    Globe,
    MessageCircle,
    Zap
} from "lucide-react";
import TerminalP from "./terminal";

const Hero = () => {
    return (
        <section id="inicio" className="min-h-screen gradient-bg text-gray-800 hero-pattern flex items-center pt-20 md:pt-16 " style={{ overflowX: "hidden" }}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 glass-effect">
                            <span className="flex items-center">
                                <Zap className="w-4 h-4 mr-2" />

                                Disponible para proyectos freelance
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight hero-title">
                            Hola, soy
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Jeferson</span>
                        </h1>
                        <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 typewriter hero-subtitle    " style={{ maxWidth: "470px" }}>
                            Desarrollador Full Stack & Cloud
                        </div>
                        <p className="text-lg sm:text-xl mb-8 max-w-lg opacity-90 leading-relaxed text-responsive">
                            Con 3 años de experiencia creando soluciones digitales robustas y
                            escalables. Especializado en desarrollo backend, frontend y
                            administración de infraestructura cloud.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 hero-buttons">

                            <a
                                href="#proyectos"
                                className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center shadow-lg text-sm sm:text-base"
                            >
                                <FolderOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Explorar Proyectos
                            </a>

                            <a
                                href="#contacto"
                                className="
      bg-transparent 
      border-2 border-indigo-600 
      text-indigo-600 
      px-6 sm:px-8 py-3 sm:py-4 
      rounded-lg font-medium 
      hover:bg-indigo-600 hover:text-white 
      transition flex items-center justify-center 
      text-sm sm:text-base
    "
                            >
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Contactar Ahora
                            </a>

                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="text-sm">3+ años de experiencia</span>
                            </div>
                            <div className="flex items-center">
                                <Globe className="w-4 h-4 mr-2" />

                                <span className="text-sm">Trabajo remoto</span>
                            </div>
                        </div>
                    </div>
                    <TerminalP />
                </div>


                <div
                    className="hidden md:flex absolute bottom-8 left-1/2 
    transform -translate-x-1/2"
                >
                    <a
                        href="#sobre-mi"
                        className="flex flex-col items-center text-white opacity-70 hover:opacity-100 transition"
                    >
                        <span className="text-sm mb-2 text-gray-800">Ver más</span>
                        <ChevronsDown className="w-5 h-5 animate-bounce text-gray-800" />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Hero