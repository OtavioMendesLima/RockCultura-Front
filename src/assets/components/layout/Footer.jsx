import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Style from './Footer.module.css';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  return (
    <footer className={Style.footer}>
      <div className={Style.socialMedia}>
        <a href="https://www.instagram.com/rockcultura_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={Style.icon} />
        </a>
    
        <a href="https://wa.me/https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FUAJYNYCEROTSD1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAabiSVapuVYCF-QcLilSj8YRbs_SppVv6aZmvPuWjiPaoFktgnre2qtRhYk_aem_LQ_tnyQc3ZzSM2YqoVInLw&e=AT1eoGUKw2nGtpWgpj43PmTrs2Alu2q5ouRhOqZg5YPefq8M-1TW5XgSQHUMjFHgHhBDSYhbjfRDhktZE1MTTI1BFKTuIM-NCdQ3yly593kTf6xBb8-vwA" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={Style.icon} />
        </a>
      </div>

      <div className={Style.privacy}>
        <button onClick={togglePrivacyPolicy} className={Style.privacyButton}>
          Política de Privacidade
        </button>
      </div>

      <div className={Style.copyright}>
        &copy; {new Date().getFullYear()} Rock Cultura. Todos os direitos reservados.
      </div>

      {showPrivacyPolicy && (
        <div className={Style.modal}>
          <div className={Style.modalContent}>
            <h2>Política de Privacidade</h2>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
              Nós nos comprometemos a manter a privacidade de todos os nossos usuários. Coletamos informações
              apenas para melhorar a experiência do usuário e não compartilhamos dados com terceiros sem
              consentimento.
            </p>
            <p>
              Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais.
              Para mais informações, entre em contato conosco através do email: rockcultura@gmail.com
            </p>
            <button onClick={togglePrivacyPolicy}>Fechar</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
