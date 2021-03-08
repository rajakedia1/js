function createImagePanel() {
    const img = createElement('img', ['image'])
    img.src = imageURL
    const container = createElement('div', ['image-container'], img)

    return container
}

function main() {
    return createElement('div', ['main'],
        [
            createElement('div', ['left'], createImagePanel()),
            createElement('div', ['right'], createCommentBox(), 'commentbox')
        ]
    )
}

function createScreen() {
    updateNode('header', createHeader())
    updateNode('main', main())
}

createScreen()