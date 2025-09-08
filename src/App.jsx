import './App.css'
import { useContext, useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './contexts/theme-context';
import { Rotas } from "./pages/routes";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.background = theme.background;
    document.body.style.color = theme.color;
  }, [theme]);

  return <Rotas />;
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App