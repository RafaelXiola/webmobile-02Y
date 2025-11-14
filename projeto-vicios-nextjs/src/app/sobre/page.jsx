import Link from 'next/link';
import styles from '@/styles/About.module.css';

export const metadata = {
  title: 'Sobre - Projeto de Apoio a Vícios',
  description: 'Conheça nossa história, missão e valores no combate aos vícios.',
};

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <Link href="/">
          <button className={styles.botaoVoltar}>← Voltar para Home</button>
        </Link>

        <div className={styles.header}>
          <h1 className={styles.titulo}>Sobre Nós</h1>
          <p className={styles.subtitulo}>Mais de 10 anos ajudando pessoas a superar seus vícios</p>
        </div>

        <div className={styles.conteudo}>
          <div className={styles.imagem}></div>
          <div className={styles.texto}>
            <p>
              Fundado em 2014, nosso projeto nasceu da necessidade de oferecer apoio profissional e humanizado para pessoas que enfrentam vícios de qualquer natureza. Acreditamos que a recuperação é possível para todos.
            </p>
            <p>
              Nossa equipe é composta por psicólogos, médicos, nutricionistas e especialistas em dependência química que trabalham juntos para oferecer tratamentos personalizados e eficazes.
            </p>
            <p>
              Ao longo dos anos, temos atendido milhares de pacientes e ajudado suas famílias a compreender e apoiar o processo de recuperação.
            </p>
          </div>
        </div>

        <div className={styles.secao}>
          <h2 className={styles.tituloSecao}>Nossa Missão</h2>
          <p>
            Oferecer apoio profissional, humanizado e acessível para pessoas que enfrentam vícios, ajudando-as a recuperar suas vidas e reintegrar-se à sociedade com dignidade e esperança.
          </p>
        </div>

        <div className={styles.secao}>
          <h2 className={styles.tituloSecao}>Nossos Valores</h2>
          <ul className={styles.lista}>
            <li className={styles.itemLista}>Empatia e Compreensão</li>
            <li className={styles.itemLista}>Profissionalismo e Excelência</li>
            <li className={styles.itemLista}>Acessibilidade e Inclusão</li>
            <li className={styles.itemLista}>Inovação em Tratamentos</li>
            <li className={styles.itemLista}>Respeito à Dignidade Humana</li>
          </ul>
        </div>

        <div className={styles.secao}>
          <h2 className={styles.tituloSecao}>Estatísticas</h2>
          <ul className={styles.lista}>
            <li className={styles.itemLista}>12.000+ pacientes atendidos</li>
            <li className={styles.itemLista}>5.000+ parcerias com ONGs</li>
            <li className={styles.itemLista}>97% de taxa de eficácia</li>
            <li className={styles.itemLista}>Atuação em 50+ cidades</li>
            <li className={styles.itemLista}>Mais de 10 anos de experiência</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
