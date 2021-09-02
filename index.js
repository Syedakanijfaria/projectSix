//const searchBtn = document.getElementById('search-btn');
//console.log("button");

const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Book name: ${doc.title}</h5>
                <h5 class="card-title">Author Name: ${doc.author_name}</h5>
                <h5 class="card-title">Publisher: ${doc.publisher}</h5>
                <h5 class="card-title">1st publish year: ${doc.first_publish_year}</h5>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}


// searchBtn.addEventListener('click', function () {
//     const searchText = searchInput.value;
//     searchInput.value = '';
//     const url = `https://openlibrary.org/search.json?q=${searchText}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displaySearchResult(data.docs));


// });

