import {
    Server,
    Layout,
    Cloud,
    Database,
    CheckCircle
} from "lucide-react";
const Skills = () => {
    return (
        <section id="habilidades" className="py-16 md:py-20 bg-gray-50 section-padding" style={{ overflowX: "hidden" }}>
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-4 section-title">
                    Habilidades Técnicas
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-lg">
                    Tecnologías y herramientas que utilizo para crear soluciones
                    innovadoras
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover-lift">
                        <div className="flex items-center mb-3 md:mb-4">
                            <div className="p-2 md:p-3 bg-indigo-100 rounded-lg mr-3 md:mr-4">

                                <Server className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />

                            </div>
                            <h3 className="text-lg md:text-xl font-semibold">Backend</h3>
                        </div>
                        <ul className="space-y-2 md:space-y-3">
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Node.js & Nest.js</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Laravel</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Express.js</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">APIs REST & GraphQL</span>
                            </li>
                        </ul>
                    </div>


                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover-lift">
                        <div className="flex items-center mb-3 md:mb-4">
                            <div className="p-2 md:p-3 bg-blue-100 rounded-lg mr-3 md:mr-4">

                                <Layout className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />

                            </div>
                            <h3 className="text-lg md:text-xl font-semibold">Frontend</h3>
                        </div>
                        <ul className="space-y-2 md:space-y-3">
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">React & React Native</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Vite</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">WordPress</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Tailwind CSS</span>
                            </li>
                        </ul>
                    </div>


                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover-lift">
                        <div className="flex items-center mb-3 md:mb-4">
                            <div className="p-2 md:p-3 bg-green-100 rounded-lg mr-3 md:mr-4">

                                <Cloud className="w-5 h-5 md:w-6 md:h-6 text-green-600" />

                            </div>
                            <h3 className="text-lg md:text-xl font-semibold">Cloud & DevOps</h3>
                        </div>
                        <ul className="space-y-2 md:space-y-3">
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Administración de VPS</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Servicios Cloud (AWS)</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">CI/CD & Docker</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Despliegue de Apps</span>
                            </li>
                        </ul>
                    </div>


                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover-lift">
                        <div className="flex items-center mb-3 md:mb-4">
                            <div className="p-2 md:p-3 bg-purple-100 rounded-lg mr-3 md:mr-4">

                                <Database className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />

                            </div>
                            <h3 className="text-lg md:text-xl font-semibold">Bases de Datos</h3>
                        </div>
                        <ul className="space-y-2 md:space-y-3">
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />


                                <span className="text-sm md:text-base">MySQL & PostgreSQL</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">MongoDB</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Redis</span>
                            </li>
                            <li className="flex items-center">

                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />

                                <span className="text-sm md:text-base">Optimización</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills