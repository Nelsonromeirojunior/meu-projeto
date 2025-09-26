import React from 'react';

const NavBar = ({ activeSection, scrollToSection }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg backdrop-blur-lg" aria-label="Navegação principal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl animate-pulse">
                            🤟🏻
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold text-white">
                            DEV Libras Júnior
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        {[
                            { id: 'home', label: '🏠 Início' },
                            { id: 'about', label: '👨‍💻 Sobre' },
                            { id: 'skills', label: '⚙️ Habilidades' },
                            { id: 'contact', label: '📧 Contato' }
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeSection === item.id
                                        ? 'bg-yellow-400 text-blue-900 shadow-lg'
                                        : 'text-white hover:bg-yellow-400 hover:text-blue-900'
                                    }`}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <select
                            value={activeSection}
                            onChange={(e) => scrollToSection(e.target.value)}
                            className="bg-blue-700 text-white px-3 py-1 rounded border border-blue-600"
                            aria-label="Menu de navegação"
                        >
                            <option value="home">Início</option>
                            <option value="about">Sobre</option>
                            <option value="skills">Habilidades</option>
                            <option value="contact">Contato</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;