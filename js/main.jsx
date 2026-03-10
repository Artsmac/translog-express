import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from '../js/app';
import '../css/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);