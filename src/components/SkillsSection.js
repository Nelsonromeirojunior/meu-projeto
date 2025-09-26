import React from 'react';

const SkillsSection = ({ sectionRef, skills }) => {
    return (
        <section ref={sectionRef} className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-12 text-yellow-400">
                    Minhas Especialidades
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white/95 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
                        >
                            <div className="text-6xl mb-4">{skill.icon}</div>
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">
                                {skill.title}
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {skill.description}
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {skill.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;