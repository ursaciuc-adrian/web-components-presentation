class InputComponent extends HTMLElement {
    addTextComp() {
        const main = document.querySelector('main');
        const value = document.querySelector('#text').value;
    
        const el = document.createElement('text-comp');
        el.text = value;
    
        main.appendChild(el);
    }

    connectedCallback() {
        this.innerHTML = `
            <form onsubmit="this.parentElement.addTextComp(); return false;">
                <label for="text">Enter a text</label>
                <br>
                <input name="text" id="text" />
                <button type="submit">Submit</button>
            </form>
        `;
    }
}

customElements.define('input-comp', InputComponent);