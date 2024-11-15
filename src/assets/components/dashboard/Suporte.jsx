import React from 'react';
import { FaWhatsapp, FaEnvelope, FaHeadset } from 'react-icons/fa'; // Ícones
import styles from './Suporte.module.css';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';


const Suporte = () => {
  return (
    <>
      <NavBar />
      
      <div className={styles.container}>
        <div className={styles.suporteContainer}>
          <h2 className={styles.titulo}>
            <FaHeadset className={styles.tituloIcon} />
            SUPORTE
          </h2>
          <div className={styles.contato}>
            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FUAJYNYCEROTSD1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAabiSVapuVYCF-QcLilSj8YRbs_SppVv6aZmvPuWjiPaoFktgnre2qtRhYk_aem_LQ_tnyQc3ZzSM2YqoVInLw&e=AT1eoGUKw2nGtpWgpj43PmTrs2Alu2q5ouRhOqZg5YPefq8M-1TW5XgSQHUMjFHgHhBDSYhbjfRDhktZE1MTTI1BFKTuIM-NCdQ3yly593kTf6xBb8-vwA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              <FaWhatsapp className={styles.whatsappIcon} />
            </a>
            <span className={styles.whatsappText}>Clique aqui para falar no WhatsApp</span>
          </div>
          <div className={styles.emailContainer}>
            <FaEnvelope className={styles.emailIcon} />
            <span className={styles.emailText}>rockcultura@gmail.com</span>
          </div>
        </div>
      </div>
      <Footer /> {/* Footer deve ficar após o conteúdo */}
    </>
  );
};

export default Suporte;
