// src/context/CarrinhoContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  // Carrega o carrinho do localStorage ao inicializar
  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  // Salva o carrinho no localStorage sempre que ele é atualizado
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  const removerDoCarrinho = (produtoIndex) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter((_, index) => index !== produtoIndex));
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => useContext(CarrinhoContext);
