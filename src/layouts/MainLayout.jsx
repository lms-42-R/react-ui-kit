import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../components';

const MainLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠 Главная' },
    { path: '/components', label: '🎨 Компоненты' },
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>UI Kit</h2>
          <span className="version">v0.1.0</span>
        </div>
        
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Темная' : '☀️ Светлая'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;