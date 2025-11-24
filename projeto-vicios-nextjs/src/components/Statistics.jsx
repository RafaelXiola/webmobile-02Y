'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Statistics.module.css';

export default function Statistics() {
  const [stats, setStats] = useState([
    { numero: '12K', rotulo: 'Pacientes atendidos' },
    { numero: '5K', rotulo: "ONG's parceiras pelo mundo" },
    { numero: '97%', rotulo: 'Taxa de eficácia no tratamento' }
  ]);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector(`.${styles.estatisticas}`);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const animateCounters = () => {
    const targets = [12000, 5000, 97];
    const durations = [1500, 1500, 1500];

    targets.forEach((target, index) => {
      let current = 0;
      const increment = target / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setAnimatedStats((prev) => {
          const newStats = [...prev];
          newStats[index] = Math.floor(current);
          return newStats;
        });
      }, durations[index] / 50);
    });
  };

  const formatNumber = (num, index) => {
    if (index === 0) return Math.floor(num / 1000) + 'K';
    if (index === 1) return Math.floor(num / 1000) + 'K';
    if (index === 2) return num + '%';
    return num;
  };

  return (
    <section className={styles.estatisticas}>
      <div className="container">
        <h2 className={styles.tituloEstatisticas}>Mais de 10 anos ajudando pessoas a superar seus vícios</h2>
        <p className={styles.descricaoEstatisticas}>
          Atendemos milhares de pessoas em todo o mundo com uma abordagem profissional e humana.
        </p>

        <div className={styles.gradeEstatisticas}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.itemEstatistica}>
              <div className={styles.numeroEstatistica}>{formatNumber(animatedStats[index], index)}</div>
              <div className={styles.rotuloEstatistica}>{stat.rotulo}</div>
            </div>
          ))}
        </div>

        <div className={styles.imagemEstatisticas}>
          <img 
            src="/imagens/img-statistics.png" 
            alt="Ilustração simbolizando apoio comunitário na quebra do ciclo de vícios"
            className={styles.ilustracaoEstatisticas}
          />
        </div>
      </div>
    </section>
  );
}
