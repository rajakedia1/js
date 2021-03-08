
function handleAuth() {
    if(loginState.isloggedIn()) {
        loginState.logout()
    } else {
        modalstore.open(createLoginModal())
    }
}

function createHeader() {
    const container = createElement('div', ['nav'], [
        createElement('div', ['title', 'tag'], T('Flipkart')),
        createElement('div', ['right', 'tag'], [
            loginState.getUser() ? createElement('div', ['user'], T(loginState.getUser())) : createElement('div'),
            withAttributes(createElement('div', ['button'], loginState.isloggedIn() ? T('Logout') : T('Login')), { onclick: handleAuth })
        ]),
    ])

    return container;

}
