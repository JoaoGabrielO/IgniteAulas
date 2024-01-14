import React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './App'; // Importe o componente App corretamente

const rootElement = document.getElementById('root');

// Verifica se o elemento 'root' não é nulo e é do tipo Element
if (rootElement instanceof Element) {
  createRoot(rootElement).render(<App />);
} else {
  throw new Error("Elemento 'root' não encontrado no DOM ou não é do tipo Element.");
}
