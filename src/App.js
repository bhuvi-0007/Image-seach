import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import HomePage from './pages/HomePage';
import ImageDetailsPage from './pages/ImageDetailsPage';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<ImageDetailsPage />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
