import React, { useState, useEffect } from 'react';
import { Button, ThemeProvider, useTheme } from './components';

const ComponentDemo = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Тест CSS переменных
  useEffect(() => {
    console.log('Current theme:', theme);
    console.log('CSS variables:', {
      primary: getComputedStyle(document.documentElement)
        .getPropertyValue('--color-primary').trim(),
      bg: getComputedStyle(document.documentElement)
        .getPropertyValue('--color-bg-primary').trim()
    });
  }, [theme]);

  return (
    <div style={{ 
      padding: '2rem', 
      minHeight: '100vh',
      backgroundColor: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '3rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <h1>React UI Kit - Глобальные стили работают! ✅</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--border-radius-md)'
          }}>
            Тема: {theme}
          </div>
          <Button 
            variant="secondary" 
            size="small"
            onClick={toggleTheme}
          >
            Переключить тему
          </Button>
        </div>
      </div>

      {/* Тест CSS переменных */}
      <div style={{ 
        padding: '2rem',
        marginBottom: '2rem',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--border-radius-lg)',
        border: '1px solid var(--color-border)'
      }}>
        <h3>Тест CSS переменных:</h3>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            backgroundColor: 'var(--color-primary)',
            borderRadius: 'var(--border-radius-md)'
          }}></div>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            backgroundColor: 'var(--color-success)',
            borderRadius: 'var(--border-radius-md)'
          }}></div>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            backgroundColor: 'var(--color-error)',
            borderRadius: 'var(--border-radius-md)'
          }}></div>
        </div>
      </div>

      {/* Button Demos */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Buttons</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Variants</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Sizes</h3>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>States</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button disabled>Disabled</Button>
            <Button loading={isLoading} onClick={handleLoad}>
              {isLoading ? 'Loading...' : 'Click to Load'}
            </Button>
            <Button fullWidth>Full Width</Button>
          </div>
        </div>
      </section>

      <div style={{ 
        padding: '2rem', 
        backgroundColor: 'var(--color-bg-tertiary)',
        borderRadius: 'var(--border-radius-lg)',
        marginTop: '3rem',
        border: '1px solid var(--color-border)'
      }}>
        <h3>✅ Глобальные стили активны!</h3>
        <p>CSS переменные работают в обеих темах. Все SCSS файлы автоматически получают доступ к переменным и миксинам.</p>
      </div>
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