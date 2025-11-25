import { Cloud, Code, Cpu, Database, Server, Shield, Terminal } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'

const TerminalP = () => {
    const [commandIndex, setCommandIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isTyping, setIsTyping] = useState(true)
    const [cursorVisible, setCursorVisible] = useState(true)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [terminalTilt, setTerminalTilt] = useState({ x: 0, y: 0 })
    const [isMobile, setIsMobile] = useState(false)

    const commands = [
        'npm run dev',
        'docker-compose up',
        'node server.js',
        'git push origin main',
        'npm test',
        'deploy --production'
    ]

    const outputs = [
        '> Starting development server...',
        '> Building Docker images...',
        '> Server running on port 3000',
        '> Pushing to GitHub...',
        '> Running test suite...',
        '> Deploying to production...'
    ]

    // Detectar si es móvil
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Efecto de escritura
    useEffect(() => {
        if (isTyping && currentText.length < commands[commandIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentText(commands[commandIndex].slice(0, currentText.length + 1))
            }, 100)
            return () => clearTimeout(timeout)
        } else if (isTyping) {
            const timeout = setTimeout(() => {
                setIsTyping(false)
                setCurrentText('')
                setCommandIndex((prev) => (prev + 1) % commands.length)
            }, 2000)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setIsTyping(true)
            }, 500)
            return () => clearTimeout(timeout)
        }
    }, [currentText, isTyping, commandIndex])

    // Parpadeo del cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev)
        }, 500)
        return () => clearInterval(cursorInterval)
    }, [])

    // Seguimiento del mouse para efectos 3D (solo en desktop)
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (isMobile) return
        
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
        setTerminalTilt({ x: -y, y: x })
        setMousePosition({ x: e.clientX, y: e.clientY })
    }, [isMobile])

    const handleMouseLeave = useCallback(() => {
        setTerminalTilt({ x: 0, y: 0 })
    }, [])

    // Partículas que siguen el mouse (optimizado para móvil)
    const particles = Array.from({ length: isMobile ? 4 : 8 }, (_, i) => {
        const angle = (i / (isMobile ? 4 : 8)) * Math.PI * 2
        const distance = isMobile ? 60 : 100 + Math.sin(Date.now() * 0.001 + i) * 20
        return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            delay: i * 0.1,
            size: isMobile ? 1 : 2
        }
    })

    // Estilos responsivos para la terminal
    const getTerminalStyles = () => {
        const baseStyles = {
            transform: `perspective(1000px) rotateX(${terminalTilt.x}deg) rotateY(${terminalTilt.y}deg) scale(${isMobile ? 0.9 : 1})`,
            boxShadow: isMobile 
                ? `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(99, 102, 241, 0.1)`
                : `${terminalTilt.y * 2}px ${terminalTilt.x * 2}px 25px rgba(0,0,0,0.3), 0 0 0 1px rgba(99, 102, 241, 0.1), inset 0 0 50px rgba(99, 102, 241, 0.05)`
        }
        return baseStyles
    }

    return (
        <div className="w-full lg:w-1/2 flex justify-center relative px-4 sm:px-6 lg:px-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* Círculos de fondo interactivos - Reducidos en móvil */}
                <div
                    className="absolute -top-6 -left-6 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 sm:opacity-30 transition-all duration-1000"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                    }}
                ></div>
                <div
                    className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 sm:opacity-30 transition-all duration-1000"
                    style={{
                        transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
                    }}
                ></div>
                <div
                    className="absolute top-8 left-8 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 sm:opacity-30 transition-all duration-1000"
                    style={{
                        transform: `translate(${mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`
                    }}
                ></div>

                {/* Partículas flotantes - Optimizadas para móvil */}
                {particles.map((particle, index) => (
                    <div
                        key={index}
                        className="absolute bg-cyan-400 rounded-full opacity-60 animate-float"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: '50%',
                            top: '50%',
                            transform: `translate(${particle.x}px, ${particle.y}px)`,
                            animationDelay: `${particle.delay}s`
                        }}
                    ></div>
                ))}

                {/* Terminal interactiva */}
                <div
                    className="relative h-56 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md h-40 sm:h-48 md:h-56 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-700"
                        style={getTerminalStyles()}
                    >
                        {/* Barra superior de la terminal con glow */}
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-gray-700 relative overflow-hidden">
                            <div className="flex space-x-1 sm:space-x-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                            </div>
                            <div className="flex items-center text-gray-300 text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">
                                <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                                <span className="truncate">jeferson@portfolio ~</span>
                            </div>
                            <div className="w-4 sm:w-6"></div>
                            {/* Efecto de luz en la barra */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-pulse"></div>
                        </div>

                        {/* Contenido de la terminal con scroll automático */}
                        <div className="p-3 sm:p-4 font-mono text-xs h-28 sm:h-32 md:h-36 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
                            <div className="space-y-1">
                                <div className="flex items-start text-green-400">
                                    <span className="text-blue-400 flex-shrink-0">visitor@portfolio ~$ </span>
                                    <div className="ml-1 sm:ml-2 min-w-[20px]">
                                        {currentText}
                                        {cursorVisible && <span className="ml-0.5 bg-green-400 w-[1px] sm:w-2 h-3 sm:h-4 animate-pulse inline-block">|</span>}
                                    </div>
                                </div>

                                {!isTyping && (
                                    <div className="text-gray-300 animate-fadeIn text-[10px] sm:text-xs">
                                        {outputs[commandIndex]}
                                        <div className="text-green-400 mt-1">
                                            <span className="text-blue-400">$ </span>
                                            <span className="text-gray-400">// Ready for next command</span>
                                        </div>
                                    </div>
                                )}

                                {/* Líneas del sistema - Responsive */}
                                <div className="text-gray-500 text-[9px] sm:text-[10px] mt-2">
                                    <div className="truncate">CPU: ████████ 42% | RAM: █████████ 78%</div>
                                    <div className="truncate">STATUS: <span className="text-green-400">ACTIVE</span> | UPTIME: 99.9%</div>
                                </div>
                            </div>
                        </div>

                        {/* Efecto de brillo en los bordes */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none border border-indigo-500/20 shadow-lg"></div>
                    </div>

                    {/* Iconos flotantes interactivos - Responsive */}
                    <div className={`absolute ${isMobile ? '-top-2 -right-2' : '-top-4 -right-4'} bg-indigo-500 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:scale-110 hover:bg-indigo-600 transition-all duration-300 cursor-pointer group`}>
                        <Server className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
                        <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] sm:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                            Backend Server
                        </div>
                    </div>

                    <div className={`absolute ${isMobile ? '-bottom-2 -left-2' : '-bottom-4 -left-4'} bg-green-500 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:scale-110 hover:bg-green-600 transition-all duration-300 cursor-pointer group`}>
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
                        <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] sm:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                            Database
                        </div>
                    </div>

                    <div className={`absolute top-1/2 ${isMobile ? '-right-4' : '-right-6'} bg-blue-500 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:scale-110 hover:bg-blue-600 transition-all duration-300 cursor-pointer group`}>
                        <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
                        <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] sm:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                            API Code
                        </div>
                    </div>

                    {/* Iconos adicionales - Ocultos en móvil muy pequeño */}
                    {!isMobile && (
                        <>
                            <div className="absolute top-1/2 -left-6 bg-purple-500 p-3 rounded-xl shadow-lg hover:scale-110 hover:bg-purple-600 transition-all duration-300 cursor-pointer group">
                                <Cpu className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                    Processing
                                </div>
                            </div>

                            <div className="absolute -top-4 left-4 bg-cyan-500 p-3 rounded-xl shadow-lg hover:scale-110 hover:bg-cyan-600 transition-all duration-300 cursor-pointer group">
                                <Cloud className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                    Cloud Infra
                                </div>
                            </div>

                            <div className="absolute -bottom-4 right-4 bg-red-500 p-3 rounded-xl shadow-lg hover:scale-110 hover:bg-red-600 transition-all duration-300 cursor-pointer group">
                                <Shield className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                    Security
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TerminalP