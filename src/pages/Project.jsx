import React from 'react';
import styles from './Project.module.scss';

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h1 className={styles.title}>О проекте</h1>
        <p className={styles.subtitle}>React UI Kit — современная библиотека компонентов для React</p>
      </div>

      <div className={styles.content}>
        {/* Карточки с описанием */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🎯</div>
            <h3 className={styles.cardTitle}>Цель проекта</h3>
            <p className={styles.cardText}>
              Создание современной, доступной и хорошо документированной библиотеки UI компонентов 
              для ускорения разработки React-приложений.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>👨‍💻</div>
            <h3 className={styles.cardTitle}>Для разработчиков</h3>
            <p className={styles.cardText}>
              Готовые к использованию компоненты с TypeScript поддержкой, 
              которые экономят время и обеспечивают согласованность интерфейсов.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>📚</div>
            <h3 className={styles.cardTitle}>Для обучения</h3>
            <p className={styles.cardText}>
              Чистая архитектура, лучшие практики React и понятная документация 
              делают проект отличным учебным материалом.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🏢</div>
            <h3 className={styles.cardTitle}>Для компаний</h3>
            <p className={styles.cardText}>
              Готовая дизайн-система для внутренних проектов или продуктов. 
              Легко кастомизируется под брендинг компании.
            </p>
          </div>
        </div>

        {/* Особенности */}
        <div className={styles.features}>
          <h2 className={styles.sectionTitle}>Что отличает наш UI Kit</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <span className={styles.featureBadge}>✅</span>
              <span>Полная доступность (A11Y)</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureBadge}>✅</span>
              <span>TypeScript из коробки</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureBadge}>✅</span>
              <span>Поддержка тем Light/Dark</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureBadge}>✅</span>
              <span>Модульная архитектура</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureBadge}>✅</span>
              <span>Полная документация</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureBadge}>✅</span>
              <span>Индивидуальная кастомизация</span>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className={styles.stats}>
          <h2 className={styles.sectionTitle}>В цифрах</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1+</div>
              <div className={styles.statLabel}>готовых компонентов</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>2</div>
              <div className={styles.statLabel}>темы оформления</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>30+</div>
              <div className={styles.statLabel}>запланировано</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Open Source</div>
            </div>
          </div>
        </div>

        {/* Ссылка на GitHub */}
        <div className={styles.githubSection}>
          <a 
            href="https://github.com/lms-42-R/react-ui-kit" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <span className={styles.githubIcon}>📂</span>
            <span>Исходный код на GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;