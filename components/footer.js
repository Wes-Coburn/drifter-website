const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<link rel="stylesheet" href="/resources/css/index.css" />

<footer>
  <br><br>
  <img src="/resources/images/SPG_Logo.png" alt="Secret Passage Games" />
  <p>
  &copy; 2023 Wesley H.G. Coburn
  <br />
  <a
  href="https://github.com/Wes-Coburn"
  target="_blank"
  rel="noreferrer"
  >
  github.com/Wes-Coburn
  </a>
  </p>
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
