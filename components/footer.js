const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<link rel="stylesheet" href="../resources/css/index.css" />

<footer>
  <br><br>
  <img src="../resources/images/SPG_Logo.png" alt="Secret Passage Games" />
  <address>
    &copy; 2023 Secret Passage Games<br>CA, USA<br>
    <a href = "mailto:secretpassagegames@outlook.com">Contact Us</a>
  </address>
  <br>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
