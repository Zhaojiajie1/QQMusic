
let recommendList = document.getElementsByClassName("RecommendList")[0];
let SearchPart = document.getElementsByClassName("SearchPart")[0];
let RankList = document.getElementsByClassName("RankPart")[0];
let RankBtn = document.getElementsByClassName("rank-link")[0];
let RecommendBtn = document.getElementsByClassName("recommend-link")[0];
let search = document.getElementsByClassName("get-search")[0];
let searchBox = document.getElementsByClassName("search-box")[0];
let cancelBtn = document.getElementsByClassName("cancel")[0];
let hotSearch = document.getElementById("hot-search-box");
let rankList = document.getElementsByClassName("rank-list")[0];
let recommendLink = document.getElementById("recommend");
let rankLink = document.getElementById("rank");
let historyDiv = document.getElementsByClassName("history")[0];
//获取热门搜索
async function getHot() {
    let response = await fetch('http://124.221.249.219:8000/api/hot', {
        method: 'GET',
    });
    response = await response.json();
    InsertToSearchPart(response, hotSearch)
}
//获取排行榜
async function getRank() {
    let response = await fetch('http://124.221.249.219:8000/api/ranking', {
        method: 'GET',
    });
    response = await response.json();
    InsertToRankList(response, rankList);
}
//跳转到搜索
search.addEventListener("click", function (e) {
    searchDefaultHtml.style.display = "block";
    searchHtmlContent.innerHTML = "";
    historyBox.innerHTML = "";
    searchHtml.style.display = "none";
    //判断是否有历史记录，有的话就展示，反之隐藏
    if (historyArr.length == 0) {
        historyDiv.style.display = "none";
    }

    else {
        historyDiv.style.display = "block";
        InsertHistory();
    }
    //防止重复申请
    if (clickCount == 0) {
        recommendList.style.display = "none";
        SearchPart.style.display = "block";
        search.style.width = "75vw";
        cancelBtn.style.display = "block";
        getHot();
    }
    clickCount++;
})
//返回推荐页面
cancelBtn.addEventListener("click", function (e) {
    clickCount = 0
    SearchPart.style.display = "none";
    recommendList.style.display = "block";
    search.style.width = "88vw";
    cancelBtn.style.display = "none";
    hotSearch.innerHTML = "";
})
//跳转到排行榜页面
RankBtn.addEventListener("click", function (e) {
    //页面跳转后标亮字体
    rankLink.className = "ra-link-title active";
    recommendLink.className = "re-link-title";
    //清零clickCount，保证下次申请数据正常
    clickCount = 0
    SearchPart.style.display = "none";
    recommendList.style.display = "none";
    searchBox.style.display = "none";
    cancelBtn.style.display = "none";
    hotSearch.innerHTML = "";
    RankList.style.display = "block";
    getRank();
})
//跳转到推荐页面
RecommendBtn.addEventListener("click", function (e) {
    recommendLink.className = "re-link-title active";
    rankLink.className = "ra-link-title";
    clickCount = 0
    SearchPart.style.display = "none";
    searchBox.style.display = "block";
    search.style.width = "88vw";
    cancelBtn.style.display = "none";
    hotSearch.innerHTML = "";
    RankList.style.display = "none";
    recommendList.style.display = "block";
})
