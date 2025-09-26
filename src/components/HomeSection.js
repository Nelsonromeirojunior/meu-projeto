import React from 'react';

const HomeSection = ({ sectionRef, scrollToSection }) => {
    return (
        <section ref={sectionRef} className="pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/95 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-blue-200/20 animate-pulse"></div>

                    <div className="relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                                    Bem-vindo ao<br />DEV Libras Júnior
                                </h2>
                                <p className="text-xl md:text-2xl text-blue-700 mb-6 font-medium">
                                    Desenvolvendo Programação e Acessibilidade 🤟🏻
                                </p>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    Este projeto incentiva a acessibilidade e inclusão digital para pessoas surdas e
                                    com deficiência auditiva. Utilizamos tecnologia e design para criar soluções que
                                    melhorem o acesso à informação e comunicação.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                        aria-label="Conheça minha história"
                                    >
                                        👨‍💻 Conheça Minha História
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                        aria-label="Entre em contato"
                                    >
                                        📧 Entre em Contato
                                    </button>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="w-full max-w-md mx-auto">
                                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-xl">
                                        <div className="text-6xl mb-4">🤟🏻💻</div>
                                        <h3 className="text-2xl font-bold text-white mb-2">DEV Libras Júnior</h3>
                                        <p className="text-blue-100">Acessibilidade Digital</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg">
                                <span className="mr-2">🌐</span>
                                <strong>Este site possui integração com VLibras para tradução em Libras</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;