'use client';

import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.containerFooter}>
        <div className={styles.conteudoRodape}>
          <div className={styles.logoRodape}>
            <Link href="/">
              <div className={styles.iconeLogo}></div>
            </Link>
          </div>
          <div className={styles.linksRodape}>
            <div className={styles.colunaRodape}>
              <h4>Serviços</h4>
              <Link href="/vicios/apostas">Apostas</Link>
              <Link href="/vicios/alcool">Álcool</Link>
              <Link href="/vicios/drogas">Drogas</Link>
              <Link href="/vicios/redes-sociais">Redes Sociais</Link>
              <Link href="/vicios/comida">Comida</Link>
            </div>
            <div className={styles.colunaRodape}>
              <h4>Sobre</h4>
              <Link href="/sobre">Nossa História</Link>
              <Link href="/sobre">Equipe</Link>
              <Link href="/sobre">Missão</Link>
              <Link href="/sobre">Valores</Link>
              <Link href="/contato">Contato</Link>
            </div>
            <div className={styles.colunaRodape}>
              <h4>Ajuda</h4>
              <a href="#faq">FAQ</a>
              <Link href="/contato">Suporte</Link>
              <Link href="/contato">Atendimento</Link>
              <a href="#">Termos</a>
              <a href="#">Política de Privacidade</a>
            </div>
            <div className={styles.colunaRodape}>
              <h4>Redes Sociais</h4>
              <div className={styles.iconesSociais}>
                <div className={styles.iconeSocial}></div>
                <div className={styles.iconeSocial}></div>
                <div className={styles.iconeSocial}></div>
                <div className={styles.iconeSocial}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
