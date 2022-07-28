import React from "react";
import "./Styled.css";
import Logo from "../img/Logo.png";
import Perfil from "../img/Perfil.jpg";
import Face from "../img/Facebook.png";
import Insta from "../img/instagram.png";
import Git from "../img/github.png";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  componentDidMount(){
    document.title="Welcome"
  }
  render(){
    return(
      <>
      <header>
        <Link to ="/"><img className="sigla" src={Logo} alt=""/></Link>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Portfile"><li>Portfile</li></Link>
        </ul>
      </header>
      <main>
        <section>
          <div className="hi">
          <img className="me" src={Perfil} alt=""/>
          </div>
          <div className="whoareyou">
            <h1>Hi! Welcome</h1>
            <h2 className="itsme">My name is</h2>
            <h3 className="name">Walter Junior</h3>
            <h4>I'm Web Developer</h4>
          </div>
        </section>
      </main>
      <footer>
        <ul>
          <li><a href="https://www.facebook.com/walter.junior.37625/" target="_blank" rel="noreferrer"><img src={Face} alt=""/></a></li>
          <li><a href="https://www.instagram.com/walt_juni0r/" target="_blank" rel="noreferrer"><img src={Insta} alt=""/></a></li>
          <li><a href="https://github.com/WalteJunior" target="_blank" rel="noreferrer"><img src={Git} alt=""/></a></li>

        </ul>
      </footer>
      </>
    )
  }
}