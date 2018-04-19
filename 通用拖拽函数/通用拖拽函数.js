box.onmousedown = function(ev) {
    var oEvent = ev || event;
    disX = oEvent.clientX - this.offsetLeft;
    disY = oEvent.clientY - this.offsetTop;
    var self = this;
    document.onmousemove = function(ev) {
        var oEvent = ev || event;
        var l = oEvent.clientX - disX;
        var R = oEvent.clientY - disY;

        if (l < 0) {
            l = 0;
        } else if (l > document.documentElement.clientWidth - self.offsetWidth) {
            l = document.documentElement.clientWidth - self.offsetWidth;
        }

        if (R < 0) {
            R = 0;
        } else if (R > document.documentElement.clientHeight - self.offsetHeight) {
            R = document.documentElement.clientHeight - self.offsetHeight;
        }
        self.style.left = l + 'px';
        self.style.top = R + 'px';
    };
    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    };
    return false;
}
