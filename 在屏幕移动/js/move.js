var flag = 1;
var le = 0;
var to = 0;

function show() {
    var adv = document.getElementById("ad");
    var sch = document.documentElement.clientHeight - 250;
    var scw = document.documentElement.clientWidth - 250;
    var xspeed = 1;
    var yspeed = 1;



    var move = function() {

        if (le < 0 || le > scw) {
            xspeed = -xspeed;
        }
        if (to < 0 || to > sch) {
            yspeed = -yspeed;
        }
        le += xspeed;
        to += yspeed;
        adv.style.cssText = "top:" + to + "px;" + "left:" + le + "px;";
        if (flag > 0) {
            setTimeout(move, 8);
        }

    }
    setTimeout(move, 8);
}
show();
function stop() {
    flag = -flag;
    show();
}

