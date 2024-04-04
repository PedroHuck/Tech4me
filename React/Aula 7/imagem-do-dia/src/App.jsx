import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import rocket from "./assets/rocket.json";

function App() {
  const [enderecoImagem, setEnderecoImagem] = useState("")
  const [data, setData] = useState("03/04/2024")
  const [carregando, setCarregando] = useState(true)


  const buscarDadosApi = async () => {

    setCarregando(true)

    const dia = data.substring(0, 2)
    const mes = data.substring(3, 5)
    const ano = data.substring(6, 10)

    const dataFormatada = `${ano}-${mes}-${dia}`

    const url = `https://api.nasa.gov/planetary/apod?api_key=xcfV3lHDqF4j4bF9cc4CvdC4OfS4z93F52n8RnPq&date=${dataFormatada}`;

    const dadosNASA = await axios.get(url);

    setEnderecoImagem(dadosNASA.data.url);

    setCarregando(false)

    // const dataBr = moment(new Date(dadosNASA.data.date)).format("DD/MM/YYYY");

    // setData(dataBr);

    // axios.get(url).then((dadosNASA) => {

    // setEnderecoImagem(dadosNASA.data.url)



    // })
  }



  useEffect(() => {
    buscarDadosApi()
  }, [])

  return (
    <>

      {
        carregando ? (
          <>
            <h1>Carregando...</h1>
            <div style={{ width: "400px" }}>
              <Lottie animationData={rocket} loop={true} />
            </div>
          </>
        )

          : (

            <>
              <h1>Imagem do dia {data} </h1>
              <div style={{ margin: "10px", width: '100%' }}>
                <img src={enderecoImagem} width={700} />
              </div>

              <input style={{ marginRight: "10px" }} type="text" value={data} onChange={(event) => { setData(event.target.value) }} />

              <button onClick={buscarDadosApi}>Buscar dados da Api</button>

            </>
          )
      }
    </>
  )
}

export default App
