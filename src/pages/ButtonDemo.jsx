import React, { useState } from 'react';
import { Button } from '../components';
import { FiSearch, FiPlus, FiArrowRight } from 'react-icons/fi';

const ButtonDemo = () => {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="page">
      <h1>Button Component</h1>
      <p className="subtitle">Кнопки позволяют пользователям выполнять действия</p>
      
      <div className="demo-section">
        <h2>Варианты</h2>
        <div className="demo-grid">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
      
      <div className="demo-section">
        <h2>С иконками</h2>
        <div className="demo-grid">
          <Button startIcon={<FiSearch />}>Поиск</Button>
          <Button endIcon={<FiArrowRight />}>Далее</Button>
          <Button startIcon={<FiPlus />} endIcon={<FiArrowRight />}>Добавить</Button>
        </div>
      </div>
      
      <div className="demo-section">
        <h2>Состояния</h2>
        <div className="demo-grid">
          <Button loading={loading} onClick={handleLoad}>
            {loading ? 'Загрузка...' : 'Загрузить'}
          </Button>
          <Button disabled>Disabled</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </div>
      
      <div className="code-section">
        <h2>Использование</h2>
        <pre className="code-block">
{`import { Button } from './components';

// Базовое использование
<Button onClick={handleClick}>Нажми меня</Button>

// С иконкой
<Button startIcon={<FiSearch />}>Поиск</Button>

// Состояние загрузки
<Button loading={isLoading}>Загрузка...</Button>`}
        </pre>
      </div>
    </div>
  );
};

export default ButtonDemo;