import axios from 'axios'
import './App.css'

function App() {
  const url = 'https://api.nasa.gov/planetary/apod?date=2006-09-29&api_key=xcfV3lHDqF4j4bF9cc4CvdC4OfS4z93F52n8RnPq';

  axios.get(url).then((dadosNASA) => {
    console.log(dadosNASA.data)
  })
  
  return (
    <>
     
      <h1>Imagem do dia</h1>
    </>
  )
}

export default App
