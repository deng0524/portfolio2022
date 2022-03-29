//與手機版導覽列做連接

let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector("nav");
//按下按鈕後產生的變化
menu.onclick =() =>{
  //fa-times為x按鈕
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


//Picturefill.js 自適應圖片，隨著裝置提供不同大小的圖檔
  //要套用的HTML元素
  document.createElement( "picture" );


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