import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--color-dark-gray)',
      padding: '2rem 0',
      borderTop: '1px solid var(--color-gray)'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--color-light-gray)', marginBottom: '0.5rem' }}>
          Создано с <FaHeart style={{ color: 'var(--color-orange)', margin: '0 0.25rem' }} /> в {currentYear}
        </p>
        <p style={{ color: 'var(--color-light-gray)', fontSize: '0.9rem' }}>
          Все права защищены. Сделано с использованием React, TypeScript и Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;