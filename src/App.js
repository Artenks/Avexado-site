import "./App.css";
import "./Click.js";
import "./AutoScroll.js";

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

                <i
                  className="fas fa-hamburger"
                  id="HamburgerLogo"
                  alt="hamburguer logo"
                ></i>

                <a href="https://m.facebook.com/Avexado-Hamb%C3%BArgueria-e-Pizzaria-112016044005224/">
                  <i
                    className="fab fa-facebook-f"
                    id="SocialLogo"
                    alt="Facebook logo"
                  ></i>
                </a>
              </ul>
            </div>

            <div className="ListPage">
              <div className="InfoBlock">
                <a href="#anc1">
                  <h3>Novidades 🍕</h3>
                </a>

                <div className="ArrowDown">
                  <i className="fas fa-arrow-down"></i>
                </div>
              </div>

              <div className="BlockGrid" id="anc1">
                <div className="BlockOffer">
                  <div id="img-wrapper">
                    <img
                      src="./images/avexado/offers/offer1.jpg"
                      alt="Bloco de promoção"
                    />
                  </div>
                  <p>Que delícia! 😋👌</p>
                </div>

                <div className="BlockOffer">
                  <div id="img-wrapper">
                    <img
                      src="./images/avexado/offers/offer2.jpg"
                      alt="Bloco de promoção"
                    />
                  </div>
                  <p>Hmmm🤩</p>
                </div>

                <div className="BlockOffer">
                  <div id="img-wrapper">
                    <img
                      src="./images/avexado/offers/offer3.jpg"
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
