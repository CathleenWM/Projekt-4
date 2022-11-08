
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu div');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(options => {
        options.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(options => {
                options.classList.remove('active');
            });
            options.classList.add('active');
        });
    });
});


// filterObjects("all")

// function filterObjects(c){
//     var x, i;
//     x = document.getElementsByClassName("events");
//     if (c == "all") c = "";
//     for (i = 0; i < x.length; i++) {
//         removeClass(x[i], "show");
//         if(x[i].classname.indexOf(c) > -1) addClass(x[i], "show")
//     }
// }

// function addClass(element, name){
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++){
//         if (arr1.indexOf(arr2[i]) == -1){
//             element.className += " " + arr2[1];
//         }
//     }
// }

// function removeClass(element, name){
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++){
//         while (arr1.indexOf(arr2[i]) > -1){
//             arr1.splice(arr1.indexOf(arr2[i]), 1)
//         }
//     }
//     element.className = arr1.join(" ");
// }


let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}