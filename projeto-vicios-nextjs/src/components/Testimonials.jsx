'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/Testimonials.module.css';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Simular fetch de dados
    const loadTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Erro ao carregar depoimentos:', error);
        // Fallback com dados locais
        setTestimonials([
          {
            id: 1,
            nome: 'João',
            idade: 32,
            vicio: 'Álcool',
            texto: 'Eu achava que controlar meu vício em álcool era impossível. Com apoio e terapia, estou sóbrio há 9 meses e reconectando com minha família.'
          },
          {
            id: 2,
            nome: 'Marina',
            idade: 27,
            vicio: 'Jogos',
            texto: 'O vício em jogos me deixou endividado e isolado. Hoje participo de grupos de apoio e consegui retomar minha vida financeira e social.'
          },
          {
            id: 3,
            nome: 'Lucas',
            idade: 21,
            vicio: 'Redes Sociais',
            texto: 'Meu uso excessivo de redes sociais afetava meu sono e minha concentração. Agora aprendi a gerenciar meu tempo e estou mais presente na vida real.'
          },
          {
            id: 4,
            nome: 'Ana',
            idade: 29,
            vicio: 'Comida',
            texto: 'O vício em comida afetava minha saúde física e emocional. Com acompanhamento nutricional e psicológico, encontrei equilíbrio e qualidade de vida.'
          }
        ]);
      }
    };

    loadTestimonials();
  }, []);

  return (
    <section className={styles.depoimentos} id="depoimentos">
      <div className="container">
        <h2 className={styles.tituloSecao}>Relatos Reais</h2>
        <p className={styles.descricaoSecao}>
          Confira histórias de pessoas que superaram seus vícios e estão transformando suas vidas.
        </p>

        <div className={styles.conteudoDepoimentos}>
          <div className={styles.imagemDepoimentos}>
            <img
              src="/imagens/img-testimonials.png"
              alt="Ilustração de pessoas compartilhando seus relatos"
              className={styles.imagemDepoimentos}
            />
          </div>
          <div className={styles.listaDepoimentos}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={styles.itemDepoimento} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.iconeDepoimento}>✓</div>
                <div className={styles.textoDepoimento}>
                  <p>&quot;{testimonial.texto}&quot; – {testimonial.nome}, {testimonial.idade} anos</p>
                </div>
              </div>
            ))}
            <button className={styles.botaoPrimario}>Atendimento</button>
          </div>
        </div>
      </div>
    </section>
  );
}
