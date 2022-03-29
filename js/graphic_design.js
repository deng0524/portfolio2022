//與手機版導覽列做連接

let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector("nav");
//按下按鈕後產生的變化
menu.onclick =() =>{
  //fa-times為x按鈕
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}



//LightGallery.js_Dynamic Mode的效果(點圖進去下方縮圖顯示其他圖片)

$(document).ready(function() {
  //單圖
  $('#dynamic01').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/jmoH9LT.jpg",
      thumb:"https://i.imgur.com/jmoH9LT.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  $('#dynamic02').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/x1KBgi5.jpg",
      thumb:"https://i.imgur.com/x1KBgi5.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  $('#dynamic03').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/YzZdAUQ.jpg",
      thumb:"https://i.imgur.com/YzZdAUQ.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  $('#dynamic04').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/0NLrhzj.jpg",
      thumb:"https://i.imgur.com/0NLrhzj.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  $('#dynamic05').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/aERYwgT.jpg",
      thumb:"https://i.imgur.com/aERYwgT.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  $('#dynamic06').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/ZAdrjKO.jpg",
      thumb:"https://i.imgur.com/ZAdrjKO.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  $('#dynamic07').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/6IrRL1J.jpg",
      thumb:"https://i.imgur.com/6IrRL1J.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  $('#dynamic08').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/xLHa9oa.jpg",
      thumb:"https://i.imgur.com/xLHa9oa.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  $('#dynamic09').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/7Nkn0FR.jpg",
      thumb:"https://i.imgur.com/7Nkn0FR.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>廣告帆布</h4>
                </div>`
    }]
      });
  });
  
  //組圖
  //第一組
  $('#dynamic').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [ {
      src:"https://i.imgur.com/nkqidwx.jpg",
      thumb:"https://i.imgur.com/nkqidwx.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/eTCpRNo.jpg",
      thumb:"https://i.imgur.com/eTCpRNo.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/wTP1Jhe.jpg",
      thumb:"https://i.imgur.com/wTP1Jhe.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/AuAr1SV.jpg",
      thumb:"https://i.imgur.com/AuAr1SV.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },]
      });
  });
  //第二組
  $('#dynamic-2').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/81ACrOP.jpg",
      thumb:"https://i.imgur.com/81ACrOP.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/n3jCUk1.jpg",
      thumb:"https://i.imgur.com/n3jCUk1.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/bwCeRDk.jpg",
      thumb:"https://i.imgur.com/bwCeRDk.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/38rpJdh.jpg",
      thumb:"https://i.imgur.com/38rpJdh.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/u70FQHz.jpg",
      thumb:"https://i.imgur.com/u70FQHz.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },]
      });
  });
  //第三組
  $('#dynamic-3').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/XNdA1cI.jpg",
      thumb:"https://i.imgur.com/XNdA1cI.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/eTByawT.jpg",
      thumb:"https://i.imgur.com/eTByawT.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/B66w9WL.jpg",
      thumb:"https://i.imgur.com/B66w9WL.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },]
      });
  });
  //第四組
  $('#dynamic-4').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/63GF0r5.jpg",
      thumb:"https://i.imgur.com/63GF0r5.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/ex0qwJ2.jpg",
      thumb:"https://i.imgur.com/ex0qwJ2.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/06MMem3.jpg",
      thumb:"https://i.imgur.com/06MMem3.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/SB0j6SX.jpg",
      thumb:"https://i.imgur.com/SB0j6SX.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第五組
  $('#dynamic-5').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/Y2tbtoP.jpg",
      thumb:"https://i.imgur.com/Y2tbtoP.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/RrUhYl7.jpg",
      thumb:"https://i.imgur.com/RrUhYl7.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/4COQ62z.jpg",
      thumb:"https://i.imgur.com/4COQ62z.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/xk6MTjm.jpg",
      thumb:"https://i.imgur.com/xk6MTjm.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/x09MreL.jpg",
      thumb:"https://i.imgur.com/x09MreL.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/v8aWy0h.jpg",
      thumb:"https://i.imgur.com/v8aWy0h.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/1vfUDj7.jpg",
      thumb:"https://i.imgur.com/1vfUDj7.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/iVbK6Q3.jpg",
      thumb:"https://i.imgur.com/iVbK6Q3.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第六組
  $('#dynamic-6').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/aLDMUby.jpg",
      thumb:"https://i.imgur.com/aLDMUby.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/gg7xFSN.jpg",
      thumb:"https://i.imgur.com/gg7xFSN.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/alyl1V9.jpg",
      thumb:"https://i.imgur.com/alyl1V9.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/oYLkIEX.jpg",
      thumb:"https://i.imgur.com/oYLkIEX.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/60eRlRT.jpg",
      thumb:"https://i.imgur.com/60eRlRT.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/2Q8AFMt.jpg",
      thumb:"https://i.imgur.com/2Q8AFMt.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/s2MVRDT.jpg",
      thumb:"https://i.imgur.com/s2MVRDT.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第七組
  $('#dynamic-7').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/FhIe2K5.jpg",
      thumb:"https://i.imgur.com/FhIe2K5.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/uk2Os0w.jpg",
      thumb:"https://i.imgur.com/uk2Os0w.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/DglRcFr.jpg",
      thumb:"https://i.imgur.com/DglRcFr.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/Jw7PY4S.jpg",
      thumb:"https://i.imgur.com/Jw7PY4S.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/ojD04dw.jpg",
      thumb:"https://i.imgur.com/ojD04dw.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第八組
  $('#dynamic-8').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/HzkGsfO.jpg",
      thumb:"https://i.imgur.com/HzkGsfO.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/YBVLIXU.jpg",
      thumb:"https://i.imgur.com/YBVLIXU.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/fHPbYg9.jpg",
      thumb:"https://i.imgur.com/fHPbYg9.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/osIXyKh.jpg",
      thumb:"https://i.imgur.com/osIXyKh.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/h1D5Ut4.jpg",
      thumb:"https://i.imgur.com/h1D5Ut4.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第九組
  $('#dynamic-9').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/kZrcNuM.jpg",
      thumb:"https://i.imgur.com/kZrcNuM.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/RaspYOO.jpg",
      thumb:"https://i.imgur.com/RaspYOO.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/Q0ZPZd5.jpg",
      thumb:"https://i.imgur.com/Q0ZPZd5.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/HezpF0n.jpg",
      thumb:"https://i.imgur.com/HezpF0n.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/rU8Dmck.jpg",
      thumb:"https://i.imgur.com/rU8Dmck.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/MFuvfdW.jpg",
      thumb:"https://i.imgur.com/MFuvfdW.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/S8RQOYe.jpg",
      thumb:"https://i.imgur.com/S8RQOYe.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/t3NYf4s.jpg",
      thumb:"https://i.imgur.com/t3NYf4s.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/TBrz9Fx.jpg",
      thumb:"https://i.imgur.com/TBrz9Fx.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/bjFSAt8.jpg",
      thumb:"https://i.imgur.com/bjFSAt8.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/T4aCuTk.jpg",
      thumb:"https://i.imgur.com/T4aCuTk.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/TgcYLfT.jpg",
      thumb:"https://i.imgur.com/TgcYLfT.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/zrRI8J0.jpg",
      thumb:"https://i.imgur.com/zrRI8J0.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/za2FqNP.jpg",
      thumb:"https://i.imgur.com/za2FqNP.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第十組
  $('#dynamic-10').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/7Eyt7Y5.jpg",
      thumb:"https://i.imgur.com/7Eyt7Y5.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/jmf8hNP.jpg",
      thumb:"https://i.imgur.com/jmf8hNP.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/d6g4miC.jpg",
      thumb:"https://i.imgur.com/d6g4miC.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/JJYRfhV.jpg",
      thumb:"https://i.imgur.com/JJYRfhV.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/4tDJ1hb.jpg",
      thumb:"https://i.imgur.com/4tDJ1hb.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/qaBcvvM.jpg",
      thumb:"https://i.imgur.com/qaBcvvM.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第十一組
  $('#dynamic-11').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/yduxmPB.jpg",
      thumb:"https://i.imgur.com/yduxmPB.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/88xc6s2.jpg",
      thumb:"https://i.imgur.com/88xc6s2.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/pVPqzJ0.jpg",
      thumb:"https://i.imgur.com/pVPqzJ0.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/c0vRLTP.jpg",
      thumb:"https://i.imgur.com/c0vRLTP.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/dznKgAg.jpg",
      thumb:"https://i.imgur.com/dznKgAg.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第十二組
  $('#dynamic-12').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/6S8B8lf.jpg",
      thumb:"https://i.imgur.com/6S8B8lf.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/f5sCuvz.jpg",
      thumb:"https://i.imgur.com/f5sCuvz.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/UvrSWrD.jpg",
      thumb:"https://i.imgur.com/UvrSWrD.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/8vY1h1S.jpg",
      thumb:"https://i.imgur.com/8vY1h1S.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/Bixrxu0.jpg",
      thumb:"https://i.imgur.com/Bixrxu0.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/oDkgYHd.jpg",
      thumb:"https://i.imgur.com/oDkgYHd.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第十三組
  $('#dynamic-13').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/l9k9bkr.jpg",
      thumb:"https://i.imgur.com/l9k9bkr.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/rm0Foif.jpg",
      thumb:"https://i.imgur.com/rm0Foif.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/quXjDU6.jpg",
      thumb:"https://i.imgur.com/quXjDU6.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/x139qAx.jpg",
      thumb:"https://i.imgur.com/x139qAx.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/g8oUPl1.jpg",
      thumb:"https://i.imgur.com/g8oUPl1.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/pRkxrdW.jpg",
      thumb:"https://i.imgur.com/pRkxrdW.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/QEYfKus.jpg",
      thumb:"https://i.imgur.com/QEYfKus.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/OvTrBZO.jpg",
      thumb:"https://i.imgur.com/OvTrBZO.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/z1CHHjO.jpg",
      thumb:"https://i.imgur.com/z1CHHjO.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/qT8OgDI.jpg",
      thumb:"https://i.imgur.com/qT8OgDI.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },{
      src:"https://i.imgur.com/Thn2c4Z.jpg",
      thumb:"https://i.imgur.com/Thn2c4Z.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第十四組
  $('#dynamic-14').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/wN5ekar.jpg",
      thumb:"https://i.imgur.com/wN5ekar.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    },
    {
      src:"https://i.imgur.com/DJ7F6yd.jpg",
      thumb:"https://i.imgur.com/DJ7F6yd.jpg",
      subHtml: `<div class="lightGallery-captions"></div>`
    }]
      });
  });
  //第十五組
  $('#dynamic-15').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/bZyKHSm.jpg",
      thumb:"https://i.imgur.com/bZyKHSm.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>2021迎春活動</p>
                </div>`
    },
    {
      src:"https://i.imgur.com/31Wp0py.jpg",
      thumb:"https://i.imgur.com/31Wp0py.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>2021迎春活動</p>
                </div>`
    },
    {
      src:"https://i.imgur.com/Lgdpaze.jpg",
      thumb:"https://i.imgur.com/Lgdpaze.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>2021迎春活動</p>
                </div>`
    },{
      src:"https://i.imgur.com/JAk1ekz.jpg",
      thumb:"https://i.imgur.com/JAk1ekz.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>2021迎春活動</p>
                </div>`
    },{
      src:"https://i.imgur.com/WrvPUXu.jpg",
      thumb:"https://i.imgur.com/WrvPUXu.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>臉書活動</p>
                </div>`
    },{
      src:"https://i.imgur.com/kaJqfEv.jpg",
      thumb:"https://i.imgur.com/kaJqfEv.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>臉書活動</p>
                </div>`
    },{
      src:"https://i.imgur.com/7oPcBWE.jpg",
      thumb:"https://i.imgur.com/7oPcBWE.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>臉書活動</p>
                </div>`
    },{
      src:"https://i.imgur.com/SriL1Tt.jpg",
      thumb:"https://i.imgur.com/SriL1Tt.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>臉書活動</p>
                </div>`
    },{
      src:"https://i.imgur.com/VjIt4Yr.jpg",
      thumb:"https://i.imgur.com/VjIt4Yr.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>臉書活動</p>
                </div>`
    },{
      src:"https://i.imgur.com/JNWUOTe.jpg",
      thumb:"https://i.imgur.com/JNWUOTe.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>臉書活動</p>
                </div>`
    }]
      });
  });
  
  //繪圖
  $('#dynamic-16').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/flWSjvy.jpg",
      thumb:"https://i.imgur.com/flWSjvy.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>學校繪圖</h4>
                  <p>對比的寂寞</p>
                </div>`
    }]
      });
  });
  $('#dynamic-17').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/pJEQHPF.jpg",
      thumb:"https://i.imgur.com/pJEQHPF.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>學校繪圖</h4>
                  <p>新年賀卡</p>
                </div>`
    }]
      });
  });
  $('#dynamic-18').on('click', function(e) {
      $(this).lightGallery({
          dynamic: true,
          dynamicEl: [{
      src:"https://i.imgur.com/72mdcBy.jpg",
      thumb:"https://i.imgur.com/72mdcBy.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>學校繪圖</h4>
                  <p>貼圖-眼球君的眼球人生</p>
                </div>`
    },
    {
      src:"https://i.imgur.com/5PtELso.jpg",
      thumb:"https://i.imgur.com/5PtELso.jpg",
      subHtml: `<div class="lightGallery-captions">
                  <h4>促銷活動組圖</h4>
                  <p>貼圖-眼球君的眼球人生</p>
                </div>`
    }]
      });
  });
  
  
});


//SimplePagination.js分頁系統
  // 每個頁面要顯示幾個項目
  var perPage = 1;
  // 總共有多少個項目
  var numItems = $(".list-item").length;

  $(".list-item").slice(perPage).hide();

  $('#pagination-container').pagination({
    
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function(pageNumber) {
      // 計算出 起始 以及結束
      var from = perPage * (pageNumber - 1);
      var to = from + perPage;
      $(".list-item").hide().slice(from, to).show();
      
    }
    
  })


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