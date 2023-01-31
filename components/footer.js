const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<style>
  footer {
    text-align: center;
    color: white;
  }
  a {
    color: white;
  }
</style>

<footer>
  <small>
  <br><br>  
  Secret Passage Games
    <br>
    <a href = "mailto: secretpassagegames@outlook.com">Contact Us</a>
    <br><br>
  </small>
</footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);