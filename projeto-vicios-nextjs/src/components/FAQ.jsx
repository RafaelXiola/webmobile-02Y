'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/FAQ.module.css';

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const response = await fetch('/api/faq');
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Erro ao carregar FAQ:', error);
        // Fallback com dados locais
        setFaqs([
          {
            id: 1,
            pergunta: 'Como sei se estou com um vício?',
            resposta: 'Sintomas comuns incluem perda de controle, abstinência, impacto na vida social e profissional. Procure ajuda profissional para avaliação adequada.'
          },
          {
            id: 2,
            pergunta: 'O vício tem cura?',
            resposta: 'Sim, o vício é tratável. Com o apoio adequado, terapia profissional e determinação pessoal, muitas pessoas conseguem se recuperar.'
          },
          {
            id: 3,
            pergunta: 'Qual é a duração do tratamento?',
            resposta: 'A duração varia de pessoa para pessoa e depende do tipo e gravidade do vício. Alguns programas duram de 30 a 90 dias.'
          }
        ]);
      }
    };

    loadFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.perguntasFrequentes} id="faq">
      <div className="container">
        <div className={styles.conteudoFaq}>
          <div className={styles.imagemFaq}></div>
          <div className={styles.listaFaq}>
            <h2 className={styles.tituloSecao}>Perguntas Frequentes</h2>
            {faqs.map((faq, index) => (
              <div key={faq.id} className={styles.itemFaq} style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className={styles.perguntaFaq}
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <span>{faq.pergunta}</span>
                  <span className={styles.iconeFaq} style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </div>
                {openIndex === index && (
                  <div className={`${styles.respostaFaq} ${styles.aberta}`}>
                    <p>{faq.resposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
