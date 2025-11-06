export default function FAQ() {
  return (
    <section className="perguntas-frequentes" id="faq">
      <div className="container">
        <div className="conteudo-faq">

          <div className="imagem-faq">
            <div className="imagem-placeholder"></div>
          </div>

          <div className="lista-faq">
            <h2 className="titulo-secao">Perguntas Frequentes</h2>

            <div className="item-faq">
              <div className="pergunta-faq">
                <span>Como sei se estou com um vício?</span>
                <span className="icone-faq">+</span>
              </div>
              <div className="resposta-faq">
                <p>
                  Sintomas comuns incluem perda de controle, abstinência e impacto na vida social ou profissional. Procure ajuda para avaliação adequada.
                </p>
              </div>
            </div>

            <div className="item-faq">
              <div className="pergunta-faq">
                <span>O vício tem cura?</span>
                <span className="icone-faq">+</span>
              </div>
              <div className="resposta-faq">
                <p>
                  O tratamento envolve acompanhamento contínuo e apoio. Com suporte correto, é possível viver em equilíbrio e controle.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
