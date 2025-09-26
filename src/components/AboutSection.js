import React from 'react';

const AboutSection = ({ sectionRef, timelineItems }) => {
    return (
        <section ref={sectionRef} className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-12 text-yellow-400">
                    Minha História
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
                </h2>

                <div className="space-y-8">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="bg-white/95 rounded-2xl p-8 shadow-xl ml-8 relative">
                                {/* Timeline dot */}
                                <div className="absolute -left-12 top-6 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-sm">{item.icon}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                                    {item.title}
                                </h3>

                                <div className="text-gray-700 leading-relaxed">
                                    {Array.isArray(item.content) ? (
                                        <ul className="space-y-2">
                                            {item.content.map((contentItem, contentIndex) => (
                                                <li key={contentIndex} className="flex items-start">
                                                    <span className="mr-2">•</span>
                                                    <span dangerouslySetInnerHTML={{ __html: contentItem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                </li>
                                            ))}
                                        </ul>
                                    ) : item.title === 'Meu Sonho' ? (
                                        <div className="text-center">
                                            <p className="italic text-lg font-medium">{item.content}</p>
                                        </div>
                                    ) : (
                                        <p>{item.content}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;