import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. Importar as ferramentas do roteador
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 2. Importar suas novas páginas
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

// 3. Definir as rotas (os "caminhos" do seu site)
const router = createBrowserRouter([
  {
    path: "/", // Quando o usuário visitar a "raiz" (página principal)
    element: <HomePage />, // Mostre este componente
  },
  {
    path: "/login", // Quando o usuário visitar /login
    element: <LoginPage />, // Mostre a tela de login
  },
]);

// 4. Renderizar o roteador (em vez do App)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);