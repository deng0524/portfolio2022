//與手機版導覽列做連接

let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector("nav");
//按下按鈕後產生的變化
menu.onclick =() =>{
  //fa-times為x按鈕
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


//venobox點圖影片跳出效果
$(document).ready(function(){
    $('.venobox').venobox(); 
});


//QueryLoader2 進網頁前的loading動畫
window.addEventListener('DOMContentLoaded', function() {
        new QueryLoader2(document.querySelector("body"), {
            barColor: "#efefef",
            backgroundColor: "#111",
            percentage: true,
            barHeight: 1,
            minimumTime: 200,
            fadeOutTime: 1000
        });
    });