function createElement(type, classList, childList, id) {
    const el = document.createElement(type)
    if (classList) el.className = classList.reduce((a, c, i) => a + (i ? ' ' : '') + c, '')
    if (childList) {
        if (!Array.isArray(childList)) childList = [childList]
        childList.map(c => el.appendChild(c))
    }
    if (id) el.id = id
    return el
}

const addStyle = (container, style, value) => {
    container.style[style] = value
    return container
}

const withStyle = (container, style) => {
    Object.keys(style).map(s => container.style[s] = style[s])
    return container
}

const withAttributes = (container, attributes) => {
    Object.keys(attributes).map(s => container[s] = attributes[s])
    return container
}

const T = (t) => document.createTextNode(t)

const updateNode = (id, container) => {
    const el = document.querySelector(`#${id}`)
    if (el.children.length) {
        el.replaceChild(container, el.firstChild)
    } else {
        el.appendChild(container)
    }
}

// const imageURI = `https://rukminim1.flixcart.com/image/352/352/k5r2mq80/mobile/r/q/z/samsung-galaxy-note10-lite-sm-n770fzsninu-original-imafzd7zse665hdq.jpeg?q=70`
const imageURL = './img/img.jpeg'

function createStar(height, color, className) {

    const margin1 = height * 3 / 8  // 30
    const border1 = height / 2  // 40

    const style = {
        'margin': `${margin1}px 0`,
        'borderRight': `${border1}px solid transparent`,
        'borderLeft': `${border1}px solid transparent`,
        'borderBottom': `${margin1}px solid ${color}`
    }

    const leftpart = withStyle(createElement('div', ['l1']), style)
    const rightpart = withStyle(createElement('div', ['l2']), style)
    const toppart = withStyle(createElement('div', ['l3']), style)

    return withStyle(createElement('div', ['star', className], [
        leftpart,
        rightpart,
        toppart
    ]), {
        width: height + 'px',
        height: height + 'px'
    })
}

function ModalStore() {
    const obj = {};

    function openModal(container) {
        container.classList.add('animate')
        obj.content = container
        updateNode('modal', createElement('div', ['modal'], container))
    }
    function closeModal() {
        obj.content.classList.remove('animate')
        obj.content.classList.add('rev-animate')
        setTimeout(() => {
            updateNode('modal', createElement('div'))
        }, 100)
    }

    return {
        open: (...args) => {
            openModal(...args)
        },
        close: (...args) => {
            closeModal(...args)
        },
        get: () => obj
    }
}

const modalstore = ModalStore();


function StorageStore() {

    return {
        getReview: () => {
            return Object.keys(localStorage).filter(k => k.startsWith('review/')).map(i => JSON.parse(localStorage.getItem(i)))
        },
        addReview: (review) => {
            const date = Date.now();
            review.id = date
            localStorage.setItem('review/' + date, JSON.stringify(review))
        },
        addUser: (user) => {
            localStorage.setItem('user', JSON.stringify(user))
        },
        getUser: () => {
            return JSON.parse(localStorage.getItem('user'))
        }
    }

}

const storageStore = StorageStore()