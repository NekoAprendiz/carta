const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section"),
      btnLeft2 = document.querySelector(".btn-left2"),
      btnRight2 = document.querySelector(".btn-right2"),
      slider2 = document.querySelector("#slider2"),
      sliderSection2 = document.querySelectorAll(".slider-section2");

btnLeft.addEventListener("click", () => moveToLeft(slider, sliderSection, 'left'));
btnRight.addEventListener("click", () => moveToRight(slider, sliderSection, 'right'));
btnLeft2.addEventListener("click", () => moveToLeft(slider2, sliderSection2, 'left2'));
btnRight2.addEventListener("click", () => moveToRight(slider2, sliderSection2, 'right2'));

setInterval(() => {
    moveToRight(slider, sliderSection, 'right');
    moveToRight(slider2, sliderSection2, 'right2');
}, 3000);

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length,
    operacion2 = 0,
    counter2 = 0,
    widthImg2 = 100 / sliderSection2.length;

function moveToRight(slider, sliderSection, type) {
    if (type === 'right') {
        if (counter >= sliderSection.length - 1) {
            counter = 0;
            operacion = 0;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none";
            return;
        }
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    } else if (type === 'right2') {
        if (counter2 >= sliderSection2.length - 1) {
            counter2 = 0;
            operacion2 = 0;
            slider2.style.transform = `translate(-${operacion2}%)`;
            slider2.style.transition = "none";
            return;
        }
        counter2++;
        operacion2 = operacion2 + widthImg2;
        slider2.style.transform = `translate(-${operacion2}%)`;
        slider2.style.transition = "all ease .6s";
    }
}

function moveToLeft(slider, sliderSection, type) {
    if (type === 'left') {
        counter--;
        if (counter < 0) {
            counter = sliderSection.length - 1;
            operacion = widthImg * (sliderSection.length - 1);
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none";
            return;
        }
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    } else if (type === 'left2') {
        counter2--;
        if (counter2 < 0) {
            counter2 = sliderSection2.length - 1;
            operacion2 = widthImg2 * (sliderSection2.length - 1);
            slider2.style.transform = `translate(-${operacion2}%)`;
            slider2.style.transition = "none";
            return;
        }
        operacion2 = operacion2 - widthImg2;
        slider2.style.transform = `translate(-${operacion2}%)`;
        slider2.style.transition = "all ease .6s";
    }
}
