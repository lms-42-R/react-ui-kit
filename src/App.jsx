import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Components from './pages/Components';
import ButtonDemo from './pages/ButtonDemo';
import InProgressPage from './pages/InProgressPage';
import PlannedPage from './pages/PlannedPage';
import Project from './pages/Project';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/components" element={<Components />} />
            <Route path="/button" element={<ButtonDemo />} />
            
            {/* Компоненты в разработке */}
            <Route path="/input" element={<InProgressPage componentName="Input" />} />
            <Route path="/textarea" element={<InProgressPage componentName="Textarea" />} />

            {/* Компоненты запланированные */}
            <Route path="/checkbox" element={<PlannedPage componentName="Checkbox" />} />
            <Route path="/radio" element={<PlannedPage componentName="Radio" />} />
            <Route path="/switch" element={<PlannedPage componentName="Switch" />} />
            <Route path="/select" element={<PlannedPage componentName="Select" />} />
            <Route path="/modal" element={<PlannedPage componentName="Modal" />} />
            <Route path="/table" element={<PlannedPage componentName="Table" />} />
            
            {/* Динамические маршруты */}
            <Route path="/in-progress/:id" element={<InProgressPage />} />
            <Route path="/planned/:id" element={<PlannedPage />} />
            
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;