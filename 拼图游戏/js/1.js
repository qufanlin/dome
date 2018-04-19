var content = document.getElementById("content");
var startBtn = document.querySelector("input[type='button']");
var x = 2;
startBtn.addEventListener("click", startGames);
// 开始游戏
function startGames() {
    // 清除开始按钮函数
    startBtn.removeEventListener("click", startGames);
    // 清除内容
    content.innerHTML = null;
    var num = x * x;
    var contentWidth = content.clientWidth;
    var array = [];
    for (var j = 1; j < num; j++) {
        array.push(j);
    }
    for (var i = 0; i < num; i++) {
        var numDiv = document.createElement("div");
        numDiv.setAttribute("class", "numDiv");
        content.appendChild(numDiv);
        numDiv.index = i;
        var width = contentWidth / x;
        var height = width;
        numDiv.style.width = width + "px";
        numDiv.style.height = height + "px";
        numDiv.style.lineHeight = width + "px";
        if (i < (num - 1)) {
            var index = Math.floor(Math.random() * array.length);
            numDiv.innerHTML = array[index];
            array.splice(index, 1);
        }
    }
    var num2Div = document.getElementsByClassName("numDiv");
    num2Div[(num - 1)].style.border = "none";
    for (var i = 0; i < num2Div.length; i++) {
        num2Div[i].addEventListener("click", function() {
            if (this.innerHTML != '') {
                var self = this;
                var html = this.innerHTML;
                changePlace(html, self)
            }
        })
    }
}

function changePlace(val, self) {
    var isWin = true;
    var num2Div = document.getElementsByClassName("numDiv");
    for (var i = 0; i < num2Div.length; i++) {
        var html = num2Div[i].innerHTML;
        var that = num2Div[i];
        var index = self.index;
        if (html == '') {
            if (i == index + x || i == index - x) {
                go(that);
            } else if (i == index + 1) {
                if (index % x != (x - 1)) {
                    go(that);
                }
            } else if (i == index - 1) {
                if (index % x != 0) {
                    go(that);
                }
            }
        }
    }

    function go(that) {
        var right = 0;
        that.innerHTML = val;
        that.style.border = "solid 7px cyan";
        self.innerHTML = '';
        self.style.border = "none";
    }
    for (var j = 0; j < num2Div.length - 1; j++) {
        var inner = num2Div[j].innerHTML;
        var index2 = num2Div[j].index;
        if ((inner - 1) != index2) {
            isWin = false;
        }
    }
    if (isWin) {
        nextLevel();
    }
}

function nextLevel() {
    alert("恭喜通过，下一关");
    x++;
    startGames();
}
