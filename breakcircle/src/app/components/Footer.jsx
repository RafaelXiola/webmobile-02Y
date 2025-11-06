export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="conteudo-rodape">

          <div className="logo-rodape">
            <div className="icone-logo"></div>
          </div>

          <div className="links-rodape">

            <div className="coluna-rodape">
              <h4>Serviços</h4>
              <a href="#servicos">Apostas</a>
              <a href="#servicos">Álcool</a>
              <a href="#servicos">Drogas</a>
              <a href="#servicos">Redes Sociais</a>
              <a href="#servicos">Comida</a>
            </div>

            <div className="coluna-rodape">
              <h4>Sobre</h4>
              <a href="#">Nossa História</a>
              <a href="#">Equipe</a>
              <a href="#">Missão</a>
              <a href="#">Valores</a>
              <a href="#">Contato</a>
            </div>

            <div className="coluna-rodape">
              <h4>Ajuda</h4>
              <a href="#faq">FAQ</a>
              <a href="#">Suporte</a>
              <a href="#">Atendimento</a>
              <a href="#">Termos</a>
              <a href="#">Política de Privacidade</a>
            </div>

            <div className="coluna-rodape">
              <h4>Redes Sociais</h4>
              <div className="icones-sociais">
                <div className="icone-social"></div>
                <div className="icone-social"></div>
                <div className="icone-social"></div>
                <div className="icone-social"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
