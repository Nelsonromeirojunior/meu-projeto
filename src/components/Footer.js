import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                🤟🏻
                            </div>
                            <h3 className="text-xl font-bold">DEV Libras Júnior</h3>
                        </div>
                        <p className="mb-2">
                            &copy; {new Date().getFullYear()} Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="mb-2">
                            Desenvolvedor Front-End com 🧏🏻‍♂️ por{' '}
                            <span className="text-yellow-400 font-semibold">Nelson Junior</span>
                        </p>
                        <p className="text-blue-200">
                            🌐 Comprometido com a acessibilidade digital
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;