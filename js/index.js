var tabs =document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);




for(var i=0;i<tabs.length;i++){
    tabs[i].onclick = showlist; //为什么这里不能加括号？
}


//11111111111111111111111111111111111111

function showlist() {
    for(var i=0;i<tabs.length;i++){
        if(tabs[i] === this){
            tabs[i].className ="active";
            lists[i].className="clearfix active"
            // console.log(tabs[i]);
        }else{
            tabs[i].className = "";
            // console.log(tabs[i]);
            lists[i].className="clearfix "
        }
    }
}

var seckillNav = document.getElementById("seckillNav");

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop>=280){
        //class 加上seckill-navfixed
        seckillNav.className = "seckill-nav seckill-navfixed"
    }else{
        //seckill-nav
        seckillNav.className = "seckill-nav"
    }
    console.log(scrollTop);
}





