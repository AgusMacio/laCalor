import './App.css'
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [eventos, setEventos] = useState(null);

  const getData = async () => {
    try {
      const {data} = await axios.get('https://calor.onrender.com/api/eventos');
      console.log(data.eventos)
      setEventos(data.eventos)
    } catch (error) {
      console.log(error)
      alert('ocurrio un error')
    }
  }

  useEffect(() => {getData()}, [])

  return (<div>
    
    
    {!eventos ? <h1>CARGANDO EVENTOS</h1> : <div>
      {eventos.map(evento => {
        return (<div key={evento._id}>
          <h1>evento.nombre</h1>
          <h4>evento.fecha</h4>
        </div>)
      })}
    </div>}
    </div>)

}

export default App;