class UserComponent extends HTMLElement {
    set user(user) {
        this.innerHTML = `
            <img src="${user.avatar}" />
            <h3>${user.first_name} ${user.last_name}</h3>
            <span>${user.email}</span>
        `;
    }
}

customElements.define('user-info', UserComponent);