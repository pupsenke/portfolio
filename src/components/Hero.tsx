import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px' }}
        >
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.1' }}>
            Привет, я{' '}
            <span style={{ color: 'var(--color-orange)', display: 'inline-block' }}>
              Валерия
            </span>
            <br />
            Frontend разработчик
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: '1.25rem',
              color: 'var(--color-light-gray)',
              marginBottom: '2rem',
              maxWidth: '600px'
            }}
          >
            Учусь создавать современные, быстрые и адаптивные веб-приложения с использованием React,
            TypeScript и современных инструментов разработки.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn">
              Смотреть проекты
            </a>
            <a href="#contact" className="btn btn-outline">
              Связаться со мной
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{ display: 'flex', gap: '1.5rem' }}
          >
            <a
              href="https://github.com/pupsenke"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-white)',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-orange)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaGithub />
            </a>
            <a
              href="https://t.me/pupsenke"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-white)',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-orange)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaTelegram />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Декоративные элементы */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-orange) 0%, transparent 70%)',
          opacity: 0.1,
          filter: 'blur(40px)'
        }}
      />
    </section>
  );
};

export default Hero;