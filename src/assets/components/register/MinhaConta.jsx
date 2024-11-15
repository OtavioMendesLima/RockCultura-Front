import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaSignOutAlt } from 'react-icons/fa';
import './MinhaConta.module.css';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import Style from './MinhaConta.module.css';

function MinhaConta() {
  const [userData, setUserData] = useState(null);
  const [loginData, setLoginData] = useState({ nome: '', senha: '' });
  const [registerData, setRegisterData] = useState({ nome: '', email: '', senha: '', telefone: '' });
  const [showLoginSenha, setShowLoginSenha] = useState(false);
  const [showRegisterSenha, setShowRegisterSenha] = useState(false);
  const [message, setMessage] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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

  const showMessage = (text, isError = false) => {
    setMessage(
      <div style={{
        backgroundColor: isError ? '#FF0000' : '#003580',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '8px',
        marginTop: '20px',
        maxWidth: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontSize: '16px'
      }}>
        {text}
      </div>
    );
    setTimeout(() => setMessage(''), 1500);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      localStorage.setItem("userData", JSON.stringify(response.data));
      setUserData(response.data);
      showMessage("Login bem sucedido!");
    } catch (error) {
      showMessage("Login falhou. Verifique suas credenciais.", true);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/registrar', registerData);
      showMessage("Cadastro realizado com sucesso!");
      setRegisterData({ nome: '', email: '', senha: '', telefone: '' });
    } catch (error) {
      showMessage("Erro ao realizar cadastro. Tente novamente.", true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    showMessage("Você saiu da sua conta!");
    setShowLogoutModal(false);
  };

  return (
    <>
      <NavBar />
      <div className={Style.container} style={{ marginTop: '10%' }}>
        {userData ? (
          <div className={Style.accountDetails}>
            <h2>Bem-vindo, {userData.nome}!</h2>
            <div className={Style.infoContainer}>
              <div className={Style.infoItem}>
                <FaUser className={Style.icon} />
                <p>Nome de Usuário: <span>{userData.nome}</span></p>
              </div>
              <div className={Style.infoItem}>
                <FaEnvelope className={Style.icon} />
                <p>Email: <span>{userData.email}</span></p>
              </div>
              <div className={Style.infoItem}>
                <FaPhone className={Style.icon} />
                <p>Telefone: <span>{userData.telefone}</span></p>
              </div>
            </div>
            <button className={Style.logoutButton} onClick={() => setShowLogoutModal(true)}>
              <FaSignOutAlt /> Sair
            </button>
          </div>
        ) : (
          <div className={Style.formContainer}>
            {/* Bloco de Login */}
            <form className={`${Style.form} ${Style.loginForm}`} onSubmit={handleLogin}>
              <h2>Entrar</h2>
              <div className={Style.inputGroup}>
                <FaUser className={Style.icon} />
                <input type="text" name="nome" value={loginData.nome} onChange={handleLoginChange} placeholder="Nome de usuário" required />
              </div>
              <div className={Style.inputGroup}>
                <FaLock className={Style.icon} />
                <input type={showLoginSenha ? "text" : "password"} name="senha" value={loginData.senha} onChange={handleLoginChange} placeholder="Senha" required />
                <button type="button" onClick={() => setShowLoginSenha(!showLoginSenha)}>
                  {showLoginSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <button className={Style.submitButton} type="submit">Acessar</button>
            </form>

            {/* Bloco de Cadastro */}
            <form className={`${Style.form} ${Style.registerForm}`} onSubmit={handleRegister}>
              <h2>Cadastre-se</h2>
              <div className={Style.inputGroup}>
                <FaUser className={Style.icon} />
                <input type="text" name="nome" value={registerData.nome} onChange={handleRegisterChange} placeholder="Nome de usuário" required />
              </div>
              <div className={Style.inputGroup}>
                <FaEnvelope className={Style.icon} />
                <input type="email" name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="Endereço de e-mail" required />
              </div>
              <div className={Style.inputGroup}>
                <FaLock className={Style.icon} />
                <input type={showRegisterSenha ? "text" : "password"} name="senha" value={registerData.senha} onChange={handleRegisterChange} placeholder="Senha" required />
                <button type="button" onClick={() => setShowRegisterSenha(!showRegisterSenha)}>
                  {showRegisterSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <div className={Style.inputGroup}>
                <FaPhone className={Style.icon} />
                <input type="tel" name="telefone" value={registerData.telefone} onChange={handleRegisterChange} placeholder="Telefone" required />
              </div>
              <button className={Style.submitButton} type="submit">Cadastrar-se</button>
            </form>
          </div>
        )}
        {message && <p>{message}</p>}
      </div>

      {showLogoutModal && (
        <div className={Style.modalOverlay}>
          <div className={Style.modalContent}>
            <p>Tem certeza que deseja sair?</p>
            <button className={Style.submitButton} onClick={handleLogout}>Sair</button>
            <button className={Style.cancelButton} onClick={() => setShowLogoutModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default MinhaConta;
