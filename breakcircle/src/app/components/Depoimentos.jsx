"use client";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      <div className="container">
        <h2 className="titulo-secao">Depoimentos</h2>
        <p className="descricao-secao">
          Histórias reais de pessoas que caminharam com a gente.
        </p>

        <div className="cards-depoimentos">

          <div className="card-depoimento">
            <p className="texto-depoimento">
              "Participar desse projeto transformou completamente a forma como eu lido com minhas emoções."
            </p>
            <span className="autor-depoimento">— Ana, 22 anos</span>
          </div>

          <div className="card-depoimento">
            <p className="texto-depoimento">
              "Acolhimento verdadeiro. Hoje eu consigo me sentir pertencente novamente."
            </p>
            <span className="autor-depoimento">— Gabriel, 19 anos</span>
          </div>

          <div className="card-depoimento">
            <p className="texto-depoimento">
              "Eu não estava bem, mas encontrei aqui um espaço seguro. Gratidão!"
            </p>
            <span className="autor-depoimento">— Carla, 27 anos</span>
          </div>

        </div>
      </div>
    </section>
  );
}
