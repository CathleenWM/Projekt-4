//Expanding Search Box
const searchBtn = document.getElementById('search-btn'); /*From the icon*/
const search = document.getElementById('search'); //From input

searchBtn.addEventListener('click', () => { //Expanding
    search.style.width = '70%';
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

search.onfocus = (e) => {
    searchBtn.click()
}

    //User pressing any key
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //User entered data
    let emptyArray = [];

    if(userData){
        emptyArray = suggestions.filter((data) => {
            //Filtering array value and user char
            //Return only what starts vwith entered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        searchBox.classList.add("active"); //Show autocomplet box
        showSuggestions(emptyArray);
        
        let allList =suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //Adding oneclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }
    else{   
        searchBox.classList.remove("active"); //Hide autocomplet box
    }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //Passing the user selected list in text field
    searchBox.classList.remove("active"); //Hide autocomplet box
}

function showSuggestions(list){
    let listData;

    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>;'
    }
    else{
        listData = list.join('');
    }

    suggBox.innerHTML = listData;
}
