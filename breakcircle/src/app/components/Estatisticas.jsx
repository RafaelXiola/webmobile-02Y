export default function Estatisticas() {
  return (
    <section className="estatisticas">
      <div className="container">
        <h2 className="titulo-estatisticas">
          Mais de 10 anos ajudando pessoas a superar seus vícios
        </h2>
        <p className="descricao-estatisticas">
          Atendemos milhares de pessoas ao redor do mundo com acolhimento,
          dedicação e acompanhamento profissional.
        </p>

        <div className="grade-estatisticas">
          <div className="item-estatistica">
            <div className="numero-estatistica">12K+</div>
            <div className="rotulo-estatistica">Pessoas atendidas</div>
          </div>

          <div className="item-estatistica">
            <div className="numero-estatistica">5K+</div>
            <div className="rotulo-estatistica">ONGs parceiras</div>
          </div>

          <div className="item-estatistica">
            <div className="numero-estatistica">97%</div>
            <div className="rotulo-estatistica">Satisfação no atendimento</div>
          </div>
        </div>

        <div className="imagem-estatisticas">
          <div className="imagem-placeholder grande"></div>
        </div>
      </div>
    </section>
  );
}
