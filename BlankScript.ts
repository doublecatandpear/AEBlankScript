/// <reference types="types-for-adobe/AfterEffects/2018"/>
class BlankScriptPanel{
    mWin: Window | Panel | null = null
    mBtn:Button

    constructor(thisObj){
        let self = this
        this.mWin = (thisObj instanceof Panel)? thisObj : new Window("palette", "Test Panel", undefined, { resizeable: true });
        this.mWin.orientation = "column"
        let mainGroup = this.mWin.add("group")
        mainGroup.alignment = ["fill", "fill"]
        mainGroup.orientation = "row"
        this.mBtn = mainGroup.add("button", undefined, "test")
        this.mBtn.alignment = ["center", "center"]
        this.mBtn.onClick = function(){
            self.btnFunction()
        }
    }

    public btnFunction(){
        alert("Hello, world!")
    }

    public update(){
        this.mWin.layout.layout(true)
    }

    public show(){
        let panel = <Window>(this.mWin)
        panel.onResizing = panel.onResize = function(){
            panel.layout.resize()
        }
        panel.layout.layout(true)
        panel.layout.resize()
        //panel.show()
    }

    public close(){
        if(this.mWin){
            (<Window>this.mWin).close()
        }
    }
}

let blankScriptPanel:BlankScriptPanel = new BlankScriptPanel(this)
blankScriptPanel.show()
let w = blankScriptPanel.mWin;
if (w.toString() == "[object Panel]") {
    w;
} else {
    w.show();
}