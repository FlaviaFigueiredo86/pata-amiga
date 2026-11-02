import VitrineAnimais from './VitrineAnimais'
import './App.css'

function App() {
  return (
    <div>
      <header>
        <div>
          <h1>🐾 Pata Amiga</h1>
          <p>Um lar para cada patinha.</p>
        </div>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#animais">Animais</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#ongs">ONGs</a>
        </nav>
      </header>

      <section id="inicio">
        <h2>Adote com amor!</h2>
        <h3>Uma adoção salva duas vidas: a sua e a de quem você salva!</h3>
        <p>
          Encontre seu novo melhor amigo.
          Conheça os animais que esperam por uma família.
        </p>
        <a href="#animais">Ver animais disponíveis</a>
      </section>

     <VitrineAnimais />
      <section id="como-funciona">
        <h2>Como você pode ajudar?</h2>

        <div className="cards">
          <article className="card">
            <h3>💚 Doação</h3>
            <p>Ajude com alimentos, medicamentos e cuidados.</p>
          </article>

          <article className="card">
            <h3>🤝 Voluntariado</h3>
            <p>Doe seu tempo e ajude a transformar vidas.</p>
          </article>

          <article className="card">
            <h3>🏠 Lar temporário</h3>
            <p>Ofereça um espaço seguro até a adoção.</p>
          </article>
        </div>
      </section>

      <section id="ongs">
        <h2>ONGs parceiras</h2>
        <p>Conheça as organizações que ajudam nossos animais.</p>
      </section>

      <footer>
        <h3>🐾 Pata Amiga</h3>
        <p>Um lar para cada patinha.</p>
        <p>© 2026 Pata Amiga - Adoção responsável.</p>
      </footer>
    </div>
  )
}

export default App