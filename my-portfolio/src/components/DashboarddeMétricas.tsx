
const DashboarddeMétricas = () => {
    return (
       <div className="lg:w-1/2 flex justify-center relative">
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
        {/* Círculos de fondo */}
        <div className="absolute -top-8 -left-8 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-12 left-12 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>

        {/* Dashboard de métricas */}
        <div className="relative h-64 sm:h-72 lg:h-80 flex items-center justify-center">
            <div className="bg-gray-800 rounded-2xl shadow-2xl w-72 h-48 p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Grid de métricas */}
                <div className="grid grid-cols-2 gap-3 h-full">
                    {/* Métrica 1 - CPU */}
                    <div className="bg-gray-700 rounded-lg p-3 flex flex-col justify-between">
                        <div className="text-green-400 text-xs">CPU</div>
                        <div className="text-white text-lg font-mono">42%</div>
                        <div className="w-full bg-gray-600 rounded-full h-1">
                            <div className="bg-green-400 h-1 rounded-full animate-pulse" style={{ width: '42%' }}></div>
                        </div>
                    </div>

                    {/* Métrica 2 - RAM */}
                    <div className="bg-gray-700 rounded-lg p-3 flex flex-col justify-between">
                        <div className="text-blue-400 text-xs">RAM</div>
                        <div className="text-white text-lg font-mono">78%</div>
                        <div className="w-full bg-gray-600 rounded-full h-1">
                            <div className="bg-blue-400 h-1 rounded-full animate-pulse" style={{ width: '78%' }}></div>
                        </div>
                    </div>

                    {/* Métrica 3 - Requests */}
                    <div className="bg-gray-700 rounded-lg p-3 flex flex-col justify-between">
                        <div className="text-purple-400 text-xs">REQ/S</div>
                        <div className="text-white text-lg font-mono">1.2k</div>
                        <div className="flex space-x-1">
                            {[1, 2, 3, 2, 4].map((height, i) => (
                                <div key={i} className="w-2 bg-purple-400 rounded-t animate-bounce" style={{ height: `${height * 4}px`, animationDelay: `${i * 0.1}s` }}></div>
                            ))}
                        </div>
                    </div>

                    {/* Métrica 4 - Uptime */}
                    <div className="bg-gray-700 rounded-lg p-3 flex flex-col justify-between">
                        <div className="text-yellow-400 text-xs">UPTIME</div>
                        <div className="text-white text-sm font-mono">99.9%</div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                            <div className="text-green-400 text-xs">ONLINE</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partículas de datos flotantes */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-75"></div>
            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150"></div>
        </div>
    </div>
</div>
    )
}

export default DashboarddeMétricas