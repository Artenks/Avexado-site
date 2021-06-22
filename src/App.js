import "./App.css";
import "./Click.js";
import "./AutoScroll.js";
import Iframe from "react-iframe";

function App() {
  return (
    <div className="App">
      <header className="Container">
        <div className="Page">
          <div className="AvexadoContentBar">
            <div className="AvexadoLogo">
              <div id="img-wrapper">
                <img
                  id="avexado"
                  src="./images/avexado/avexado-logo.jpg"
                  alt="imagem do avexado"
                ></img>
              </div>
            </div>

            <div className="SocialBar">
              <ul className="SocialMedia">
                <a href="https://www.instagram.com/avexaado/">
                  <i
                    className="fab fa-instagram"
                    id="SocialLogo"
                    alt="Instagram"
                  ></i>
                </a>

                <div className="btnClick" id="btn#3">
                  <i
                    className="fas fa-compass"
                    id="compassLogo"
                    alt="bussola logo"
                  ></i>
                </div>

                <a href="https://m.facebook.com/Avexado-Hamb%C3%BArgueria-e-Pizzaria-112016044005224/">
                  <i
                    className="fab fa-facebook-f"
                    id="SocialLogo"
                    alt="Facebook logo"
                  ></i>
                </a>
              </ul>
            </div>
            <div className="BannerMovement">
              <h1>🥤 😍 😏 🍕</h1>
              <h3>#Avexado10</h3>
              <h1>🍔 😋 👌 🤭</h1>
            </div>

            <div className="Loc">
              <div className="BackgroundMaps">
                <h1>Localização do Avexado 🍔</h1>
                <div className="ExitClick" id="btn#4">
                  <i className="fas fa-times" id="maps-exit"></i>
                </div>
                <div className="GoogleMaps">
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.353068353936!2d-35.28057704893343!3d-5.945987160109551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b259eb9b3dc3a3%3A0x87de7b43e48379b0!2sAvexado%20Pizzaria%20e%20Hamburgueria!5e0!3m2!1spt-BR!2sbr!4v1624281061453!5m2!1spt-BR!2sbr"
                    width="800"
                    height="600"
                    allowfullscreen=""
                    loading="lazy"
                  ></Iframe>
                </div>
                <div className="GoogleMapsMobile">
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.353068353936!2d-35.28057704893343!3d-5.945987160109551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b259eb9b3dc3a3%3A0x87de7b43e48379b0!2sAvexado%20Pizzaria%20e%20Hamburgueria!5e0!3m2!1spt-BR!2sbr!4v1624281061453!5m2!1spt-BR!2sbr"
                    width="500"
                    height="700"
                    allowfullscreen=""
                    loading="lazy"
                  ></Iframe>
                </div>
                <div className="GoogleMaps500">
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.353068353936!2d-35.28057704893343!3d-5.945987160109551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b259eb9b3dc3a3%3A0x87de7b43e48379b0!2sAvexado%20Pizzaria%20e%20Hamburgueria!5e0!3m2!1spt-BR!2sbr!4v1624281061453!5m2!1spt-BR!2sbr"
                    width="500"
                    height="500"
                    allowfullscreen=""
                    loading="lazy"
                  ></Iframe>
                </div>
              </div>
            </div>

            <div className="ListPage">
              <div className="InfoBlock">
                <a href="#anc1">
                  <h3>Novidades</h3>
                </a>

                <div className="ArrowDown">
                  <i className="fas fa-arrow-down"></i>
                </div>
              </div>

              <div className="BlockGrid" id="anc1">
                <div className="BlockOffer">
                  <div id="img-wrapper">
                    <img
                      src="./images/avexado/offers/offer1.png"
                      alt="Bloco de promoção"
                    />
                  </div>
                  <p>Que delícia! 😋👌</p>
                </div>

                <div className="BlockOffer">
                  <div id="img-wrapper">
                    <img
                      src="./images/avexado/offers/offer2.png"
                      alt="Bloco de promoção"
                    />
                  </div>
                  <p>Hmmm🤩</p>
                </div>

                <div className="BlockOffer">
                  <div id="img-wrapper">
                    <img
                      src="./images/avexado/offers/offer3.png"
                      alt="Bloco de promoção"
                    />
                  </div>
                  <p>Só o filé! 😋</p>
                </div>
              </div>
            </div>
          </div>

          <div className="MyContent">
            <div className="CreditsButton" id="btn">
              <img
                id="img-art"
                width="47px"
                height="47px"
                src="./images/cred/art.png"
                alt="Logo Artenks"
              />
              <div id="div-circle"></div>
            </div>

            <div className="AsideBar" id="aside-bar">
              <div className="InfoMy">
                <ul className="MyUl">
                  <a href="https://twitter.com/Artenks">
                    <i
                      className="fab fa-twitter"
                      id="MyTwitter"
                      alt="Twitter logo"
                    ></i>
                  </a>
                  <a href="https://github.com/arthemioKalil">
                    <i
                      className="fab fa-github"
                      id="MyGithub"
                      alt="Github logo"
                    ></i>
                  </a>
                  <a href="https://www.twitch.tv/artenks">
                    <i
                      className="fab fa-twitch"
                      id="MyTwitch"
                      alt="Twitch logo"
                    ></i>
                  </a>
                  <div className="ExitClick" id="btn#2">
                    <i className="fas fa-times" id="my-exit"></i>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="Footer">
            <footer>
              <p>
                Criado por Artenks 💚 Qualquer sugestão ou bug poderá ser
                enviado pela minha DM em meu Twitter.
              </p>
            </footer>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
