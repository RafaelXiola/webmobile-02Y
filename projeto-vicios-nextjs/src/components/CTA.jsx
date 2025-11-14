'use client';

import styles from '@/styles/CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.chamadaAcao} id="contato">
      <div className={styles.containerCTA}>
        <div className={styles.conteudoCta}>
          <div className={styles.textoCta}>
            <h2 className={styles.tituloCta}>Deseja mais informações?</h2>
            <h3 className={styles.subtituloCta}>Atendimento</h3>
            <p className={styles.descricaoCta}>Fale com um de nossos especialistas agora mesmo.</p>
          </div>
          <button className={styles.botaoPrimario}>Atendimento</button>
        </div>
      </div>
    </section>
  );
}
