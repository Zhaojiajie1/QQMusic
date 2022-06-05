//这个文件下会放一些，多操作都需要用到的变量和函数，并且提供一些辅助变量
let clickCount = 0;
let historyArr = new Array();
let searchHtmlContent = document.getElementsByClassName("search-song-list")[0];
let searchDefaultHtml = document.getElementsByClassName("searchDefaultHtml")[0];
let searchHtml = document.getElementsByClassName("searchHtml")[0];
//往页面插入内容
function InsertToHtml(children, father) {
    let html = ``;
    children.map(function (item) {
        let cover = item.cover;
        let title = item.title;
        let views = item.views;
        html += `
        <li class="display-item">
                        <div class="display-item-img">
                            <img src=${cover}>
                            <span class="display-item-cover">
                                <i class="iconfont icon-bofang_o"></i>
                                <span class="display-item-cover-count">${views}</span>
                            </span>
                        </div>
                        <p class="display-item-title">${title}</p>
                    </li> `
    })
    father.innerHTML += html;
}
function InsertToColumnHtml(children, father) {
    let html = ``;
    children.map(function (item) {
        let icon = item.icon;
        let cover = item.background;
        let title = item.title;
        let views = item.description;
        html += `
        <li class="special-display-item">
                        <div class="special-display-item-img">
                            <img src=${cover}>
                            <span class="special-display-item-cover">
                                <img src=${icon}>
                                <p class="special-display-item-cover-count">${views}</p>
                            </span>
                        </div>
                        <p class="display-item-title">${title}</p>
                    </li> `
    })
    father.innerHTML += html;
}
function InsertToSearchPart(children, father) {
    let html = ``;
    children.map(function (item) {
        html += `
        <a class="search-item">${item}</a>`
    })
    father.innerHTML += html;
}
function InsertToRankList(children, father) {
    let html = ``;
    children.map(function (item) {
        let title = item.title;
        let top = item.top3;
        let cover = item.cover;
        let views = item.views;
        let text = item.update_frequence;
        html += `
        <li class="rank-list-item">
        <div class="rank-list-text">
            <h2 class="rank-list-title">${title}</h2>
            <ul class="music-list">
                <li class="rank-song-list">
                    <span class="song-content">1.${top[0].title}-${top[0].artist}</span>
                </li>
                <li class="rank-song-list">
                <span class="song-content">2.${top[1].title}-${top[1].artist}</span>
            </li>
            <li class="rank-song-list">
            <span class="song-content">3.${top[2].title}-${top[2].artist}</span>
        </li>
            </ul>

        </div>
        <div class="rank-list-media">
        <img src=${cover}>
        <span class="rank-list-updata">每${text}更新</span>
        <span class="rank-list-view">${views}</span>
    </div>
    </li>
    `
    })
    father.innerHTML += html;
}

//数组去重
function unique(arr) {
    let res = arr.filter(function (item, index, arr) {
        return arr.indexOf(item) === index
    })
    return res;
}
