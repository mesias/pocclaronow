import React from "react";
import "./destaque.css";
import { Link } from "react-router-dom";
import NavBarHomeMain from "../../components/NavBar/navBar";
import destaqueAV from "../../assets/img/Imagem-destaque-main-lp.png";
import TelaDestaque from "../../assets/img/home-medalhas-vivo-1.png";
import TlDestTwo from "../../assets/img/home-medalhas-vivo-2.png";
import TlDestThree from "../../assets/img/home-medalhas-vivo-3.png";

const DestaqueMain = () => {
  return (
    <main className="container-body">
      <NavBarHomeMain to="/home"></NavBarHomeMain>
      <section>
        <section className="container-banner-dt">
          <section className="destaque-container">

            <section className="container-title">
              <h5 className="titleDest-main">
                <font size="4" face="FturaStd ">
                  AO VIVO
                </font>
              </h5>
            </section>

            <section className="sectionAoVivoDest">
              <Link className="btnAoVivo" to="/aovivo">
                <img src={TelaDestaque} className="imgbtnVivo"></img>
              </Link>
              <button className="btnAoVivo">
                <img src={TlDestTwo} className="imgbtnVivo"></img>
              </button>
              <button className="btnAoVivo">
                <img src={TlDestThree} className="imgbtnVivo"></img>
              </button>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default DestaqueMain;
