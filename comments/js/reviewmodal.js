
function closeRateModal() {
    modalstore.close()
}

function addReview() {
    reviewState.getReview()
    const review = {
        rating: reviewState.getRating() + 1,
        title: reviewState.getTitle(),
        desc: reviewState.getReview(),
        user: loginState.getUser()
    }
    storageStore.addReview(review)
    allReviewState.addReview(review)
    closeRateModal()
}

function ReviewState() {
    const obj = {
        rating: 3,
        title: ''
    }
    return {
        addReview: (v) => { obj.review = v },
        getReview: () => obj.review,
        addRating: (v) => { obj.rating = v },
        getRating: () => obj.rating,
        addTitle: (v) => { obj.title = v },
        getTitle: () => obj.title,
    }
}

const reviewState = ReviewState()

function setRating() {
    reviewState.addRating(this + 0)
    updateNode('rating-stars', createRatingStars())
}

function createRatingStars() {
    return createElement('div', ['rating-input'],
        Array(5).fill(1).map((_, i) => withAttributes(createStar(25, i <= reviewState.getRating() ? '#ffe11b' : '#dedede', 'rating-star'), { onclick: setRating.bind(i) })),
    )
}

function createReviewContainer() {

    function textValue(evt) {
        reviewState.addReview(evt.target.value)
    }

    function titleValue(evt) {
        reviewState.addTitle(evt.target.value)
    }

    return createElement('div', ['reviewmodal'], [
        createElement('div', ['header'], [
            T('Add Review'),
            withAttributes(createElement('div', ['close-button'],
                createElement('div', ['close'])), { onclick: closeRateModal }
            )
        ]),
        createElement('div', ['rating'], createRatingStars(), 'rating-stars'),
        withAttributes(createElement('textarea', ['review-area']), { placeholder: 'Add Review', onkeyup: textValue }),
        withAttributes(createElement('input', ['review-title']), { placeholder: 'Add Title (Opt.)', onkeyup: titleValue }),
        withAttributes(createElement('div', ['submit'], T('Add Review')), { onclick: addReview })
    ])
}