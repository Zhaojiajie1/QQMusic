//rankList是父盒子
let rankItems = document.getElementsByClassName("rank-list-item");
let sortableOne = Sortable.create(rankList, {
    animation: 150,
});
