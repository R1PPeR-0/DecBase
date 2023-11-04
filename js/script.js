/*FIRST_SLIDER*/
var slider = document.querySelector(".service_slider");
var slides = document.querySelectorAll(".service_slide");
var prevBtn = document.querySelector(".btn_prev");
var nextBtn = document.querySelector(".btn_next");

var currentIndex = 0; // Индекс текущего слайда 

// Функция для переключения слайдов
function showSlides(index) {
    for (var i = 0; i < slides.length; i++) {
        if (i >= index && i < index + 3) {
            slides[i].style.display = "flex";
        } else {
            slides[i].style.display = "none";
        }
    }
}

// Обработчик нажатия на кнопку "Предыдущий слайд"
prevBtn.addEventListener("click", function () {
    currentIndex--;

    // Если индекс становится отрицательным, переключаемся на последний слайд 
    if (currentIndex < 0) {
        currentIndex = slides.length - 3;
    }

    showSlides(currentIndex);
});

// Обработчик нажатия на кнопку "Следующий слайд"
nextBtn.addEventListener("click", function () {
    currentIndex++;

    // Если индекс превышает количество слайдов, переключаемся на первый слайд 
    if (currentIndex >= slides.length - 2) {
        currentIndex = 0;
    }

    showSlides(currentIndex);
});

// Показываем слайды при загрузке страницы
showSlides(currentIndex);





/*SECOND_SLIDER*/
var slider_2 = document.querySelector(".reviews_slider");
var slides_2 = document.querySelectorAll(".reviews_slide");
var prevBtn_2 = document.querySelector(".btn_prev_2");
var nextBtn_2 = document.querySelector(".btn_next_2");

var currentIndex = 0; // Индекс текущего слайда 

// Функция для переключения слайдов
function showSlides2(index) {
    for (var i = 0; i < slides_2.length; i++) {
        if (i >= index && i < index + 2) {
            slides_2[i].style.display = "flex";
        } else {
            slides_2[i].style.display = "none";
        }
    }
}

// Обработчик нажатия на кнопку "Предыдущий слайд"
prevBtn_2.addEventListener("click", function () {
    currentIndex--;

    // Если индекс становится отрицательным, переключаемся на последний слайд 
    if (currentIndex < 0) {
        currentIndex = slides_2.length - 2;
    }

    showSlides2(currentIndex);
});

// Обработчик нажатия на кнопку "Следующий слайд"
nextBtn_2.addEventListener("click", function () {
    currentIndex++;

    // Если индекс превышает количество слайдов, переключаемся на первый слайд 
    if (currentIndex >= slides_2.length - 1) {
        currentIndex = 0;
    }

    showSlides2(currentIndex);
});

// Показываем слайды при загрузке страницы
showSlides2(currentIndex);


/*ANCHOR*/
$('a[href^="#"]').click(function(){
    let anchor = $(this).attr('href');
    $('html, body').animate({
    scrollTop: $(anchor).offset().top
    }, 1300);
});



/*TOP_BUTTON*/
const btnUp = {
el: document.querySelector('.btn-up'),
show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
},
hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
},
addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
    // определяем величину прокрутки
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
    scrollY > 2000 ? this.show() : this.hide();
    });
}
}

btnUp.addEventListener();

