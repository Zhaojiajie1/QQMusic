const OffdisplayBox = document.getElementsByClassName("display-box")[0];
const talentdisplayBox = document.getElementsByClassName("display-box")[1];
const columndisplayBox = document.getElementsByClassName("display-box")[2];
let official = new Array();
let talent = new Array();
let column = new Array();
//获取推荐数据
async function getData() {
    let response = await fetch('http://124.221.249.219:8000/api/recommendations', {
        method: 'GET',
    });
    response = await response.json();
    response.offical.forEach(function (value, idx) {
        official[idx] = value;
    })
    InsertToHtml(official, OffdisplayBox)
    response.tatsujin.forEach(function (value, idx) {
        talent[idx] = value;
    })
    InsertToHtml(talent, talentdisplayBox)
    response.column.forEach(function (value, idx) {
        column[idx] = value;
    })
    InsertToColumnHtml(column, columndisplayBox);
}
getData();
