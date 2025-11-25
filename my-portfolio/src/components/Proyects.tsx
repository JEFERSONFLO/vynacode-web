
const Proyects = () => {
    return (
        <section id="proyectos" className="py-16 md:py-20 bg-white section-padding" style={{ overflowX: "hidden" }}>
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-4 section-title">
                    Mis Proyectos
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-lg">
                    Algunos de los proyectos en los que he trabajado recientemente
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover-lift">
                        <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                            <i data-lucide="car" className="w-12 h-12 md:w-16 md:h-16 text-white"></i>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                                App de Reservas de Vehículos
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                Sistema completo de reserva de vehículos con aplicación móvil en
                                React Native y backend en Nest.js. Incluye gestión de flota,
                                reservas y pagos.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">React Native</span>
                                <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">Nest.js</span>
                                <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">Node.js</span>
                                <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">MySQL</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover-lift">
                        <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                            <i data-lucide="shield-alert" className="w-12 h-12 md:w-16 md:h-16 text-white"></i>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                                App de Alertas de Seguridad
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                Aplicación móvil en React Native con backend propio. Sistema de
                                notificaciones y alertas de seguridad en tiempo real.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">React
                                    Native</span>
                                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Node.js</span>
                                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Backend</span>
                                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Notificaciones
                                    Push</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover-lift">
                        <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                            <i data-lucide="globe" className="w-12 h-12 md:w-16 md:h-16 text-white"></i>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">Ecotourstravel</h3>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                Sitio web para empresa de turismo con WordPress y backend en
                                Node.js para gestión de reservas, servicios y pagos.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">WordPress</span>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Node.js</span>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Backend</span>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Sistema de
                                    Reservas</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover-lift">
                        <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                            <i data-lucide="ticket" className="w-12 h-12 md:w-16 md:h-16 text-white"></i>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">Codex Fraternidades</h3>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                Plataforma para canjear códigos de eventos y obtener
                                invitaciones. Sistema de gestión de usuarios, eventos y códigos
                                promocionales.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Web App</span>
                                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Backend</span>
                                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Sistema de
                                    Códigos</span>
                                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Gestión de
                                    Eventos</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover-lift">
                        <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                            <i data-lucide="file-text" className="w-12 h-12 md:w-16 md:h-16 text-white"></i>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                                App de Exámenes de Policía
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                Aplicación React Native para resolver exámenes de policía.
                                Interfaz intuitiva, sistema de evaluación y seguimiento de
                                progreso.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">React Native</span>
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Mobile App</span>
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Sistema de
                                    Evaluación</span>
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Base de Datos</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover-lift">
                        <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                            <i data-lucide="dollar-sign" className="w-12 h-12 md:w-16 md:h-16 text-white"></i>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">App de Préstamos</h3>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                Aplicación web para gestión de préstamos desarrollada con React
                                Vite y backend en Laravel. Sistema completo de solicitud y
                                aprobación.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">React Vite</span>
                                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Laravel</span>
                                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Backend</span>
                                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Sistema de
                                    Préstamos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Proyects