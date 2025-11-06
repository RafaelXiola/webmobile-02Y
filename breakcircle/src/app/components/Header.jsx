"use client";

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="container">
        <div className="logotipo">
          <div className="icone-logo"></div>
        </div>
        <nav className="navegacao">
          <a href="#" className="link-navegacao">Início</a>
          <a href="#servicos" className="link-navegacao">Serviços</a>
          <a href="#depoimentos" className="link-navegacao">Depoimentos</a>
          <a href="#faq" className="link-navegacao">FAQ</a>
          <a href="#contato" className="link-navegacao">Contato</a>
          <button className="botao-primario">Atendimento</button>
        </nav>
      </div>
    </header>
  );
}
