'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from '@/styles/VicioDetail.module.css';

const vicioIds = ['apostas', 'alcool', 'drogas', 'redes-sociais', 'comida'];

export default function VicioDetail() {
  const params = useParams();
  const { id } = params;
  const [vicio, setVicio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVicio = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/vicios/${id}`);
        if (!response.ok) {
          throw new Error('Vício não encontrado');
        }
        const data = await response.json();
        setVicio(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadVicio();
    }
  }, [id]);

  const currentIndex = vicioIds.indexOf(id);
  const previousId = currentIndex > 0 ? vicioIds[currentIndex - 1] : null;
  const nextId = currentIndex < vicioIds.length - 1 ? vicioIds[currentIndex + 1] : null;

  if (loading) {
    return (
      <div className={styles.vicioDetail}>
        <div className={styles.container}>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (error || !vicio) {
    return (
      <div className={styles.vicioDetail}>
        <div className={styles.container}>
          <p>Erro: {error || 'Vício não encontrado'}</p>
          <Link href="/">
            <button className={styles.botaoVoltar}>Voltar para Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.vicioDetail}>
      <div className={styles.container}>
        <Link href="/">
          <button className={styles.botaoVoltar}>← Voltar para Home</button>
        </Link>

        <div className={styles.header}>
          <h1 className={styles.titulo}>{vicio.nome}</h1>
          <p className={styles.descricao}>{vicio.descricaoCompleta}</p>
        </div>

        <div className={styles.conteudo}>
          <div className={styles.imagem}></div>

          <div>
            <div className={styles.secao}>
              <h2 className={styles.tituloSecao}>Sintomas</h2>
              <ul className={styles.lista}>
                {vicio.sintomas.map((sintoma, index) => (
                  <li key={index} className={styles.itemLista}>
                    {sintoma}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.secao}>
              <h2 className={styles.tituloSecao}>Tratamentos Disponíveis</h2>
              <ul className={styles.lista}>
                {vicio.tratamentos.map((tratamento, index) => (
                  <li key={index} className={styles.itemLista}>
                    {tratamento}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.navegacao}>
          {previousId ? (
            <Link href={`/vicios/${previousId}`} className={styles.linkNavegacao}>
              ← Anterior
            </Link>
          ) : (
            <span className={`${styles.linkNavegacao} ${styles.desabilitado}`}>← Anterior</span>
          )}

          <Link href="/" className={styles.linkNavegacao}>
            Voltar para Home
          </Link>

          {nextId ? (
            <Link href={`/vicios/${nextId}`} className={styles.linkNavegacao}>
              Próximo →
            </Link>
          ) : (
            <span className={`${styles.linkNavegacao} ${styles.desabilitado}`}>Próximo →</span>
          )}
        </div>
      </div>
    </div>
  );
}
