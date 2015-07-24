// $()で囲まれたところは、ページが読み込まれたら実行される。
// $()で囲わないと、ページの読み込みが終わる前に実行される可能性あり
$(function() {
    var wldcnt = 0
    alert("Sample")
    console.log("アラートうざいから消してみて")
    $("#worldBtn").click(function() { 
        console.log("color changed")
        if(wldcnt%2) {
            $("#world").css({ color: "black" })
        } else {
            $("#world").css({ color: "blue" })
        }
        wldcnt++
    })

})

var bgcnt = 0
function changeBgColor() {
    console.log("change backgroud color")
    if(bgcnt%2) {
        $(document.body).css({ background: "white" })
    } else {
        $(document.body).css({ background: "red" })
    }
    bgcnt++
}

// HTMLのonclick属性で関数の実行を指定してもよいし、
// jQueryを使ってイベント(onclick)に関数をバインドしても実行できる。
