import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiJavascript } from 'react-icons/si';

const About: React.FC = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript />, level: 80, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, level: 80, color: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
    { name: 'HTML/CSS', icon: <FaCode />, level: 90, color: '#E34F26' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, color: '#06B6D4' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: '#339933' },
    { name: 'REST API', icon: <FaDatabase />, level: 85, color: '#FF6B35' },
    { name: 'PostgreSQL', icon: <FaDatabase />, level: 90, color: '#4169E1' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">О себе</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                  Моя история
                </h3>
                <p style={{ marginBottom: '1rem', color: 'var(--color-light-gray)' }}>
                  Я учусь на 4 курсе Политехнического колледжа ПТИ НовГУ в Великом Новгороде 
                  по специальности "Информационные системы и программирование". 
                  Сейчас активно ищу возможность пройти стажировку в сфере frontend-разработки, 
                  чтобы начать применять свои знания на практике и развиваться как специалист.
                </p>
                <p style={{ marginBottom: '2rem', color: 'var(--color-light-gray)' }}>
                  Нахожу удовольствие в решении сложных задач и создании интуитивных 
                  пользовательских интерфейсов. Постоянно изучаю новые технологии 
                  и современные подходы к разработке, стремясь к профессиональному росту.
                </p>
              </motion.div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-white)' }}>
                Навыки
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <div style={{ fontSize: '1.25rem', color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span style={{ fontWeight: '600' }}>{skill.name}</span>
                      <span style={{ marginLeft: 'auto', color: 'var(--color-orange)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: 'var(--color-gray)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${skill.color} 0%, var(--color-orange) 100%)`,
                          borderRadius: 'var(--radius-md)'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;