import logo from './logo.svg';
import './App.css';
import Descripciones from './components/Descripciones.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Jugadores famosos</h1>
        <Descripciones 
          nombre='Cristiano Ronaldo'
          pais='Portugal'
          imagen='cristiano'
          equipo='Manchester United (Inglaterra)'
          descripcion='Cristiano Ronaldo dos Santos Aveiro, 
            más conocido como Cristiano Ronaldo o CR7, es un 
            futbolista portugués que juega como delantero en 
            el Manchester United Football Club de la Premier 
            League de Inglaterra y en la selección de Portugal, 
            de la cual es su capitán y máximo goleador histórico.'/>
        <Descripciones 
          nombre='Radamel Facao Garcia'
          pais='Colombia'
          imagen='falcao'
          equipo='Rayo Vallecano (España)'
          descripcion='Radamel Falcao García Zárate, conocido deportivamente 
            como Falcao, es un futbolista colombiano que juega como delantero 
            en el Rayo Vallecano de la Primera División de España. Debutó 
            profesionalmente con trece años en el extinto club colombiano 
            Lanceros Boyacá.'/>
        <Descripciones 
          nombre='Lionel Messi'
          pais='Argentina'
          imagen='messi'
          equipo='Paris Saint Germain (Francia)'
          descripcion='Lionel Andrés Messi Cuccittini, 
            conocido como Leo Messi, es un futbolista argentino
            que juega como delantero o centrocampista. Jugador 
            histórico del Fútbol Club Barcelona, al que estuvo 
            ligado veinte años, desde 2021 integra el plantel 
            del Paris Saint-Germain de la Ligue 1 de Francia.'/>
        <Descripciones 
          nombre='Luis Fernando Díaz'
          pais='Colombia'
          imagen='luis diaz'
          equipo='Liverpool (Inglaterra)'
          descripcion='Luis Fernando Díaz Marulanda es un futbolista 
            colombiano que juega como extremo y su equipo actual es el 
            Liverpool de la Premier League de Inglaterra. Es internacional 
            con la Selección Colombia.'/>
        <Descripciones 
          nombre='Kylian Mbappé'
          pais='Francia'
          imagen='mbappe'
          equipo='Paris Saint-Germain (Francia)'
          descripcion='Kylian Mbappé es un futbolista francés que juega 
            como delantero en el Paris Saint-Germain Football Club de la 
            Ligue 1 de Francia.'/>
        <Descripciones 
          nombre='Robert Lewandowski'
          pais='Polonia'
          imagen='lewandowski'
          equipo='Bayern de Múnich (Alemania)'
          descripcion='Robert Lewandowski es un futbolista polaco que 
            juega como delantero en el Bayern de Múnich de la Bundesliga de 
            Alemania desde la temporada 2014-15. Es también internacional 
            absoluto con la selección de Polonia desde 2008, de la cual es 
            su capitán y máximo goleador histórico.'/>
        <Descripciones 
          nombre='Karim Benzema'
          pais='Francia'
          imagen='benzema'
          equipo='Real Madrid (España)'
          descripcion='Karim Benzema es un futbolista francés de ascendencia 
            argelina que juega como delantero en el Real Madrid Club de Fútbol de 
            la Primera División de España desde la temporada 2009-10'/>
        <Descripciones 
          nombre='Sadio Mané'
          pais='Senegal'
          imagen='mane'
          equipo='Liverpool (Inglaterra)'
          descripcion='Sadio Mané es un futbolista senegalés que juega como delantero 
            en el Liverpool F. C. de la Premier League de Inglaterra. Después de 
            haber comenzado su carrera en el F. C. Metz de Francia, fue transferido 
            en 2012 al Red Bull Salzburgo, al final de su primera temporada.'/>
      </div>
    </div>
  );
}

export default App;
