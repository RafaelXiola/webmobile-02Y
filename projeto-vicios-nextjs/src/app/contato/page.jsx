'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular envio de formulário
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Validação básica
      if (!formData.nome || !formData.email || !formData.mensagem) {
        setStatus({ type: 'erro', message: 'Por favor, preencha todos os campos obrigatórios.' });
        setLoading(false);
        return;
      }

      setStatus({
        type: 'sucesso',
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });

      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
    } catch (error) {
      setStatus({
        type: 'erro',
        message: 'Erro ao enviar mensagem. Tente novamente mais tarde.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <Link href="/">
          <button className={styles.botaoVoltar}>← Voltar para Home</button>
        </Link>

        <div className={styles.header}>
          <h1 className={styles.titulo}>Entre em Contato</h1>
          <p className={styles.subtitulo}>Estamos aqui para ajudar você</p>
        </div>

        {status && (
          <div className={`${styles.mensagem} ${styles[`mensagem${status.type.charAt(0).toUpperCase() + status.type.slice(1)}`]}`}>
            {status.message}
          </div>
        )}

        <div className={styles.conteudo}>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <div className={styles.grupoFormulario}>
              <label htmlFor="nome" className={styles.label}>
                Nome *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.grupoFormulario}>
              <label htmlFor="email" className={styles.label}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.grupoFormulario}>
              <label htmlFor="telefone" className={styles.label}>
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.grupoFormulario}>
              <label htmlFor="assunto" className={styles.label}>
                Assunto
              </label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.grupoFormulario}>
              <label htmlFor="mensagem" className={styles.label}>
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                className={styles.textarea}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.botaoEnviar} disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>

          <div className={styles.informacoes}>
            <div className={styles.secaoInfo}>
              <h3 className={styles.tituloInfo}>Telefone</h3>
              <p className={styles.textoInfo}>(11) 3000-0000</p>
            </div>

            <div className={styles.secaoInfo}>
              <h3 className={styles.tituloInfo}>Email</h3>
              <p className={styles.textoInfo}>
                <a href="mailto:contato@projetovicios.com" className={styles.link}>
                  contato@projetovicios.com
                </a>
              </p>
            </div>

            <div className={styles.secaoInfo}>
              <h3 className={styles.tituloInfo}>Endereço</h3>
              <p className={styles.textoInfo}>
                Rua Exemplo, 123<br />
                São Paulo, SP 01234-567<br />
                Brasil
              </p>
            </div>

            <div className={styles.secaoInfo}>
              <h3 className={styles.tituloInfo}>Horário de Atendimento</h3>
              <p className={styles.textoInfo}>
                Segunda a Sexta: 08:00 - 18:00<br />
                Sábado: 09:00 - 13:00<br />
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
