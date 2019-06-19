function girar(o,n){$("span h1").animate({transform:`+=${o}`},{step:function(o){$(this).css("transform",`rotate(${o}deg)`)},duration:n},"linear")}function getRandomColor(){let o="#";for(var n=0;n<6;n++)o+="0123456789ABCDEF"[Math.floor(16*Math.random())];return o}function setRandomColor(){$("body").css("background-color",getRandomColor())}function animation(){$("span h1").fadeIn(1e3),setInterval(()=>{setRandomColor(),girar(1800,1e3)},1500)}animation();








