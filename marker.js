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

const bookmarksList = document.querySelector('.bookmarks-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type]');
const bookmarks =[];

function createBookmark(e) {
    e.preventDefault();

    //add a new bookmark to bookmark
    const title = bookmarkInput.value;
    const bookmark ={
        title: title
    };

    bookmarks.push(bookmark);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);
    bookmarkForm.reset();
    // save that bookmark to local storage

    //const title = bookmarkInput.value;
    //const bookmark = document.createElement('a');

    //bookmark.className = 'bookmark';
    //bookmark.innerText = title;
    //bookmark.href = '#';
    //bookmark.target = '_blank';
    //bookmarksList.appendChild(bookmark);
}

function fillBookmarksList(bookmarks = []) {

    const bookmarksHtml = bookmarks.map((bookmark) => {
        return `
        <a href="#" class="bookmark">
        ${bookmarks[i].title}
        </a>
        `;
    }).join('');

    bookmarksList.innerHTML = bookmarksHtml;

 //let bookmarksHtml = '';
 //for (let i = 0; i < bookmarks.length; i++) {
    //bookmarksHtml +=`
   //<a href="#" class="bookmark">
   // ${bookmarks[i].title}
    //</a>
   // `;
 //}

}

function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', bookmarks);
}

bookmarkForm.addEventListener('submit', createBookmark);