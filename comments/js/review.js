function AllReviewState() {
    const comments = storageStore.getReview();
    return {
        addReview: (v) => { comments.push(v); updateNode('commentbox', createCommentBox()) },
        getReview: () => comments,
    }
}

const allReviewState = AllReviewState()

function openRateModal() {
    modalstore.open(createReviewContainer())
}

function createReviewBar() {
    return createElement('div', ['reviewbar'], [
        createElement('div', ['header'], [
            createElement('div', ['title'], T('Ratings & Reviews')),
            loginState.isloggedIn() ? withAttributes(createElement('div', ['button'], T('Rate Product')), { onclick: openRateModal }) : createElement('div'),
        ]),
        createElement('div', ['body'], [T('4.4'), createStar(30, 'black', 'icon')]),
        createElement('div', ['footer'], T('391 Ratings & 72 Reviews')),
    ])
}

function createComments(review) {
    return createElement('div', ['review'], [
        createElement('div', ['rating'], [
            createElement('div', ['rate'], [T(review.rating), createStar(14, 'white', 'icon')]),
            createElement('div', ['title'], [T(review.title)]),
        ]),
        createElement('div', ['description'], [T(review.desc)]),
        createElement('div', ['user'], [T(review.user)])
    ])
}


function createCommentBox() {
    return createElement('div', ['reviewbox'],
        [
            createReviewBar(),
            ...allReviewState.getReview().map(review => createComments(review)),
        ],
    )
}



