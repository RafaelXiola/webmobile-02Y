'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Conheça o nosso Projeto';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const imagemPrincipal = document.querySelector(`.${styles.imagemPrincipal}`);
      if (imagemPrincipal) {
        const scrollY = window.pageYOffset;
        imagemPrincipal.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.secaoPrincipal}>
      <div className="container">
        <div className={styles.conteudoPrincipal}>
          <div className={styles.textoPrincipal}>
            <h1 className={styles.tituloPrincipal}>{displayedText}</h1>
            <p className={styles.subtituloPrincipal}>Seu vício acaba aqui!</p>
            <p className={styles.descricaoPrincipal}>
              Oferecemos apoio para superar todos os tipos de vícios: álcool, drogas, jogos, internet, comida e mais. Estamos aqui para te ajudar a transformar sua vida.
            </p>
            <button className={styles.botaoSecundario}>Comece sua jornada agora!</button>
          </div>
          <div className={styles.imagemPrincipal}>
            <img
              src="/imagens/img-hero.png"
              alt="Imagem principal da campanha"
              className={styles.imagemPlaceholder}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
