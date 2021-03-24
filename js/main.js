document.addEventListener("DOMContentLoaded", function () {
   const sliderBody = document.getElementById("slider__body");
   const childNum = sliderBody.children.length;
   sliderBody.style.width = `${childNum * 100}%`;
   const arrowLeft = document.getElementById("arr_left");
   const arrowRight = document.getElementById("arr_right");
   let curSlide = 0;
   arrowLeft.addEventListener("click", function (){
       if (curSlide + 1 <= 0) {
           sliderBody.style.marginLeft = `${(curSlide + 1) * -100}%`;
           curSlide++;
       }else {
           sliderBody.style.marginLeft = '0%';
       }
   });
   arrowRight.addEventListener("click", function () {
       if (curSlide - 1 > childNum) {
           sliderBody.style.marginLeft = `${(curSlide - 1) * 100}%`;
           curSlide--;
       }else {
           sliderBody.style.marginLeft = `${-(childNum - 1) * 100}%`;
       }
   });

   const header = document.querySelector("header");
   window.addEventListener("scroll",function () {
       const scrollTop = window.scrollY || window.pageYOffset;
       if (scrollTop > 3) {
           header.classList.add("active");
       }else {
           header.classList.remove("active");
       }
   });


   let startX = -1;
   let isDrag = false;
   const phoneSliderControl = document.getElementById("carousel__control");
   const phone = document.getElementsByClassName("phone")[0];
   const rightPart = document.getElementById("right");
   phoneSliderControl.addEventListener("mousedown", function (e) {
       e = e || window.event;
       e.preventDefault();
       startX = e.clientX - phone.getBoundingClientRect().x;
       isDrag = true;
   });
   phoneSliderControl.addEventListener("touchstart", function (e) {
       e = e || window.event;
       e.preventDefault();
       startX = (e.clientX || e.changedTouches[0].clientX) - phone.getBoundingClientRect().x;
       isDrag = true;
   });
    document.addEventListener("touchmove", function (e) {
        e = e || window.event;
        if (isDrag) {
            const p = startX - (e.clientX || e.changedTouches[0].clientX) + phone.getBoundingClientRect().x;
            const toMove = (startX - p);
            phoneSliderControl.style.left = toMove + "px";
            rightPart.style.width = toMove + "px";
            console.log(toMove, phone.getBoundingClientRect().width);
            if (toMove > phone.getBoundingClientRect().width - 10 || toMove <= 10) {
                isDrag = false;
            }
        }
    });
    document.addEventListener("mousemove", function (e) {
        e = e || window.event;
        if (isDrag) {
            const p = startX - e.clientX + phone.getBoundingClientRect().x;
            const toMove = (startX - p);
            phoneSliderControl.style.left = toMove + "px";
            rightPart.style.width = toMove + "px";
            if (toMove > phone.getBoundingClientRect().width - 10 || toMove <= 10) {
                isDrag = false;
            }
        }
    });
    document.addEventListener("touchend", function (e) {
        e = e || window.event;
        startX = -1;
        isDrag = false;
    });
    document.addEventListener("mouseup", function (e) {
        e = e || window.event;
        startX = -1;
        isDrag = false;
    })
});
