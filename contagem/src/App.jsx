import './App.css'
import Counter from './components/Counter'
import Title from './components/title'
import Nezuko from "./assets/nezuko.jpg"
import useCountdown from './hooks/useCountdown'

function App() {
  //colocar aqui a data que deseja calcular no contador 
  //formato : ("mês dia, ano hora:minuto:segundo")
  const [day, hour, minute, second] = useCountdown("mar 26, 2023 00:00:00")

  return (
    <div className="App" style={{backgroundImage: `url(${Nezuko})`}}>
      <div className="container">
        <Title title="Contagem regressiva"/>
        <div className="countdown-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App