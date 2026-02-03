import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ComponentStatus.module.scss';

const InProgressPage = ({ componentName }) => {
  const { id } = useParams();
  const name = componentName || id || 'Компонент';
  
  // Прогресс разработки (можно менять для разных компонентов)
  const progressMap = {
    'input': 45,
    'textarea': 20,
    'select': 10,
    'default': 30
  };
  
  const progress = progressMap[id?.toLowerCase()] || progressMap.default;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.icon}>🔨</div>
        <h1 className={styles.title}>{name} <span className={styles.statusBadge}>⌛ В разработке</span></h1>
        <p className={styles.subtitle}>
          Этот компонент активно разрабатывается и скоро будет доступен
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.progressSection}>
          <h3>Прогресс разработки</h3>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className={styles.progressText}>{progress}% завершено</div>
        </div>

        <div className={styles.features}>
          <h3>Что уже реализовано:</h3>
          <ul className={styles.featuresList}>
            <li>✅ Базовая структура компонента</li>
            <li>✅ Подключение к системе тем</li>
            <li>✅ Responsive дизайн</li>
            {progress > 40 && <li>✅ Демо-страница с примерами</li>}
            {progress > 60 && <li>✅ Тестирование в разных браузерах</li>}
            <li>◻️ Документация и примеры использования</li>
            <li>◻️ Финальное тестирование и оптимизация</li>
          </ul>
        </div>

        <div className={styles.expected}>
          <h3>Ожидаемая дата релиза:</h3>
          <div className={styles.date}>Через 1-2 недели</div>
          <p className={styles.note}>
            Дата может измениться в зависимости от сложности реализации
          </p>
        </div>
      </div>

      <div className={styles.actions}>
        <Link to="/components" className={styles.btnSecondary}>
          ← Назад к списку компонентов
        </Link>
        <Link to="/button" className={styles.btnPrimary}>
          Посмотреть готовые компоненты
        </Link>
      </div>
    </div>
  );
};

export default InProgressPage;