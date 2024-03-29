const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<link rel="stylesheet" href="/resources/css/index.css" />

<a href="/index.html">
  <header>
    <h1>Drifter</h1>
    <h2>Deckbuilding In Corporate Dystopia</h2>
  </header>
</a>

<nav id="nav-main">
  <ul>
    <li><a href="/index.html">Home</a></li>
    <li><a href="/html/heroes.html">Drifters</a></li>
    <li><a href="/html/about.html">About Us</a></li>
    <li><a href=\"https://weslex555.itch.io/drifter-deckbuilding-game/download/ieuEK3_ASTYEBXAEJ7w7_HcubBCo2jCDl6Et2K_F\"
      class="buy_button"
      target="_blank"
      rel="noopener noreferrer">
      <button
      class="buy_button" 
      title="Download from itch.io">
      Play Now!
      <img src="/resources/images/itch.io_Icon_White.png"/>
      </button></a></li>
  </ul>
</nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(headerTemplate.content);

    /*
    Itch.attachBuyButton(shadowRoot.getElementById("buy_button"), {
      user: "weslex555",
      game: "drifter-deckbuilding-game",
    });
    */
  }
}

customElements.define("header-component", Header);
