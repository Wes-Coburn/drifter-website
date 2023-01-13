/*
const scriptTemplate = document.createElement('template');
scriptTemplate.innerHTML = `
    <script>
    $('div').on('click', function() {
        $(this).toggleClass('show-description');
    });
    </script>
`;

class Script extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(scriptTemplate.content);
    }
}

customElements.define('script-component', Script);
*/