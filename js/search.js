let historyBox = document.getElementById("history-search-box");
//搜索歌曲
search.addEventListener('keydown', function (e) {
    if (e.code == "Enter") {
        e.preventDefault();
        searchHtmlContent.innerHTML = "";
        fetch('http://124.221.249.219:8000/api/search?keyword= ' + search.value, {
            method: "GET",
        }).then((res) => {
            if (search.value !== null) {
                historyArr.push(search.value);
                historyArr = unique(historyArr);
                localStorage.setItem("search", historyArr);
            }
            return res.json();

        }).then((res) => {
            searchDefaultHtml.style.display = "none";
            searchHtml.style.display = "block";
            res.forEach((item) => {
                searchHtmlContent.innerHTML += `
                <li class="search-song-list-item">
                <h3 class="search-song-title">${item.title}</h3>
                <p class="search-song-artist">${item.artist}</p>
            </li>
                `
            })
        }).catch((e) => {
            console.log(e.message)
            searchDefaultHtml.style.display = "none";
            searchHtml.style.display = "block";
            searchHtmlContent.innerHTML += `${e}`;
        })
    }
})
//插入历史搜索记录
function InsertHistory() {
    let history = localStorage.getItem('search');
    history = history.split(',')
    history.forEach((item) => {
        historyBox.innerHTML += `
            <a class="search-item">${item}</a>
`
    })
}
