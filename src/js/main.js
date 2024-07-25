import sum from './module/sum.js';
console.log(sum(2, 10));
console.log(sum(12, 5));

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

const registr = document.getElementById('registration');
const login = document.getElementById('login')
const registrContent = document.getElementById('registrForm')
const loginContent = document.getElementById('loginForm')

function example () {
  if(login.addEventListener('click', function () => {
    loginContent.style.display = "block";
  }))
}


//import { ScrollSmoother } from "gsap/ScrollSmoother";

/*gsap.registerPlugin( ScrollTrigger, ScrollSmoother )

ScrollSmoother.create ({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
})*/

/*document.addEventListener('DOMContentLoaded', (event) => {
    const gameSale = document.getElementById('gameSale');
    const gameInBasket = document.getElementById('gameInBasket');

    gameSale.addEventListener('mouseover', () => {
        gameInBasket.classList.remove('hidden');
    });

    gameSale.addEventListener('mouseout', () => {
        gameInBasket.classList.add('hidden');
    });
});*/


/*function myFunction() {
    const gameSale = document.getElementById('gameSale');
    const gameInBasket = document.getElementById('gameInBasket');

    if(gameSale === "block") {
        myBlock.style.display = "none";
    }
    else {
        myBlock.style.display = "block";
    }
}


const gameSale = document.getElementById('gameSale');
const gameInBasket = document.getElementById('gameInBasket');

/*gameSale.addEventListener('mouseout', function() {
  gameInBasket.style.display = block;
})*/

// Убеждаемся, что элементы существуют перед добавлением обработчика событий
/*if (gameSale && gameInBasket) {
  gameSale.addEventListener('mouseout', function() {
    // Устанавливаем display: 'block'
    gameInBasket.style.display = 'block';
  });
} else {
  console.error('Элемент(ы) не найдены');
}*/

