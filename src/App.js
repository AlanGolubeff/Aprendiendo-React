import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

// PAGES
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import UserDetail from "./Pages/UserDetail/UserDetail";
import ErrorPage from "./Pages/ErrorPages.js/ErrorPages";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



/*class App extends Component {
  render() {
    return (<>
      <NavBar />,

      <Routes>

        <Route path='/' element={
          [<div className="App">
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
          </div>,
          ]

        } />

      </Routes>

      { <div className="App">

        <Header
          title="Te damos la bievenida a Genova."
          subTitle="Aqui encantraras la mejor seleccion de terrenos y servicios inmobiliarios personalizados para ti.
          Descubre como podemos ayudarte a cumplir tus metas en el sector inmobiliario."
        />
        <div className="UserSection">
          
          <CardUser
            name="Alan Golubeff"
            date="---"
            description="Front-end Developer"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          />

        </div>
        <Button>Press Me!</Button>
      </div > */


