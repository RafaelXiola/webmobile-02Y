'use client';

import styles from '@/styles/Partners.module.css';

export default function Partners() {
  const partners = [
    { id: 1, name: 'Logo 1' },
    { id: 2, name: 'Logo 2' },
    { id: 3, name: 'Logo 3' },
    { id: 4, name: 'Logo 4' }
  ];

  return (
    <section className={styles.parceiros}>
      <div className="container">
        <h2 className={styles.tituloSecao}>Nossos Parceiros</h2>
        <div className={styles.gradeParceiros}>
          {partners.map((partner, index) => (
            <div key={partner.id} className={styles.logoParceiro} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.placeholderLogo}>{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
