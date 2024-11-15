// src/pages/MeuCarrinho.js
import React from 'react';
import Style from './MeuCarrinho.module.css';
import { useCarrinho } from '../context/CarrinhoContext';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';

const MeuCarrinho = () => {
  const { carrinho, removerDoCarrinho } = useCarrinho();

  return (
    <div className={Style.carrinhoPage}>
      <NavBar />
      <div className={Style.carrinhoContainer}>
        <h1 className={Style.carrinhoTitle}>Meu Carrinho</h1>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul className={Style.carrinhoList}>
            {carrinho.map((produto, index) => (
              <li key={index} className={Style.carrinhoItem}>
                <img src={produto.imagem} alt={produto.nome} className={Style.productImage} />
                <div>
                  <h3>{produto.nome}</h3>
                  <p>Preço: {produto.preco}</p>
                  <p>Material: {produto.material}</p>
                  <p>Tamanhos: {produto.tamanhos}</p>
                  <button
                    onClick={() => removerDoCarrinho(index)}
                    className={Style.removeButton}
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MeuCarrinho;
