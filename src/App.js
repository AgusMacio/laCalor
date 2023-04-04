import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios, { Axios } from 'axios';
import Eventos from '../src/components/Eventos'



function App() {
  const [eventos, setEventos] = useState([]);

  const pegarApi = async () => {


    try {
      const { data } = await axios.get('https://calor.onrender.com/api/eventos')
      setEventos(data.eventos)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <div className='data'>
        {
          eventos.map((eventos) => (
        <Eventos data={eventos} /> 
        )) }
      </div>
    </div>
  );
}

export default App;
