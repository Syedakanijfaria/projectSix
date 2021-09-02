const searchBook = async () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    if (searchText === '') {
        document.getElementById('total-result').style.display = 'none';
    }
    else {
        document.getElementById('total-result').style.display = 'block';
        const url = `https://openlibrary.org/search.json?q=${searchText}`;

        // const res = await fetch(url);
        // const data = await res.json()
        // displaySearchResult(data)
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data));
    }
}

searchBook()

const displaySearchResult = data => {
    const { numFound, docs } = data
    const totalResult = document.getElementById('search-result');
    totalResult.textContent = '';
    // total search result
    document.getElementById('total').innerText = numFound;

    // books searching result
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img  src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="">
            <div class="card-body">
                <h5 class="card-title">Book name: ${doc.title}</h5>
                <h5 class="card-title">Author Name: ${doc.author_name}</h5>
                <h5 class="card-title">Publisher: ${doc.publisher}</h5>
                <h5 class="card-title">1st publish year: ${doc.first_publish_year}</h5>
            </div>
        </div>
        `;
        totalResult.appendChild(div);
    });
}


