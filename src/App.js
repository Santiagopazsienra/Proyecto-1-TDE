import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>Testimonios de éxito en el mundo de la programación</h1>
      <Testimonio 
      nombre="Homero Simpson"
      pais="Estados Unidos"
      imagen="homero simpson"
      cargo="Programador nivel junior"
      empresa="Planta Nuclear del Señor Burns"
      testimonio="Desde que conozco el mundo de la programación pude tener la oportunidad de formarme y trabajar
      haciendo trabajos y proyectos individuales de bajo costo. Hasta que pude entrar a la planta nuclear del señor Burns donde sigo siendo programador junior.
      Todavía no puedo avanzar a ser un programador Mid Level, pero bueno, al menos me alcanza para tomarme unas cervezas en la Taberna de Mou, 
      comprarme unas deliciosas rosquillas y llevar a los niños a Orlando una vez al año.
      Gracias a la programación puedo mantener a mis tres hijos y a mi hermosa esposa Marge."

      /> 
      <Testimonio
      nombre="Darth Vader"
      pais="Estrella de la Muerte"
      imagen="darth vader"
      cargo="Analista, diseñador y creador software"
      empresa="el Imperio"
      testimonio="Cuando me ofrecieron la oportunidad de entrar al mundo de la computación y el desarrollo de sistemas de software, era un mundo nuevo para mí. 
      Cuando comencé no tenía ningún referente en la programación donde yo me movía. 
      Todos eran jedis y lo único que hacían era pelear y a mí no me gustaba tanto. 
      Pero bueno, tome una decisión donde dejaba lo seguro por algo nuevo en donde no 
      tenía una visión clara.
      Y me fueron pasando algunas cosas en el camino.
       Mi señora me dejo, obi-wan se puso en mi contra porque me dijo que ser programador me iba a llevar al lado oscuro. 
      Y es verdad, cuando programo me enojo mucho.
      El canciller Palpatine era programador full stack de categoría senior, así que hice un par de cursos con él y desarrollé
       muchas habilidades en cuanto a lenguajes, como Pyton, Javascript, java, C++ y aun no termino.
      Gracias a mi obsesión por programar conseguí un trabajo como analista de datos en una empresa de software llamada El Imperio.
      Ahora visto de trajes y mi casco tiene lentes contra luz azul, se los super recomiendo para no quemarse los ojos al programar."

      />
      <Testimonio
      nombre="Batman"
      pais="Gotham city"
      imagen="batman"
      cargo="Full stack developer Mid-Level"
      empresa="Industrias wayne"
      testimonio="Me echaron de la liga de la justicia hace un par de años, porque no me lo bancaba a Superman, me tenía envidia porque tenía un Lamborghini
      y el nomas podía volar.
     En ese momento me sentía perdido, las únicas dos personas que me apoyaban era Alfred y Robin.
     Así que juntos formamos un emprendimiento de desarrollo web; Robin buscaba los clientes, yo programaba y Alfred hacia la comida.
     En mis inicios comencé siendo FreeLancer, trabajé con el guasón, persona que conociéndola bien me cayo mejor que Aquaman.
     Mas gente me fue conociendo gracias a mi equipo y formamos una gran empresa de software.
     Juntos hicimos el equipo y la compañía que somos ahora llamada Industrias Wayne. 
     Ahora trabajo desde mi Baticueva soy mi propio jefe y hago cursos gratuitos para ayudar a los que están entrando a este maravilloso mundo del código. "

      />
      <Testimonio
      nombre="Patricio Estrella"
      pais="Fondo de Bikini"
      imagen="patricio estrella"
      cargo="Licenciado en computacion y profesional del Machine Learning"
      empresa="Neptuno"
      testimonio="Estaba buscando un trabajo en el Crustáceo Cascarudo pero mi amigo Bob Esponja cumplía con las expectativas de la empresa así que no fui admitido.
      Tire currículo al frente donde estaba la competencia en el Balde de Carnada.
      Pero su dueño, Plankton estaba en quiebra, así que no había oportunidades laborales en donde me encontraba.
      O eso pensaba yo; navegando por el internet que llega bastante más lento bajo el agua, me encontré con un anuncio donde decía capacitaciones a jóvenes estudiantes en computación.
      En la ciudad de fondo de bikini me encontré con que Arenita era la que había creado ese anuncio, y gracias a que ella me dio la oportunidad,
      comencé mis estudios con ella en su casa.
      Me preparo y luego hice cinco años en la universidad de fondo de bikini en la facultad de computación.
      Me recibí y ahora trabajo en una empresa de software para el rey Neptuno en la Atlántida."

      />
     </div>
    </div>
  );
}

export default App;
 