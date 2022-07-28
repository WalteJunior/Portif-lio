import React from "react";
import "./Styled.css";
import Logo from "../img/Logo.png";
import A1 from "../img/about.jpg";
import A2 from "../img/about 2.jpg";
import A3 from "../img/about 3.jpg";
import Face from "../img/Facebook.png";
import Insta from "../img/instagram.png";
import Git from "../img/github.png";
import { Link } from "react-router-dom";

export default class App extends React.Component{
    componentDidMount(){
        document.title="About me"
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
                <section className="Gallery">
                    <img src={A1} alt=""/>
                    <img src={A2} alt=""/>
                    <img src={A3} alt=""/>
                </section>
                <section className="info">
                    <div className="box">
                        <h2>Quem sou eu?</h2>
                        <p>Olá, Meu nome é Walter, tenho 21 anos, faço aniversario no dia 28/12, nasci e cresci no Rio de Janeiro capital, Sou morador de Bangu Zona Oeste do Rio</p>
                    </div>
                    <div className="box">
                        <h2>O que eu faço?</h2>
                        <p>Atualmente sou estudante de ciência da computação, programção no Vai na Web, musica(violão), Jovem Aprendiz Suporte ao usuario e nas horas vagas sou gamer para passar o tempo</p>
                    </div>
                    <div className="box">
                        <h2>O que eu gosto?</h2>
                        <p>Eu gosto de assisitir series, filmes e animes. Gosto de sair e/ou praticar algum esportes, meu gosto musical é bem aleatório, mas prefiro musica pop internacional.</p>
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