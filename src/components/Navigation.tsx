import React from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const navItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'О себе', href: '#about' },
    { label: 'Проекты', href: '#projects' },
    { label: 'Контакты', href: '#contact' }
  ];

  return (
    <nav style={{ display: 'flex', gap: '2rem' }}>
      {navItems.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          style={{
            color: 'var(--color-white)',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1rem',
            position: 'relative',
            padding: '0.5rem 0',
            transition: 'color 0.3s ease'
          }}
          className="nav-link"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-orange)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-white)';
          }}
        >
          {item.label}
          <motion.span
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '0%',
              height: '2px',
              backgroundColor: 'var(--color-orange)'
            }}
            className="nav-underline"
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      ))}
    </nav>
  );
};

export default Navigation;