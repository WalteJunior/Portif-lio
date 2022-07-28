import React from "react";
import "./Styled.css";
import Logo from "../img/Logo.png";
import Onu from "../img/ONU.jpg";
import Crp from "../img/cabeludo.png"
import Flix from "../img/ToDoFLIX.svg"
import Rcp from "../img/Grupo de máscara 2.png"
import Face from "../img/Facebook.png";
import Insta from "../img/instagram.png";
import Git from "../img/github.png";
import { Link } from "react-router-dom";

export default class App extends React.Component{
    componentDidMount(){
        document.title="Porfile"
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
              <section className="photos">
                <div className="mother-box">
                  <a href="https://onu-bangu.netlify.app" target="_blank" rel="noreferrer">
                <img src={Onu} alt=""/>
                <div className="Title">Onu Bangu</div></a>
                </div>
                <div className="mother-box">
                <a href="https://waltejunior.github.io/Crespos/" target="_blank" rel="noreferrer">
                <img src={Crp} alt=""/>
                <div className="Title">Crespos</div></a>
                </div>
                <div className="mother-box">
                  <a href="https://vnw-todoflix.netlify.app" target="_blank" rel="noreferrer">
                <img src={Flix} alt=""/>
                <div className="Title">TodoFlix</div></a>
                </div>
                <div className="mother-box">
                <a href="https://vnw-recipes.netlify.app" target="_blank" rel="noreferrer">
                <img src={Rcp} alt=""/>
                <div className="Title">Recipes</div></a>
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