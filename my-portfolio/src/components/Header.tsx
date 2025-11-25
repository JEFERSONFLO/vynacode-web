import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50" style={{ overflowX: "hidden" }}>
            <nav className="container mx-auto px-4 sm:px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-indigo-600">Jeferson</div>


                    <div className="hidden md:flex space-x-6 lg:space-x-8">
                        <a
                            href="#inicio"
                            className="text-gray-600 hover:text-indigo-600 transition font-medium text-sm lg:text-base"
                        >
                            Inicio
                        </a>
                        <a
                            href="#sobre-mi"
                            className="text-gray-600 hover:text-indigo-600 transition font-medium text-sm lg:text-base"
                        >
                            Sobre Mí
                        </a>
                        <a
                            href="#habilidades"
                            className="text-gray-600 hover:text-indigo-600 transition font-medium text-sm lg:text-base"
                        >
                            Habilidades
                        </a>
                        <a
                            href="#proyectos"
                            className="text-gray-600 hover:text-indigo-600 transition font-medium text-sm lg:text-base"
                        >
                            Proyectos
                        </a>
                        <a
                            href="#contacto"
                            className="text-gray-600 hover:text-indigo-600 transition font-medium text-sm lg:text-base"
                        >
                            Contacto
                        </a>
                    </div>


                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 focus:outline-none p-2 transition-transform duration-200 hover:scale-110"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>


                <div
                    className={`md:hidden mt-4 space-y-0  p-4  transition-all duration-300 ease-in-out ${isMenuOpen
                        ? "block opacity-100 translate-y-0"
                        : "hidden opacity-0 -translate-y-2"
                        }`}
                >
                    <a
                        href="#inicio"
                        onClick={closeMenu}
                        className="block text-gray-600 hover:text-indigo-600 transition font-medium py-3 px-4 border-b border-gray-100 hover:bg-gray-50 rounded-md"
                    >
                        Inicio
                    </a>
                    <a
                        href="#sobre-mi"
                        onClick={closeMenu}
                        className="block text-gray-600 hover:text-indigo-600 transition font-medium py-3 px-4 border-b border-gray-100 hover:bg-gray-50 rounded-md"
                    >
                        Sobre Mí
                    </a>
                    <a
                        href="#habilidades"
                        onClick={closeMenu}
                        className="block text-gray-600 hover:text-indigo-600 transition font-medium py-3 px-4 border-b border-gray-100 hover:bg-gray-50 rounded-md"
                    >
                        Habilidades
                    </a>
                    <a
                        href="#proyectos"
                        onClick={closeMenu}
                        className="block text-gray-600 hover:text-indigo-600 transition font-medium py-3 px-4 border-b border-gray-100 hover:bg-gray-50 rounded-md"
                    >
                        Proyectos
                    </a>
                    <a
                        href="#contacto"
                        onClick={closeMenu}
                        className="block text-gray-600 hover:text-indigo-600 transition font-medium py-3 px-4 hover:bg-gray-50 rounded-md"
                    >
                        Contacto
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
