const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link href="style.css" rel="stylesheet">    

<header>
<h1>Drifter</h1>
<h2>Deckbuilding In Corporate Dystopia</h2>
<ul>
<li><a href="index.html">Home</a></li>
<li><a href="heroes.html">Heroes</a></li>
<li><a href="about.html">About Us</a></li>
<li><a href="https://weslex555.itch.io/drifter-deckbuilding-game/download/ieuEK3_ASTYEBXAEJ7w7_HcubBCo2jCDl6Et2K_F" target="_blank">Play Now!</a></li>
</ul>
<ul class = "thin">
<li><a class ="small" href="https://discord.gg/X49ju9VAEY" target="_blank">Discord</a></li>
<li><a class ="small" href="https://www.facebook.com/drifterthegame" target="_blank">Facebook</a></li>
<li><a class ="small" href="https://www.instagram.com/drifterthegame/?r=nametag" target="_blank">Instagram</a></li>
<li><a class ="small" href="https://www.youtube.com/channel/UCb6l5aLCVajsJp8rTTyS_OA" target="_blank">YouTube</a></li>
</ul>
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);