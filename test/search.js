//Expanding Search Box
const searchBtn = document.getElementById('search-btn'); /*From the icon*/
const search = document.getElementById('search'); //From input

searchBtn.addEventListener('click', () => { //Expanding
    search.style.width = '80%';
    search.style.paddingLeft = '60px';
    search.style.cursor = 'text';
    search.focus();

    typewriter();
})

//Effect on placment text
var i = 0;
var message = 'Semesterfest';
var speed = 100; //The higher the slower 

function typewriter(){
    if(i < message.length){
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg);
        i++;
        setTimeout(typewriter, speed);
    }
}

//Auto-complete Search
const searchBox = document.querySelector('.search-contain');
const inputBox = searchBox.querySelector('input');
const suggBox = searchBox.querySelector('.autocom-box');