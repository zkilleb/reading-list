import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, Login } from './routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './themes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
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
