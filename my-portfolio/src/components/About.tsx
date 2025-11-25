import {
    Code,
    Cloud,
    Database,
    Calendar,
    FolderOpen,
    Users,
    Award,
    Layers,
    Zap,
    Shield
} from "lucide-react";



const About = () => {
    return (
        <section id="sobre-mi" className="py-16 md:py-20 bg-white section-padding" style={{ overflowX: "hidden" }}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 section-title">Sobre Mí</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Desarrollador full stack apasionado por crear soluciones
                        tecnológicas innovadoras que resuelven problemas reales
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
                    <div>
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 md:p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
                                Mi Trayectoria
                            </h3>
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-indigo-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                                        <Code className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />

                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-base sm:text-lg mb-2">
                                            Desarrollo Full Stack
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Con 3 años de experiencia especializándome en crear
                                            soluciones backend robustas con Node.js y Laravel,
                                            complementadas con interfaces modernas en React y React
                                            Native.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">

                                        <Cloud className="w-5 h-5 md:w-6 md:h-6 text-green-600" />

                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-base sm:text-lg mb-2">
                                            Infraestructura Cloud
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Experiencia en administración de VPS, despliegue de
                                            aplicaciones y optimización de infraestructura para
                                            garantizar máximo rendimiento.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">

                                        <Database className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />

                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-base sm:text-lg mb-2">Bases de Datos</h4>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Especializado en diseño, optimización y gestión de bases
                                            de datos relacionales y NoSQL para aplicaciones de alto
                                            rendimiento.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="bg-indigo-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">

                                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />

                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">3+</h3>
                            <p className="text-gray-600 font-medium text-sm md:text-base">Años de Experiencia</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="bg-green-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <FolderOpen className="w-6 h-6 md:w-8 md:h-8 text-green-600" />

                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">20+</h3>
                            <p className="text-gray-600 font-medium text-sm md:text-base">Proyectos Completados</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="bg-purple-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">

                                <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />

                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">15+</h3>
                            <p className="text-gray-600 font-medium text-sm md:text-base">Clientes Satisfechos</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                <Award className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />

                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">100%</h3>
                            <p className="text-gray-600 font-medium text-sm md:text-base">Comprometido</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-center mb-6 md:mb-8">
                        Mi Enfoque de Desarrollo
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover-lift">
                            <div className="bg-indigo-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                                <Layers className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />

                            </div>
                            <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3">Arquitectura Escalable</h4>
                            <p className="text-gray-600 text-xs md:text-sm">
                                Diseño sistemas que crecen con tu negocio, utilizando las
                                mejores prácticas de arquitectura de software y patrones de
                                diseño.
                            </p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover-lift">
                            <div className="bg-green-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                                <Zap className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                            </div>
                            <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3">Rendimiento Óptimo</h4>
                            <p className="text-gray-600 text-xs md:text-sm">
                                Optimizo cada aspecto de la aplicación, desde el código hasta la
                                infraestructura, para garantizar tiempos de respuesta rápidos.
                            </p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover-lift">
                            <div className="bg-purple-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                                <Shield className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                            </div>
                            <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3">Seguridad Integral</h4>
                            <p className="text-gray-600 text-xs md:text-sm">
                                Implemento medidas de seguridad robustas en cada capa de la
                                aplicación, protegiendo los datos y la privacidad de los
                                usuarios.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About