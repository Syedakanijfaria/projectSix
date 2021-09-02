const errorFound = document.getElementById('error-message').style.display = 'none';

const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    if (searchText === '') {
        document.getElementById('total-result').style.display = 'none';
    }
    else {
        document.getElementById('total-result').style.display = 'block';
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data))
            .catch(error => displayError(error));
    }
}

// error message-------------------------
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

// display book details------------
const displaySearchResult = data => {
    const { numFound, docs } = data
    const totalResult = document.getElementById('search-result');
    totalResult.textContent = '';
    // total search result--------------
    document.getElementById('total').innerText = numFound;
    document.getElementById('founded-book').innerText = data.docs.length;

    // books searching result----------
    docs.forEach(doc => {
        //console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img  src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top w-50 h-100 mx-auto" alt="">
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


