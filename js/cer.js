document.addEventListener("DOMContentLoaded", function () {
    const slider2 = document.getElementById("carousel__2__body");
    const child2Num = slider2.children.length;
    let w = slider2.children[0].getBoundingClientRect().width - 10;
    for (let i = 0; i < child2Num; i++) {
        slider2.children[i].style.width = `${w}px`;
    }
    slider2.style.width = `${child2Num * slider2.children[0].getBoundingClientRect().width}px`;
    const arrow2Left = document.getElementById("arr_2_left");
    const arrow2Right = document.getElementById("arr_2_right");
    let cur2Slide = 0;
    arrow2Left.addEventListener("click", function (){
        if (cur2Slide + 1 <= 0) {
            slider2.style.marginLeft = `${(cur2Slide + 1) * w}px`;
            cur2Slide++;
        }else {
            slider2.style.marginLeft = '0%';
        }
    });
    arrow2Right.addEventListener("click", function () {
        console.log(-(cur2Slide - 1), child2Num);
        if (-(cur2Slide - 1) < child2Num) {
            slider2.style.marginLeft = `${(cur2Slide - 1) * w}px`;
            cur2Slide--;
        }else {
            slider2.style.marginLeft = `${-(child2Num - 1) * w}px`;
        }
    });
});
