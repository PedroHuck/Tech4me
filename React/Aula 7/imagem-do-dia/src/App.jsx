import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
import moment from 'moment'

function App() {
  const [enderecoImagem, setEnderecoImagem] = useState("")
  const [data, setData] = useState("")

  const url = 'https://api.nasa.gov/planetary/apod?date=2006-09-29&api_key=xcfV3lHDqF4j4bF9cc4CvdC4OfS4z93F52n8RnPq';

  const buscarDadosApi = () => {
    axios.get(url).then((dadosNASA) => {
      console.log(dadosNASA.data)
      setEnderecoImagem(dadosNASA.data.url)
      const dataBr = moment(new Date(dadosNASA.data.date)).format("DD/MM/YYYY")
      setData(dataBr)
    })
  }

  useEffect(() => {
    buscarDadosApi()
  }, [])

  return (
    <>
      <h1>Imagem do dia {data} </h1>
      <div style={{margin: "10px", width: '100%'}}>
        <img src={enderecoImagem} width={700} />
      </div>
      <div>
      <button onClick={buscarDadosApi}>Buscar dados da Api</button>
      </div>
    </>
  )
}

export default App
