import { Cloud, Code, Database, Globe, Server, Shield, Zap } from 'lucide-react'

const MicroServices = () => {
    return (
        <div className="lg:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                            {/* Círculos de fondo */}
                            <div className="absolute -top-8 -left-8 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                            <div className="absolute top-12 left-12 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>

                            {/* Red de microservicios */}
                            <div className="relative h-64 sm:h-72 lg:h-80 flex items-center justify-center">
                                {/* Nodo central */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center animate-pulse">
                                        <Cloud className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Nodos periféricos en círculo */}
                                {[
                                    { icon: Server, color: 'bg-blue-500', position: 'top-4 left-1/2' },
                                    { icon: Database, color: 'bg-green-500', position: 'top-1/3 right-4' },
                                    { icon: Code, color: 'bg-cyan-500', position: 'bottom-1/3 right-4' },
                                    { icon: Shield, color: 'bg-red-500', position: 'bottom-4 left-1/2' },
                                    { icon: Zap, color: 'bg-yellow-500', position: 'bottom-1/3 left-4' },
                                    { icon: Globe, color: 'bg-indigo-500', position: 'top-1/3 left-4' }
                                ].map((node, index) => (
                                    <div key={index} className={`absolute ${node.position} transform -translate-x-1/2 -translate-y-1/2 z-10`}>
                                        <div className={`${node.color} w-12 h-12 rounded-xl shadow-lg flex items-center justify-center animate-bounce`} style={{ animationDelay: `${index * 0.2}s` }}>
                                            <node.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                ))}

                                {/* Líneas de conexión animadas */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="relative w-48 h-48">
                                            {/* Líneas radiales */}
                                            {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
                                                <div
                                                    key={index}
                                                    className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent origin-left"
                                                    style={{ transform: `rotate(${rotation}deg)` }}
                                                >
                                                    <div className="w-2 h-2 bg-indigo-400 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 animate-ping"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    )
}

export default MicroServices