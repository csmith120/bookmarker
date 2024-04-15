const body = document.body;
const input = document.querySelector('input[type]');
const overlay = document.querySelector('.overlay')

function showFloater() {
    body.classList.add('show-floater');
}

function closeFloater() {
    if (body.classList.contains('show-floater')) {
        body.classList.remove('show-floater');
    }
}


input.addEventListener('focusin', showFloater);
input.addEventListener('focusin', closeFloater);
overlay.addEventListener('click', closeFloater);

//=========

const bookmarksList = document.querySelector('.bookmark-list');
const bookmarksForm = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarksForm.querySelector('input[type]');

function createBookmark(e) {
    e.preventDefault();

    console.log('prosessing form')
}

bookmarksForm.addEventListener('submit', createBookmark);