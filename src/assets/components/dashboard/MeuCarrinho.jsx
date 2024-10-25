import React from 'react';
import Style from './MeuCarrinho.module.css';

const MeuCarrinho = ({ carrinho, removerDoCarrinho }) => {
  return (
    <div className={Style.carrinhoContainer}>
      <h2>Meu Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        carrinho.map((produto, index) => (
          <div key={index} className={Style.carrinhoItem}>
            <img src={produto.imagem} alt={produto.nome} className={Style.carrinhoImage} />
            <div className={Style.carrinhoInfo}>
              <h3>{produto.nome}</h3>
              <p>Preço: {produto.preco}</p>
              <button onClick={() => removerDoCarrinho(index)} className={Style.removerButton}>
                Remover
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MeuCarrinho;
