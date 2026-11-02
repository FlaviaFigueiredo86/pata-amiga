import animais from './animais'
import AnimalCard from './AnimalCard'
import './VitrineAnimais.css'

function VitrineAnimais() {
  return (
    <section id="animais">
      <h2>Conheça nossos animaizinhos</h2>

      <p>
        Esses amiguinhos estão esperando por uma família
        cheia de carinho e amor.
      </p>

      <div className="vitrine-animais">
        {animais.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
          />
        ))}
      </div>
    </section>
  )
}

export default VitrineAnimais;