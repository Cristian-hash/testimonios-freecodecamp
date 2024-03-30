import "./App.css";
import Testimonio from "./componentes/Testimonio.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Lorem ipsum dolor sit amet consectetur adipiscing elit placerat, 
          cras molestie duis urna fusce volutpat accumsan lectus, pharetra dis nullam 
          laoreet elementum nascetur inceptos. Rutrum egestas curae nunc at blandit
          vehicula orci purus leo quis ultrices, conubia fringilla arcu faucibus aptent "
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos
          ,pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras 
          de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba 
          para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />

        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingenieria de Software"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos
          ,pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras 
          de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba 
          para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </div>
    </div>
  );
}

export default App;
