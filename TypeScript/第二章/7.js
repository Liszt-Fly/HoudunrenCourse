var bt = document.querySelector("#bt");
bt.addEventListener("click", function (e) {
    e.preventDefault();
    //断言一定存在
    var body = document.querySelector("body");
    body.insertAdjacentHTML("beforeend", "<h2>xj老师</h2>");
});
