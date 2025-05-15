$('#balencers').on('click', function(){
    window.location.href = 'index.html';
});
$('#user').on('click', function(){
    window.location.href = 'form.html';
});
$('#catalog_back_btn').on('click', function(){
    window.location.href = 'catalog.html';
});


const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const items = {
    "1": {
        name: '"BALENCERS" t-shirt',
        price: '2000 p',
        image: 'items/tshirt.png',
        image2: 'items/tshirtback.png'
    },
    "2": {
        name: '"BALENCERS logo" t-shirt',
        price: '2000 p',
        image: 'items/tshirtlogo.png',
        image2: 'items/logoback.png'
    },
    "3": {
        name: '"BALENCERS" hoodie',
        price: '5000 p',
        image: 'items/hoodie.png',
        image2: 'items/hoodieback.png'
    },
    "4": {
        name: '"BALENCERS" pants',
        price: '3500 p',
        image: 'items/pants.png',
        image2: "items/pantsback.avif"
    }
};

// Если товар существует, обновляем HTML
if (items[id]) {
    document.getElementById('name').innerHTML = `<h1>${items[id].name}</h1>`;
    document.getElementById('price').innerHTML = `<p>${items[id].price}</p>`;
    document.querySelector('#img').src = items[id].image;
    document.querySelector('#img2').src = items[id].image2;
    document.querySelector('#img_mini').src = items[id].image;
    document.querySelector('#img2_mini').src = items[id].image2;
    document.getElementById('name_card').innerHTML = `<h1>${items[id].name}</h1>`;
    document.getElementById('price_card').innerHTML = `<h1>${items[id].price}</h1>`;
    document.querySelector('#img_card').src = items[id].image;
}

let condition = true;

function forwards() {
    anime({
        targets: '.form',
        translateY: ['-100%', '0'],
        backgroundColor: ['white', 'black'],
        color: 'white',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false;
}
function backwards() {
    anime({
        targets: '.form',
        translateY: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
}
let btn = document.querySelector('#btn');
let select = document.querySelector('#size');
$('#btn').click(function () {
    if (condition) {
        forwards();
        btn.style.scale = 30;
        btn.style.opacity = 0;

    } else {
        backwards();
        btn.style.opacity = 1;
        btn.style.scale = 1;
    }
    
});


const sizeSelect = document.getElementById('size');

sizeSelect.addEventListener('change', () => {
    const selectedSize = sizeSelect.value;
    console.log("Выбран размер:", selectedSize);
});

$('#btn').on('click', () => {
    const selectedSize = sizeSelect.value;
    console.log("Покупка размера:", selectedSize);
    document.getElementById('size_card').innerHTML = `<h1>РАЗМЕР:${selectedSize}</h1>`;
});
let form = document.querySelector(".form");
$('#buybtn').click(function(){
    if ($('#fio').val().trim() === '' && $('#number').val().trim() === ''&& $('#adress').val().trim() === '') {
        $('#re').html('<p style="font-size: 15px;">Пожалуйста, заполните все поля</p>');
    } else{
        $('#re').innerHTML = '<p style="font-size: 15px;"></p>'
        form.innerHTML = "<h1 style='align-self:center;'>Спасибо за покупку!</h1>";
        form.style.justifyContent = "center";
        form.style.alignItems = "center";
        form.innerHTML += "<p style='font-size: 15px'>Вернутся в</p><div class='button' id='final'><h1 style='color: white;'>CATALOG</h1></div>";
    }
    


    

});
$(document).on('click', '#final', function(){
    window.location.href = 'catalog.html';
});





$(document).ready(function () {
    $('.container1').bxSlider({
        pagerCustom: '.container1-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
    });
});