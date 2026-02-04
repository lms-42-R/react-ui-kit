import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠 Главная' },
    { path: '/components', label: '🎨 Компоненты' },
    { path: '/project', label: '📋 О проекте' },
  ];

  return (
    <div className={styles.app}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.logo}>React UI Kit</h2>
          <span className={styles.version}>v0.1.0</span>
        </div>
        
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${
                location.pathname === item.path ? styles.active : ''
              }`}
            >
              <span className={styles.navIcon}>
                {item.label.split(' ')[0]}
              </span>
              <span className={styles.navLabel}>
                {item.label.split(' ').slice(1).join(' ')}
              </span>
            </Link>
          ))}
        </nav>
        
        <div className={styles.sidebarFooter}>
          <div className={styles.githubLink}>
            <a 
              href="https://github.com/lms-42-R" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" 
                alt="GitHub" 
                className={styles.githubIcon}
                width="20"
                height="20"
              />
              <span>Мой GitHub</span>
            </a>
          </div>
          <div className={styles.themeSection}>
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggle}
              aria-label={`Переключить на ${theme === 'light' ? 'темную' : 'светлую'} тему`}
            >
              <span className={styles.themeText}>
                {theme === 'light' ? '⚫ Сделать темную ' : '⚪ Сделать светлую'}
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;