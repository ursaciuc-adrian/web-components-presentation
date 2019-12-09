class TextComponent extends HTMLElement {
    set text(value) {
        this.innerHTML = `
            <p>The text is: ${value}</p>
        `;
    }
}

customElements.define('text-comp', TextComponent);