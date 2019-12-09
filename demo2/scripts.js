import './counter.js'

window.addEventListener('load', () => {
    createCounters();
});


function createCounters() {
    const main = document.querySelector('main');
    
    for(let i = 1; i <= 10; i++) {
        const el = document.createElement('counter-component');

        main.appendChild(el);
    }
}