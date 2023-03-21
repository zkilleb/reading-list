import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, Login } from './routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { baseTheme } from './themes';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="App" data-testid="App">
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
