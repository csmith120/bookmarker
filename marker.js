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
//input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater);

//=========

const bookmarksList = document.querySelector('.bookmarks-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type=text]');
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
const apiUrl = 'https://opengraph.io/api/1.0/site';
const appId = 'fe267273-3b6e-47e7-b238-2314df0c025f';



fillBookmarksList(bookmarks);

function createBookmark(e) {
    e.preventDefault();

    if (!bookmarkInput.value){
        alert('we need info');
        return;
    }
    const url = encodeURIComponent(bookmarkInput.value);
    //add a new bookmark to bookmark
    fetch(`${apiUrl}/${url}?app_id=${appId}`)
    .then(response => response.json())
    .then (data => {

        const bookmark ={
            title: data.hybridGraph.title,
            image: data.hybridGraph.image,
            link: data.hybridGraph.url
        };
    
        bookmarks.push(bookmark);
        fillBookmarksList(bookmarks);
        storeBookmarks(bookmarks);
        bookmarkForm.reset();
    });

    .catch(error => {
        alert('there was a promblem getting info')
    });



   
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

    const bookmarksHtml = bookmarks.map((bookmark, i) => {
        return `
        <a href="${bookmark.link}" class="bookmark" data-id="${i}">
        <div class="img" style="background-image:url('${bookmark.image}')"></div>
        <div class="title">${bookmark.title}</div>
        <span class="glyphicon glyphicon-remove"></span>
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

function removeBookmark(e) {

    if (!e.target.matches('.glyphicon-remove')) return;

    const index = e.target.parentNode.dataset.id;
    bookmarks.splice(index, 1);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);
}

function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

bookmarkForm.addEventListener('submit', createBookmark);
bookmarksList.addEventListener('click', removeBookmark);