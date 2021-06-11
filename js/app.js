document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll);

})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault()

    const releaseListItem = createReleaseListItem(event.target);
    const releaseList = document.querySelector('#release-list');
    releaseList.appendChild(releaseListItem);
    console.log("submit made");

    event.target.reset();
}

const createReleaseListItem = function (form) {
    const releaseListItem = document.createElement('li');

    const artist = document.createElement('h2');
    artist.textContent = form.artist.value;
    releaseListItem.appendChild(artist);

    const title = document.createElement('h3');
    title.textContent = form.title.value;
    releaseListItem.appendChild(title);

    const category = document.createElement('p');
    category.textContent = document.getElementById("category").value;
    releaseListItem.appendChild(category);

    const genre = document.createElement('p');
    category.textContent = form.genre.value;
    releaseListItem.appendChild(genre);

    const date = document.createElement('p');
    category.textContent = form.release.value;
    releaseListItem.appendChild(date);

    


    return releaseListItem

}

const handleDeleteAll = function(event)  {
    const releaseList = querySelector('#release-list');
    releaseList.innerHTML = '';
}