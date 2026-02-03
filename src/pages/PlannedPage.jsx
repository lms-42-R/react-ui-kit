import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ComponentStatus.module.scss';

const PlannedPage = ({ componentName }) => {
  const { id } = useParams();
  const name = componentName || id || 'Компонент';
  
  // Приоритеты для разных компонентов
  const priorityMap = {
    'checkbox': 'Высокий',
    'radio': 'Высокий',
    'switch': 'Высокий',
    'modal': 'Средний',
    'table': 'Средний',
    'datepicker': 'Низкий',
    'default': 'Средний'
  };
  
  const priority = priorityMap[id?.toLowerCase()] || priorityMap.default;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.icon}>📅</div>
        <h1 className={styles.title}>{name} <span className={styles.statusBadge}>⏳ Запланировано</span></h1>
        <p className={styles.subtitle}>
          Этот компонент запланирован к разработке в ближайшем будущем
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.prioritySection}>
          <h3>Приоритет разработки: <span className={`${styles.priority} ${styles[priority.toLowerCase()]}`}>{priority}</span></h3>
          <p className={styles.priorityDescription}>
            {priority === 'Высокий' && 'Будет разработан в первую очередь'}
            {priority === 'Средний' && 'В очереди на разработку после компонентов высокого приоритета'}
            {priority === 'Низкий' && 'Будет разработан после компонентов более высокого приоритета'}
          </p>
        </div>

        <div className={styles.features}>
          <h3>Планируемые возможности:</h3>
          <ul className={styles.featuresList}>
            <li>🎯 Полный набор свойств и настроек</li>
            <li>🎨 Поддержка светлой и темной темы</li>
            <li>📱 Адаптивный дизайн для всех устройств</li>
            <li>♿ Доступность (ARIA, клавиатурная навигация)</li>
            <li>🧪 Тестирование в разных сценариях</li>
            <li>📖 Подробная документация с примерами</li>
          </ul>
        </div>

        <div className={styles.roadmap}>
          <h3>План разработки:</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>1</div>
              <div className={styles.timelineContent}>
                <h4>Проектирование API</h4>
                <p>Определение пропсов и возможностей компонента</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>2</div>
              <div className={styles.timelineContent}>
                <h4>Разработка компонента</h4>
                <p>Создание основной функциональности</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>3</div>
              <div className={styles.timelineContent}>
                <h4>Тестирование и документирование</h4>
                <p>Проверка работы и создание примеров</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlannedPage;