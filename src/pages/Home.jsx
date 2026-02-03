import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>React UI Kit 🎨</h1>
        <p className={styles.heroSubtitle}>
          Современная библиотека компонентов для React с профессиональным SPA демо
        </p>
        <Link to="/components" className={styles.heroButton}>
          Смотреть компоненты
        </Link>
      </div>
      
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>✅</div>
          <h3 className={styles.featureTitle}>Готовые компоненты</h3>
          <p className={styles.featureDescription}>
            Каждый компонент протестирован, документирован и готов к использованию в продакшене
          </p>
        </div>
        
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🎨</div>
          <h3 className={styles.featureTitle}>Темы Light/Dark</h3>
          <p className={styles.featureDescription}>
            Встроенная поддержка светлой и темной тем через CSS Custom Properties
          </p>
        </div>
        
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🚀</div>
          <h3 className={styles.featureTitle}>Быстрый старт</h3>
          <p className={styles.featureDescription}>
            Установите и начните использовать. Все компоненты независимы и модульны
          </p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>1</div>
          <div className={styles.statLabel}>Готовых компонента</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>2</div>
          <div className={styles.statLabel}>Темы</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>30+</div>
          <div className={styles.statLabel}>Запланировано</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>100%</div>
          <div className={styles.statLabel}>Open Source</div>
        </div>
      </div>

      <div className={styles.cta}>
        <h3 className={styles.ctaTitle}>Начните использовать сегодня</h3>
        <p className={styles.ctaDescription}>
          React UI Kit — это не только библиотека компонентов, но и демонстрация 
          профессиональных навыков frontend-разработки. Идеально для портфолио и реальных проектов.
        </p>
        <Link to="/components" className={styles.heroButton}>
          Изучить компоненты
        </Link>
      </div>
    </div>
  );
};

export default Home;