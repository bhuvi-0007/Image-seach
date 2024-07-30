import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { ImageProvider } from './pages/ImageProvider';

ReactDOM.render(
  <ErrorBoundary>
    <ImageProvider>
    <App />
    </ImageProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);
