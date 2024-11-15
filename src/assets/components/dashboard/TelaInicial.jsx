import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Style from './TelaInicial.module.css';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import { useCarrinho } from '../context/CarrinhoContext';

const TelaInicial = () => {
  const { adicionarAoCarrinho } = useCarrinho();

  const Produtos = [
    {
      nome: 'Camiseta AC/DC',
      preco: 'R$ 89,90',
      material: '100% Algodão',
      tamanhos: 'P, M, G, GG',
      imagem: 'acdc.png',
    },
    {
      nome: 'Camiseta Doug',
      preco: 'R$ 89,90',
      material: '100% Algodão',
      tamanhos: 'Todos os tamanhos',
      imagem: 'doug.png',
    },
    {
      nome: 'Camiseta God of Bar',
      preco: 'R$ 89,90',
      material: '100% Algodão',
      tamanhos: 'M, GG',
      imagem: 'godofbar.png',
    },
    {
      nome: 'Camiseta Guns N Roses',
      preco: 'R$ 89,90',
      material: '100% Algodão',
      tamanhos: 'G, XG, G3',
      imagem: 'guns_logo.png',
    },
    {
      nome: 'Camiseta Iron Maiden',
      preco: 'R$ 89,90',
      material: '100% Algodão',
      tamanhos: 'P, M, G, GG',
      imagem: 'iran_jutsu.png',
    },
    {
      nome: 'Camiseta Led Zeppelin',
      preco: 'R$ 89,90',
      material: '100% Algodão',
      tamanhos : 'Todos os tamanhos',
      imagem: 'led_logo.png',
    },
    {
      nome: 'Camiseta Simpsons Road',
      preco: 'R$ 89,90',
      material: '100% Algodão',
      tamanhos : 'Todos os tamanhos',
      imagem: 'simpsons_road.png',
    },
    {
      nome: 'Camiseta Volta que Deu Merda',
      preco: 'R$ 89,90',
      material: '100% Algodão',
      tamanhos : 'Todos os tamanhos',
      imagem: 'voltaquedeumerda.png',
    },
  ];  

  return (
    <>
      <NavBar />
      <div className={Style.descriptionContainer}>
        <img src="loja.png" alt="Descrição da Loja" className={Style.descriptionImage} />
        <div className={Style.descriptionText}>
        <h2>Bem-vindo à Rock Cultura!</h2>
        <p>Descubra camisetas exclusivas que refletem sua personalidade e estilo. Cada peça é feita com cuidado, utilizando materiais de alta qualidade. Navegue pela nossa coleção e encontre a camiseta perfeita para você!Descubra camisetas exclusivas que refletem sua personalidade e estilo. Cada peça é feita com cuidado, utilizando materiais de alta qualidade. Navegue pela nossa coleção e encontre a camiseta perfeita para vocêDescubra camisetas exclusivas que refletem sua personalidade e estilo. Cada peça é feita com cuidado, utilizando materiais de alta qualidade. Navegue pela nossa coleção e encontre a camiseta perfeita para você</p>
        </div>
      </div>
      <div className={Style.productsContainer}>
        <h1 className={Style.productsTitle}>CONFIRA NOSSAS CAMISETAS</h1>
        <div className={Style.productsItems}>
          {Produtos.map((produto, index) => (
            <div className={Style.productItem} key={index}>
              <img src={produto.imagem} alt={produto.nome} className={Style.productImage} />
              <div className={Style.productInfo}>
                <h3 className={Style.productName}>{produto.nome}</h3>
                <p className={Style.productPrice}>Preço: {produto.preco}</p>
                <p className={Style.productMaterial}>Material: {produto.material}</p>
                <p className={Style.productSizes}>Tamanhos: {produto.tamanhos}</p>
              </div>
              <button
                onClick={() => adicionarAoCarrinho(produto)}
                className={Style.addToCartButton}
              >
                <FaCartPlus /> Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TelaInicial;
