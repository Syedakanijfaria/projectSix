const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
//console.log("button");

searchBtn.addEventListener("click", function () {
    const search = searchInput.value;
    const url = "http://openlibrary.org/search.json?q=javascript";
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
});

