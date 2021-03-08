function LoginState() {
    const obj = storageStore.getUser() || {}
    return {
        isloggedIn: () => obj.isloggedIN,
        getUser: () => obj.user,
        setLoggedIn: (v) => { obj.isloggedIN = true; obj.user = v; storageStore.addUser(obj); createScreen() },
        logout: () => { obj.isloggedIN = false; obj.user = ''; storageStore.addUser(obj); createScreen() },
        addUser: (v) => { obj.user = v }
    }
}

const loginState = LoginState()

function createLoginModal() {

    function textValue(evt) {
        loginState.addUser(evt.target.value)
    }

    function dologin() {
        loginState.setLoggedIn(loginState.getUser())
        modalstore.close()
    }

    return createElement('div', ['reviewmodal'], [
        createElement('div', ['header'], [
            T('Login'),
            withAttributes(createElement('div', ['close-button'],
                createElement('div', ['close'])), { onclick: closeRateModal }
            )
        ]),
        withAttributes(createElement('input', ['review-title']), { placeholder: 'Enter User Name', onkeyup: textValue }),
        withAttributes(createElement('div', ['submit'], T('Login')), { onclick: dologin })
    ])
}