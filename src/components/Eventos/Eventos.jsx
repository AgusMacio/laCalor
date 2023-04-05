import axios from "axios";
import { useEffect, useState } from "react";
import "./Eventos.css";

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const pegarApi = async () => {
    try {
      const { data } = await axios.get(
        "https://calor.onrender.com/api/eventos"
      );

      setEventos(data.eventos);
    } catch (error) {
      console.log(error);
    }
  };

  const anticipadas = (link) => {
    window.location.href = link;
  };

  const mesasVip = (wspNumber) => {
    window.location.href = `https://api.whatsapp.com/send?phone=${wspNumber}`;
  };

  useEffect(() => {
    pegarApi();
  }, []);

  return (
    <div className="eventos-section">
      <h1>PRÓXIMOS EVENTOS</h1>
      <div className="eventos-container">
        {eventos.map((evento) => {
          return (
            <div className="evento" key={evento._id}>
              <div className="parte-arriba">
                <h1 id="evento-fecha">{evento.fecha}</h1>
                <p id="evento-zona">{evento.zona}</p>
              </div>
              <div className="parte-abajo">
                <p id="evento-nombre">{evento.nombre}</p>
                <p id="evento-direccion">{evento.direccion}</p>
                <div id="botones-container">
                  <button onClick={() => anticipadas(evento.link)}>
                    ANTICIPADAS
                  </button>
                  <button onClick={() => mesasVip(evento.wspNumber)}>
                    MESAS VIP
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Eventos;
