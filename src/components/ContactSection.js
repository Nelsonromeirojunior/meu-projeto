import React, { useState, useEffect } from 'react';

const ContactSection = ({ sectionRef }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formMessage, setFormMessage] = useState({ text: '', type: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) {
            setFormMessage({
                text: '❌ Por favor, preencha todos os campos obrigatórios.',
                type: 'error'
            });
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setFormMessage({
                text: '✅ Mensagem enviada com sucesso! Obrigado pelo contato, responderei em breve.',
                type: 'success'
            });

            // Reset form
            setFormData({ name: '', email: '', subject: '', message: '' });

        } catch (error) {
            setFormMessage({
                text: '❌ Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente por e-mail.',
                type: 'error'
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Clear form message after 5 seconds
    useEffect(() => {
        if (formMessage.text) {
            const timer = setTimeout(() => {
                setFormMessage({ text: '', type: '' });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [formMessage]);

    return (
        <section ref={sectionRef} className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-12 text-yellow-400">
                    Entre em Contato
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
                </h2>

                <div className="bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="text-6xl mb-4">💌</div>
                        <h3 className="text-2xl font-bold text-blue-800 mb-2">Vamos conversar!</h3>
                        <p className="text-gray-600">
                            Estou sempre aberto para novas oportunidades e parcerias. Entre em contato comigo!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-blue-800 font-semibold mb-2" htmlFor="name">
                                    👤 Nome *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors duration-300 bg-gray-50"
                                    placeholder="Seu nome completo"
                                    aria-required="true"
                                />
                            </div>

                            <div>
                                <label className="block text-blue-800 font-semibold mb-2" htmlFor="email">
                                    📧 E-mail *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors duration-300 bg-gray-50"
                                    placeholder="seu@email.com"
                                    aria-required="true"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-blue-800 font-semibold mb-2" htmlFor="subject">
                                💬 Assunto
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors duration-300 bg-gray-50"
                                placeholder="Assunto da mensagem"
                            />
                        </div>

                        <div>
                            <label className="block text-blue-800 font-semibold mb-2" htmlFor="message">
                                📝 Mensagem *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="5"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors duration-300 bg-gray-50 resize-none"
                                placeholder="Escreva sua mensagem aqui..."
                                aria-required="true"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
                                aria-label="Enviar mensagem"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Enviando...
                                    </div>
                                ) : (
                                    <>📤 Enviar Mensagem</>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Form Message */}
                    {formMessage.text && (
                        <div className={`mt-6 p-4 rounded-xl text-center font-medium ${formMessage.type === 'success'
                                ? 'bg-green-100 text-green-800 border border-green-300'
                                : 'bg-red-100 text-red-800 border border-red-300'
                            }`}>
                            {formMessage.text}
                        </div>
                    )}

                    {/* Contact Info */}
                    <div className="border-t border-gray-200 mt-12 pt-8">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl text-blue-600 mb-2">📧</div>
                                <h4 className="font-semibold text-blue-800 mb-1">E-mail</h4>
                                <a
                                    href="mailto:devlibrasjunior@gmail.com"
                                    className="text-yellow-600 hover:text-yellow-700 font-medium"
                                >
                                    devlibrasjunior@gmail.com
                                </a>
                            </div>

                            <div>
                                <div className="text-3xl text-blue-600 mb-2">💼</div>
                                <h4 className="font-semibold text-blue-800 mb-1">GitHub</h4>
                                <a
                                    href="https://github.com/Nelsonromeirojunior"
                                    className="text-yellow-600 hover:text-yellow-700 font-medium"
                                >
                                    https://github.com/Nelsonromeirojunior
                                </a>
                            </div>

                            <div>
                                <div className="text-3xl text-blue-600 mb-2">🔗</div>
                                <h4 className="font-semibold text-blue-800 mb-1">LinkedIn</h4>
                                <a
                                    href="https://www.linkedin.com/in/nelson-romeiro-junior-5933263a/"
                                    className="text-yellow-600 hover:text-yellow-700 font-medium"
                                >
                                    Nelson Romeiro Junior
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;