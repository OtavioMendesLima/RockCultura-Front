import React, { useState } from 'react';
import axios from 'axios';
import Style from './TelaCadastro.module.css';

const TelaCadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/api/cadastro', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Cadastro realizado:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <div className={Style.cadastroContainer}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
        <input type="tel" name="telefone" placeholder="Telefone" onChange={handleChange} required />
        <button type="submit" className={Style.cadastrarButton}>Cadastrar</button>
      </form>
    </div>
  );
};

export default TelaCadastro;
