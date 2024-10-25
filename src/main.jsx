import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css'; // Estilos globais
import TelaIncial from '../src/assets/components/dashboard/TelaInicial';
import MeuCarrinho from  './assets/components/dashboard/MeuCarrinho';
// import Suporte from '../src/assets/components/dashboard/Suporte';
import TelaCadastro from './assets/components/register/TelaCadastro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<TelaIncial />} />
      <Route path="/meu-carrinho" element={<MeuCarrinho />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      {/* <Route path="/suporte" element={<Suporte />} /> */}
      </Routes>
      </Router>
      </React.StrictMode>  
      );





