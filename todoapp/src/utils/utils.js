export function createElement(type, classList, childList, id) {
    const el = document.createElement(type)
    if (classList) el.className = classList.reduce((a, c, i) => a + (i ? ' ' : '') + c, '')
    if (childList) {
        if (!Array.isArray(childList)) childList = [childList]
        childList.map(c => el.appendChild(c))
    }
    if (id) el.id = id
    return el
}

export const addStyle = (container, style, value) => {
    container.style[style] = value
    return container
}

export const withStyle = (container, style) => {
    Object.keys(style).map(s => container.style[s] = style[s])
    return container
}

export const withAttributes = (container, attributes) => {
    Object.keys(attributes).map(s => container[s] = attributes[s])
    return container
}

export const T = (t) => document.createTextNode(t)

export const updateNode = (id, container) => {
    const el = document.querySelector(`#${id}`)
    if (el.children.length) {
        el.replaceChild(container, el.firstChild)
    } else {
        el.appendChild(container)
    }
}