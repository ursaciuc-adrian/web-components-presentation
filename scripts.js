import './user.js';

window.addEventListener('load', async () => {
    await getUsers();
});

async function getUsers() {
    const response = await fetch('https://reqres.in/api/users?per_page=10');
    const json = await response.json();

    const main = document.querySelector('#users');

    json.data.forEach(user => {
        const element = document.createElement('user-info');
        element.user = user;
        
        main.appendChild(element);
    });

    return json.data;
}

