import React, { useState } from 'react';
import { Button, ThemeProvider, useTheme } from './components';
import { 
  FiSearch, 
  FiPlus, 
  FiCheck, 
  FiArrowRight, 
  FiSettings,
  FiSun,
  FiMoon,
  FiStar,
  FiTrash2,
  FiDownload
} from 'react-icons/fi';
import './App.css';

const ComponentDemo = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  const handleLoad = (buttonName) => {
    setActiveButton(buttonName);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setActiveButton('');
    }, 1500);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <div className="app-header">
        <h1>React UI Kit - Enhanced Button Component 🎨</h1>
        <div className="app-header-controls">
          <div className="theme-indicator">
            Тема: {theme}
          </div>
          <Button 
            variant="secondary" 
            size="small"
            onClick={toggleTheme}
            startIcon={theme === 'light' ? <FiMoon /> : <FiSun />}
          >
            {theme === 'light' ? 'Темная' : 'Светлая'}
          </Button>
        </div>
      </div>

      {/* Основные варианты кнопок */}
      <section className="section">
        <h2 className="section-title">Основные варианты</h2>
        
        <div className="button-grid-item mb-2">
          <h3 className="section-subtitle">Типы кнопок</h3>
          <div className="button-grid">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
          </div>
        </div>

        <div className="button-grid-item">
          <h3 className="section-subtitle">Размеры</h3>
          <div className="button-grid">
            <Button size="small" variant="primary">Small</Button>
            <Button size="medium" variant="primary">Medium</Button>
            <Button size="large" variant="primary">Large</Button>
          </div>
        </div>
      </section>

      {/* Кнопки с иконками */}
      <section className="section">
        <h2 className="section-title">Кнопки с иконками</h2>
        
        <div className="button-grid-item mb-2">
          <h3 className="section-subtitle">Иконки слева/справа</h3>
          <div className="icon-button-row">
            <Button startIcon={<FiSearch />}>Поиск</Button>
            <Button endIcon={<FiArrowRight />}>Далее</Button>
            <Button startIcon={<FiPlus />} endIcon={<FiCheck />}>Добавить</Button>
            <Button variant="outline" startIcon={<FiStar />}>Избранное</Button>
            <Button variant="ghost" startIcon={<FiDownload />}>Скачать</Button>
          </div>
        </div>

        <div className="button-grid-item mb-2">
          <h3 className="section-subtitle">Только иконки</h3>
          <div className="icon-only-grid">
            <Button iconOnly aria-label="Поиск">
              <FiSearch />
            </Button>
            <Button iconOnly rounded aria-label="Добавить">
              <FiPlus />
            </Button>
            <Button iconOnly variant="secondary" aria-label="Настройки">
              <FiSettings />
            </Button>
            <Button iconOnly variant="outline" size="large" aria-label="Проверить">
              <FiCheck />
            </Button>
            <Button iconOnly rounded variant="danger" aria-label="Удалить">
              <FiTrash2 />
            </Button>
          </div>
        </div>

        <div className="button-grid-item">
          <h3 className="section-subtitle">Круглые кнопки</h3>
          <div className="icon-button-row">
            <Button rounded>Rounded</Button>
            <Button rounded variant="outline">Rounded Outline</Button>
            <Button rounded variant="ghost">Rounded Ghost</Button>
            <Button rounded size="small">Small Rounded</Button>
            <Button rounded size="large">Large Rounded</Button>
          </div>
        </div>
      </section>

      {/* Состояния кнопок */}
      <section className="section">
        <h2 className="section-title">Состояния кнопок</h2>
        
        <div className="button-grid-item mb-2">
          <h3 className="section-subtitle">Загрузка и отключение</h3>
          <div className="states-grid">
            <Button 
              loading={isLoading && activeButton === 'load1'}
              onClick={() => handleLoad('load1')}
            >
              {isLoading && activeButton === 'load1' ? 'Загрузка...' : 'Загрузить'}
            </Button>
            <Button disabled>Disabled</Button>
            <Button disabled variant="outline">Disabled Outline</Button>
            <Button loading iconOnly aria-label="Загрузка">
              <FiSettings />
            </Button>
          </div>
        </div>

        <div className="button-grid-item">
          <h3 className="section-subtitle">На всю ширину</h3>
          <div className="full-width-container">
            <Button fullWidth className="full-width-button">Full Width Button</Button>
            <Button fullWidth variant="outline">Another Full Width</Button>
          </div>
        </div>
      </section>

      {/* Ссылки-кнопки */}
      <section className="section">
        <h2 className="section-title">Кнопки-ссылки</h2>
        
        <div className="link-buttons">
          <Button href="#" variant="primary">Ссылка как кнопка</Button>
          <Button href="#" variant="outline" target="_blank" rel="noopener noreferrer">
            Новая вкладка
          </Button>
          <Button href="#" disabled>Отключенная ссылка</Button>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ComponentDemo />
    </ThemeProvider>
  );
};

export default App;