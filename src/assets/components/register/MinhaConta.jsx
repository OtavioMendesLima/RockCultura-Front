import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';
import './MinhaConta.module.css';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import Style from './MinhaConta.module.css'

function MinhaConta() {
  const [userData, setUserData] = useState(null);
  const [loginData, setLoginData] = useState({ nome: '', senha: '' });
  const [registerData, setRegisterData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: ''
  });
  const [showLoginSenha, setShowLoginSenha] = useState(false);
  const [showRegisterSenha, setShowRegisterSenha] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) setUserData(JSON.parse(storedUserData));
  }, []);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      localStorage.setItem("userData", JSON.stringify(response.data));
      setUserData(response.data);
      setMessage('Login bem-sucedido!');
    } catch (error) {
      setMessage("Login falhou. Verifique suas credenciais.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/registrar', registerData);
      setMessage('Cadastro realizado com sucesso!');
      setRegisterData({ nome: '', email: '', senha: '', telefone: '' });
    } catch (error) {
      setMessage('Erro ao realizar cadastro. Tente novamente.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    setMessage("Logout realizado com sucesso.");
  };

  return (
    <>
      <NavBar />
      <div className="container" style={{ marginTop: '80px' }}>
        <h1>Minha Conta</h1>
        {userData ? (
          <div>
            <h2>Bem-vindo, {userData.nome}!</h2>
            <p>E-mail: {userData.email}</p>
            <p>Telefone: {userData.telefone}</p>
            <button onClick={handleLogout}>Sair</button>
          </div>
        ) : (
          <div className="form-container">
            {/* Bloco de Login */}
            <form className={`${Style.form} login-form`} onSubmit={handleLogin}>
              <h2>Entrar</h2>
              <div className="input-group">
                <FaUser className={Style.icon} />
                <input
                  type="text"
                  name="nome"
                  value={loginData.nome}
                  onChange={handleLoginChange}
                  placeholder="Nome de usuário"
                  required
                />
              </div>
              <div className="input-group">
                <FaLock className={Style.icon} />
                <input
                  type={showLoginSenha ? "text" : "password"}
                  name="senha"
                  value={loginData.senha}
                  onChange={handleLoginChange}
                  placeholder="Senha"
                  required
                />
                <button type="button" onClick={() => setShowLoginSenha(!showLoginSenha)}>
                  {showLoginSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <button className="submit-button" type="submit">Acessar</button>
            </form>

            {/* Bloco de Cadastro */}
            <form className={`${Style.form} register-form`} onSubmit={handleRegister}>
              <h2>Cadastre-se</h2>
              <div className="input-group">
                <FaUser className={Style.icon} />
                <input
                  type="text"
                  name="nome"
                  value={registerData.nome}
                  onChange={handleRegisterChange}
                  placeholder="Nome de usuário"
                  required
                />
              </div>
              <div className="input-group">
                <FaEnvelope className={Style.icon} />
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  placeholder="Endereço de e-mail"
                  required
                />
              </div>
              <div className="input-group">
                <FaLock className={Style.icon} />
                <input
                  type={showRegisterSenha ? "text" : "password"}
                  name="senha"
                  value={registerData.senha}
                  onChange={handleRegisterChange}
                  placeholder="Senha"
                  required
                />
                <button type="button" onClick={() => setShowRegisterSenha(!showRegisterSenha)}>
                  {showRegisterSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <div className="input-group">
                <FaPhone className={Style.icon} />
                <input
                  type="tel"
                  name="telefone"
                  value={registerData.telefone}
                  onChange={handleRegisterChange}
                  placeholder="Telefone"
                  required
                />
              </div>
              <button className="submit-button" type="submit">Cadastrar-se</button>
            </form>
          </div>


        )}
        {message && <p>{message}</p>}
      </div>
      <Footer />
    </>
  );
}

export default MinhaConta;
