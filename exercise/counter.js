class Counter extends HTMLElement {
    constructor() {
        super();

        this.count = 0;
    }

    connectedCallback() {
        this.innerHTML = `
            <p>${this.count}</p>
            <button onclick="this.parentElement.up()">Increase</button>
        `;
    }

    up() {
        this.count += 1;
        this.connectedCallback();
    }
}

customElements.define('counter-component', Counter);