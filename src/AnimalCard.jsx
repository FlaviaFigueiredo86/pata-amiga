function AnimalCard({ animal }) {
  return (
    <article className="animal-card">
      <div className="animal-foto">
        {animal.foto ? (
          <img src={animal.foto} alt={animal.nome} />
        ) : (
          <span>
            {animal.especie === "Gato" ? "🐱" : "🐶"}
          </span>
        )}
      </div>

      <div className="animal-info">
        <h3>{animal.nome}</h3>

        <p><strong>Espécie:</strong> {animal.especie}</p>
        <p><strong>Idade:</strong> {animal.idade}</p>
        <p><strong>Cidade:</strong> {animal.cidade}</p>
        <p><strong>Responsável:</strong> {animal.responsavel}</p>

        <a
          href={animal.link}
          target="_blank"
          rel="noreferrer"
          className="animal-botao"
        >
          Conheça este animal
        </a>
      </div>
    </article>
  );
}

export default AnimalCard;