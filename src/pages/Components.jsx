import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Components.module.scss';

const Components = () => {
  const components = [
    { 
      id: 'button', 
      name: 'Button', 
      status: 'ready', 
      description: 'Кнопки с разными вариантами и состояниями',
      icon: '🎯'
    },
    { 
      id: 'input', 
      name: 'Input', 
      status: 'in-progress', 
      description: 'Поля ввода с валидацией и масками',
      icon: '✏️'
    },
    { 
      id: 'checkbox', 
      name: 'Checkbox', 
      status: 'planned', 
      description: 'Чекбоксы с состояниями checked/indeterminate',
      icon: '☑️'
    },
    { 
      id: 'select', 
      name: 'Select', 
      status: 'planned', 
      description: 'Выпадающие списки с поиском',
      icon: '📋'
    },
    { 
      id: 'modal', 
      name: 'Modal', 
      status: 'planned', 
      description: 'Модальные окна разных размеров',
      icon: '🪟'
    },
    { 
      id: 'table', 
      name: 'Table', 
      status: 'planned', 
      description: 'Таблицы данных с сортировкой',
      icon: '📊'
    },
  ];

  const getStatusConfig = (status) => {
    const configs = {
      'ready': {
        badge: '✓ Готово',
        badgeClass: styles.badgeSuccess,
        buttonText: 'Смотреть демо →',
        buttonClass: styles.btnOutline
      },
      'in-progress': {
        badge: '⌛ В работе',
        badgeClass: styles.badgeWarning,
        buttonText: 'В разработке ⌛',
        buttonClass: styles.btnInProgress
      },
      'planned': {
        badge: 'x',
        badgeClass: styles.badgeInfo,
        buttonText: 'Запланировано ⏳',
        buttonClass: styles.btnPlanned
      }
    };
    return configs[status] || configs.planned;
  };

  const getLinkPath = (component) => {
    if (component.status === 'ready') {
      return `/${component.id}`;
    } else if (component.status === 'in-progress') {
      return `/in-progress/${component.id}`; // или /input
    } else {
      return `/planned/${component.id}`; // или /checkbox
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Компоненты</h1>
        <p className={styles.pageDescription}>
          Список всех компонентов библиотеки. Наведите на карточку для предпросмотра эффектов.
        </p>
      </div>
      
      <div className={styles.componentsGrid}>
        {components.map((component) => {
          const statusConfig = getStatusConfig(component.status);
          
          return (
            <div 
              key={component.id} 
              className={`${styles.componentCard} ${styles[component.status]}`}
              data-status={component.status}
            >
              <div className={styles.componentIcon}>{component.icon}</div>
              
              <div className={styles.componentHeader}>
                <h3 className={styles.componentTitle}>{component.name}</h3>
                <span className={`${styles.badge} ${statusConfig.badgeClass}`}>
                  {statusConfig.badge}
                </span>
              </div>
              
              <p className={styles.componentDescription}>{component.description}</p>
              
              <div className={styles.componentFooter}>
                <Link 
                  to={getLinkPath(component)} 
                  className={`${styles.cardButton} ${statusConfig.buttonClass}`}
                >
                  {statusConfig.buttonText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.legend}>
        <h3 className={styles.legendTitle}>Легенда статусов:</h3>
        <div className={styles.legendItems}>
          <div className={styles.legendItem}>
            <span className={`${styles.badge} ${styles.badgeSuccess}`}>✓</span>
            <span>Готово к использованию</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.badge} ${styles.badgeWarning}`}>⌛</span>
            <span>В активной разработке</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.badge} ${styles.badgeInfo}`}>x</span>
            <span>Запланировано к разработке</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;