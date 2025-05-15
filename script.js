$('#catalog').on('mouseenter', function() {
    anime({
        targets: '#catalog',  // Обрати внимание на правильный селектор
        filter: ['invert(0)', 'invert(1)'],
        duration: 200,
        loop: false,
        easing: 'easeInOutSine',
    });
});

$('#catalog').on('mouseleave', function() {
    anime({
        targets: '#catalog',  // Обрати внимание на правильный селектор
        filter: ['invert(1)', 'invert(0)'],
        duration: 200,
        loop: false,
        easing: 'easeInOutSine',
    });
});
const title = document.querySelector('#name')
const price = document.querySelector("#price");
$('#catalog').on('click', function(){
    window.location.href = 'catalog.html';
});
$('#balencers').on('click', function(){
    window.location.href = 'index.html';
});
$('#user').on('click', function(){
    window.location.href = 'form.html';
});

let item = 0

$('#1').on('click', function(){
    window.location.href = 'item.html?id=1';
});
$('#2').on('click', function(){
    window.location.href = 'item.html?id=2';
});
$('#3').on('click', function(){
    window.location.href = 'item.html?id=3';
});
$('#4').on('click', function(){
    window.location.href = 'item.html?id=4';
});

let condition = true;
function forwards() {
    anime({
        targets: '.burger',
        translateX: ['-100%', '0'],
        backgroundColor: ['white', 'black'],
        color: 'white',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false
}
function backwards() {
    anime({
        targets: '.burger',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
}

$('#love').click(function () {
    if (condition) {
        forwards();
    } else {
        backwards();
    }
});











let show = 0;
    $('.menu_small_icon').on('click', function () {
        if(show == 0) {
            forward();
        } else {
            backward();

        }
    });
let start = 0;
let end = 0;
function forward() {
    anime ( {
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    show = 1;
    }
function backward() {
    anime ( {
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    show = 0;
    }
    
$('.container').on('touchstart', function(event){
        start = event.originalEvent.touches[0].pageX;

});
$('.container').on('touchend', function(event){
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && show == 0) {
        forward();
    }
    else if ( start - end >= 100 && show == 1) {
            backward();
    }

});
let plus1 = document.querySelector('#plus1')
let com = true;

function bigger (){
    anime({
        targets: "#plus1",
        height: '200px', // на сколько увеличить
        duration: 500, // длительность анимации
        easing: 'easeInOutQuad'
    });
    com = false;

}
function smaller (){
    anime({
        targets: "#plus1",
        height: '50px', // на сколько увеличить
        duration: 500, // длительность анимации
        easing: 'easeInOutQuad'
    });
    com = true;

}
$('#plus1').click(function () {
    if (com) {
        bigger();
    } else {
        smaller();
    }
});

let com2 = true;

function bigger2 (){
    anime({
        targets: "#plus2",
        height: '200px', // на сколько увеличить
        duration: 500, // длительность анимации
        easing: 'easeInOutQuad'
    });
    com2 = false;

}
function smaller2 (){
    anime({
        targets: "#plus2",
        height: '50px', // на сколько увеличить
        duration: 500, // длительность анимации
        easing: 'easeInOutQuad'
    });
    com2 = true;

}
$('#plus2').click(function () {
    if (com2) {
        bigger2();
    } else {
        smaller2();
    }
});