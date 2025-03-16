import { StrictMode } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

import './styles/globals.css';

createRoot(window.document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
