var BlankScriptPanel = (function () {
    function BlankScriptPanel(thisObj) {
        this.mWin = null;
        var self = this;
        this.mWin = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Test Panel", undefined, { resizeable: true });
        this.mWin.orientation = "column";
        var mainGroup = this.mWin.add("group");
        mainGroup.alignment = ["fill", "fill"];
        mainGroup.orientation = "row";
        this.mBtn = mainGroup.add("button", undefined, "test");
        this.mBtn.alignment = ["center", "center"];
        this.mBtn.onClick = function () {
            self.btnFunction();
        };
    }
    BlankScriptPanel.prototype.btnFunction = function () {
        alert("Hello, world!");
    };
    BlankScriptPanel.prototype.update = function () {
        this.mWin.layout.layout(true);
    };
    BlankScriptPanel.prototype.show = function () {
        var panel = (this.mWin);
        panel.onResizing = panel.onResize = function () {
            panel.layout.resize();
        };
        panel.layout.layout(true);
        panel.layout.resize();
    };
    BlankScriptPanel.prototype.close = function () {
        if (this.mWin) {
            this.mWin.close();
        }
    };
    return BlankScriptPanel;
}());
var blankScriptPanel = new BlankScriptPanel(this);
blankScriptPanel.show();
var w = blankScriptPanel.mWin;
if (w.toString() == "[object Panel]") {
    w;
}
else {
    w.show();
}