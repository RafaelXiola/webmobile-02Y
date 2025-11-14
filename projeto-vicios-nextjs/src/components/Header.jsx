'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`${styles.cabecalho} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.containerHeader}>
        <div className={styles.logotipo}>
          <Link href="/">
            <div className={styles.iconeLogo}></div>
          </Link>
        </div>
        <nav className={styles.navegacao}>
          <Link href="/" className={styles.linkNavegacao}>
            Início
          </Link>
          <a href="#servicos" className={styles.linkNavegacao} onClick={handleNavClick}>
            Serviços
          </a>
          <a href="#depoimentos" className={styles.linkNavegacao} onClick={handleNavClick}>
            Depoimentos
          </a>
          <a href="#faq" className={styles.linkNavegacao} onClick={handleNavClick}>
            FAQ
          </a>
          <Link href="/contato" className={styles.linkNavegacao}>
            Contato
          </Link>
          <button className={styles.botaoPrimario}>Atendimento</button>
        </nav>
      </div>
    </header>
  );
}
