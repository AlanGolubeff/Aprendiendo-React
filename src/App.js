import React, { Component } from "react";
import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header
          title="Te damos la bievenida a Genova."
          subTitle="Aqui encantraras la mejor seleccion de terrenos y servicios inmobiliarios personalizados para ti.
          Descubre como podemos ayudarte a cumplir tus metas en el sector inmobiliario."
        />
        <div className="UserSection">
          <CardUser
            name="Agustin Bertoni"
            date="Especialista en Marqueting digital"
            description="Martillero y Corredor Plubico"
            img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            backgroundColor="white"
          />
          <CardUser
            name="Alan Golubeff"
            date="---"
            description="Front-end Developer"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          />

        </div>
        <Button>Press Me!</Button>
      </div >
    );
  }
}

export default App;
