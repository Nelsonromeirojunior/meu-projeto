import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId]?.current;
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  // Track scroll position for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionRefs);
      const currentSection = sections.find(section => {
        const element = sectionRefs[section]?.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const skills = [
    {
      icon: '💻',
      title: 'Desenvolvimento Web',
      description: 'HTML5, CSS3, JavaScript, React e outras tecnologias modernas para criar experiências web acessíveis.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React']
    },
    {
      icon: '🔧',
      title: 'Manutenção Hardware',
      description: 'Experiência em manutenção de computadores, notebooks e redes, com foco em soluções práticas.',
      tags: ['Hardware', 'Redes', 'Manutenção', 'Suporte']
    },
    {
      icon: '🌐',
      title: 'Acessibilidade Digital',
      description: 'Desenvolvimento de soluções tecnológicas inclusivas para a comunidade surda e deficientes auditivos.',
      tags: ['Libras', 'Inclusão', 'UX/UI', 'VLibras']
    },
    {
      icon: '⚙️',
      title: 'Linguagens de Programação',
      description: 'Conhecimento em diversas linguagens e frameworks, sempre buscando aprender novas tecnologias.',
      tags: ['Java', 'Python', 'C#', 'SQL']
    },
    {
      icon: '📊',
      title: 'Engenharia de Software',
      description: 'Metodologias ágeis, gestão de projetos e boas práticas de desenvolvimento.',
      tags: ['Scrum', 'Git', 'UML', 'Testes']
    },
    {
      icon: '🏆',
      title: 'Qualidade & Processos',
      description: 'Experiência em controle de qualidade, WCM e processos industriais.',
      tags: ['WCM', 'ISO', 'Qualidade', 'Processos']
    }
  ];

  const timelineItems = [
    {
      icon: '👤',
      title: 'Apresentação',
      content: 'Nelson Romeiro da Cunha Junior - Sou deficiente auditivo (surdo) e nasci em Campinas, SP, no dia 16/02/1993. Quando tinha 2 anos, perdi a audição devido a uma doença. Desde então, minha jornada tem sido de superação e aprendizado constante.'
    },
    {
      icon: '🎓',
      title: 'Formação Acadêmica',
      content: [
        '📚 Técnico em Informática (2015)',
        '💻 Análise e Desenvolvimento de Sistemas (2024)',
        '🎓 Pós-graduação em Engenharia de Software (2025)'
      ]
    },
    {
      icon: '💼',
      title: 'Experiência Profissional',
      content: [
        '🏭 VIP Papelão Ondulado (2011 - 2014) - Auxiliar de Produção',
        '⚙️ Eaton Ltda (2015-2016) - Operador de Máquina',
        '🏢 Unilever (2016-presente) - Inspetor de Qualidade'
      ]
    },
    {
      icon: '💭',
      title: 'Meu Sonho',
      content: '"Meu sonho é me tornar programador e contribuir para a inclusão digital da comunidade surda!"'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HomeSection sectionRef={sectionRefs.home} scrollToSection={scrollToSection} />
      <AboutSection sectionRef={sectionRefs.about} timelineItems={timelineItems} />
      <SkillsSection sectionRef={sectionRefs.skills} skills={skills} />
      <ContactSection sectionRef={sectionRefs.contact} />
      <Footer />
    </div>
  );
};

export default App;