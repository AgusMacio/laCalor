import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Principal from "./components/Principal/Principal";
import Eventos from "./components/Eventos/Eventos";
import Carrusel from "./components/Carrusel/Carrusel";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Principal />
      <Eventos />
      <Carrusel />
      <Footer />
    </div>
  );
};

export default App;
