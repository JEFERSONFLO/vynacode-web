import { Phone, MapPin, Clock, Github, Linkedin, Twitter, User, Mail, FileText, MessageCircle, Send } from 'lucide-react';

const Contac = () => {
    return (
        <section id="contacto" className="py-16 md:py-20 bg-gray-50 section-padding" style={{ overflowX: "hidden" }}>
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-4 section-title">
                    Contacto
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-lg">
                    ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
                </p>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                                    ¡Conectemos!
                                </h3>
                                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                                    Estoy disponible para colaborar en proyectos interesantes. No
                                    dudes en contactarme para discutir tus ideas y cómo puedo
                                    contribuir a hacerlas realidad.
                                </p>

                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-green-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                                            <Phone className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Teléfono</h4>
                                            <p className="text-gray-600 text-sm md:text-base">Disponible bajo solicitud</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-purple-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                                            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                                                Ubicación
                                            </h4>
                                            <p className="text-gray-600 text-sm md:text-base">
                                                Pisco, Perú
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                                                Disponibilidad
                                            </h4>
                                            <p className="text-gray-600 text-sm md:text-base">Respuesta en 24 horas</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Sígueme en</h4>
                                    <div className="flex space-x-3 md:space-x-4">
                                        <a href="#"
                                            className="bg-gray-100 p-2 md:p-3 rounded-lg hover:bg-gray-200 transition-colors group">
                                            <Github
                                                className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-800" />
                                        </a>
                                        <a href="#"
                                            className="bg-gray-100 p-2 md:p-3 rounded-lg hover:bg-gray-200 transition-colors group">
                                            <Linkedin
                                                className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-800" />
                                        </a>
                                        <a href="#"
                                            className="bg-gray-100 p-2 md:p-3 rounded-lg hover:bg-gray-200 transition-colors group">
                                            <Twitter
                                                className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-800" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                    Envíame un mensaje
                                </h3>
                                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                                    Completa el formulario y me pondré en contacto contigo lo
                                    antes posible.
                                </p>

                                <form className="space-y-4 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                <span className="flex items-center text-xs md:text-sm">
                                                    <User className="w-3 h-3 md:w-4 md:h-4 mr-2 text-gray-400" />
                                                    Nombre completo
                                                </span>
                                            </label>
                                            <input type="text" id="name" required
                                                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition placeholder-gray-400 text-sm md:text-base"
                                                placeholder="Tu nombre completo" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                <span className="flex items-center text-xs md:text-sm">
                                                    <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2 text-gray-400" />
                                                    Email
                                                </span>
                                            </label>
                                            <input type="email" id="email" required
                                                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition placeholder-gray-400 text-sm md:text-base"
                                                placeholder="tu.email@ejemplo.com" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            <span className="flex items-center text-xs md:text-sm">
                                                <FileText className="w-3 h-3 md:w-4 md:h-4 mr-2 text-gray-400" />
                                                Asunto
                                            </span>
                                        </label>
                                        <select id="subject" required
                                            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-sm md:text-base">
                                            <option value="" disabled selected>
                                                Selecciona el tipo de proyecto
                                            </option>
                                            <option value="web-development">Desarrollo Web</option>
                                            <option value="mobile-app">Aplicación Móvil</option>
                                            <option value="backend-api">API Backend</option>
                                            <option value="consulting">Consultoría</option>
                                            <option value="other">Otro</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            <span className="flex items-center text-xs md:text-sm">
                                                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2 text-gray-400" />
                                                Mensaje
                                            </span>
                                        </label>
                                        <textarea id="message" rows={4} required
                                            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition placeholder-gray-400 resize-none text-sm md:text-base"
                                            placeholder="Describe tu proyecto, objetivos y cualquier requerimiento específico..."></textarea>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <button type="submit"
                                            className="bg-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm md:text-base">
                                            <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contac