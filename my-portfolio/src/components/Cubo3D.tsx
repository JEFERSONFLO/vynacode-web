import { Code, Database, Server, Shield } from 'lucide-react'


const Cubo3D = () => {
  return (
                       <div className="lg:w-1/2 flex justify-center relative">
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
        {/* Círculos de fondo */}
        <div className="absolute -top-8 -left-8 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-12 left-12 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>

        {/* Cubo 3D giratorio */}
        <div className="relative h-64 sm:h-72 lg:h-80 flex items-center justify-center">
            <div className="relative w-32 h-32 transform-style-preserve-3d animate-spin-slow">
                {/* Cara frontal */}
                <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-2xl flex items-center justify-center transform translate-z(16px)">
                    <Server className="w-12 h-12 text-white" />
                </div>
                
                {/* Cara derecha */}
                <div className="absolute w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl shadow-2xl flex items-center justify-center transform rotate-y(90deg) translate-z(16px)">
                    <Database className="w-12 h-12 text-white" />
                </div>
                
                {/* Cara posterior */}
                <div className="absolute w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-400 rounded-xl shadow-2xl flex items-center justify-center transform rotate-y(180deg) translate-z(16px)">
                    <Code className="w-12 h-12 text-white" />
                </div>
                
                {/* Cara izquierda */}
                <div className="absolute w-32 h-32 bg-gradient-to-br from-red-500 to-pink-400 rounded-xl shadow-2xl flex items-center justify-center transform rotate-y(-90deg) translate-z(16px)">
                    <Shield className="w-12 h-12 text-white" />
                </div>
            </div>

            {/* Orbitales */}
            <div className="absolute inset-0">
                {[0, 90, 180, 270].map((rotation, index) => (
                    <div
                        key={index}
                        className="absolute top-1/2 left-1/2 w-48 h-48 border-2 border-indigo-300 border-dashed rounded-full animate-spin-slow-reverse"
                        style={{ 
                            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                            animationDelay: `${index * 0.5}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    </div>
</div>

  )
}

export default Cubo3D