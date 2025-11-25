import { ChevronRight, Github, Linkedin, Mail, MapPin, MessageCircle, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white" style={{ overflowX: "hidden" }}>

            <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <div
                                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Jeferson
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base lg:text-lg leading-relaxed">
                            Desarrollador Full Stack & Cloud apasionado por crear soluciones digitales
                            innovadoras. Con 3+ años de experiencia transformando ideas en realidad.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center text-green-400">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="text-xs md:text-sm font-medium">Disponible para proyectos</span>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Navegación</h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li>
                                <a href="#inicio"
                                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm md:text-base">
                                    <ChevronRight
                                        className="w-3 h-3 md:w-4 md:h-4 mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#sobre-mi"
                                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm md:text-base">
                                    <ChevronRight
                                        className="w-3 h-3 md:w-4 md:h-4 mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                                    Sobre Mí
                                </a>
                            </li>
                            <li>
                                <a href="#habilidades"
                                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm md:text-base">
                                    <ChevronRight
                                        className="w-3 h-3 md:w-4 md:h-4 mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                                    Habilidades
                                </a>
                            </li>
                            <li>
                                <a href="#proyectos"
                                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm md:text-base">
                                    <ChevronRight
                                        className="w-3 h-3 md:w-4 md:h-4 mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a href="#contacto"
                                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm md:text-base">
                                    <ChevronRight
                                        className="w-3 h-3 md:w-4 md:h-4 mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Conectemos</h3>
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex items-center text-gray-300">
                                <div className="bg-indigo-500/20 p-1 md:p-2 rounded-lg mr-2 md:mr-3">
                                    <Mail className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                                </div>
                                <span className="text-xs md:text-sm">Disponible por email</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <div className="bg-green-500/20 p-1 md:p-2 rounded-lg mr-2 md:mr-3">
                                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                                </div>
                                <span className="text-xs md:text-sm">Pisco, Perú</span>
                            </div>

                        </div>


                        <div className="mt-4 md:mt-6">
                            <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-4 text-gray-300 uppercase tracking-wider">Sígueme</h4>
                            <div className="flex space-x-2 md:space-x-3">
                                <a href="#"
                                    className="bg-gray-700 hover:bg-indigo-600 p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                                    <Github className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white" />
                                </a>
                                <a href="#"
                                    className="bg-gray-700 hover:bg-blue-600 p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white" />
                                </a>
                                <a href="#"
                                    className="bg-gray-700 hover:bg-sky-500 p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                                    <Twitter className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">

                        <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                            <span className="bg-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs text-gray-300 border border-gray-600">
                                Node.js
                            </span>
                            <span className="bg-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs text-gray-300 border border-gray-600">
                                React
                            </span>
                            <span className="bg-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs text-gray-300 border border-gray-600">
                                Cloud
                            </span>
                            <span className="bg-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs text-gray-300 border border-gray-600">
                                DevOps
                            </span>
                        </div>


                        <div className="text-center" >
                            <a href="#contacto"
                                className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-sm md:text-base">
                                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                                Iniciar Proyecto
                            </a>
                        </div>


                        <div className="text-center md:text-right">
                            <p className="text-gray-400 text-xs md:text-sm">
                                &copy; 2025 Jeferson.
                                <span className="block md:inline">Todos los derechos reservados.</span>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="text-center mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700">
                    <p className="text-gray-400 text-xs md:text-sm italic">
                        "Transformando ideas en soluciones digitales extraordinarias"
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer