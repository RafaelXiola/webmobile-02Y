'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Services.module.css';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/api/vicios');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Erro ao carregar serviços:', error);
        // Fallback com dados locais
        setServices([
          {
            id: 'apostas',
            nome: 'Vício em Apostas',
            descricao: 'Acompanhamento psicológico e estratégias de controle para quem quer se libertar do vício em jogos de azar.'
          },
          {
            id: 'alcool',
            nome: 'Vício em Álcool',
            descricao: 'Programa de reabilitação para alcoólatras, com suporte médico, terapêutico e acompanhamento contínuo.'
          },
          {
            id: 'drogas',
            nome: 'Vício em Drogas',
            descricao: 'Tratamento especializado para dependência de drogas, incluindo terapia individual, grupal e suporte familiar.'
          },
          {
            id: 'redes-sociais',
            nome: 'Vício em Redes Sociais',
            descricao: 'Estratégias de gerenciamento de tempo e suporte psicológico para reduzir o impacto das redes sociais no dia a dia.'
          },
          {
            id: 'comida',
            nome: 'Vício em Comida',
            descricao: 'Acompanhamento nutricional e psicológico para quem enfrenta compulsão alimentar e quer retomar hábitos saudáveis.'
          }
        ]);
      }
    };

    loadServices();
  }, []);

  return (
    <section className={styles.servicos} id="servicos">
      <div className="container">
        <h2 className={styles.tituloSecao}>Deixe a gente te ajudar!</h2>
        <div className={styles.gradeServicos}>
          {services.map((service, index) => (
            <div key={service.id} className={styles.cartaoServico} style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className={styles.tituloServico}>{service.nome}</h3>
              <p className={styles.descricaoServico}>{service.descricao}</p>
              <Link href={`/vicios/${service.id}`}>
                <button className={styles.botaoLink}>Saiba mais</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
