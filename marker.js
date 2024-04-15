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