const popupEvent = document.getElementById('event-photo-workshop')
const popupPhotoWorkshop = document.getElementById('popup-photo-workshop')

const popupPhotoCloseBtn = document.getElementById('photo-close-btn')
const overlay = document.getElementById('overlay')

popupEvent.addEventListener('click', () => {
    popupPhotoWorkshop.style.display = "block";
    overlay.style.display = "block";
})

popupPhotoCloseBtn.addEventListener('click', () => {
    popupPhotoWorkshop.style.display = "none";
    overlay.style.display = "none";
    popupContent.style.display = "grid";
    deltagBtn.style.display = "flex";
    confirmation.style.display = "none";
})

overlay.addEventListener('click', () => {
    popupPhotoWorkshop.style.display = "none";
    overlay.style.display = "none";
    popupContent.style.display = "grid";
    deltagBtn.style.display = "flex";
    confirmation.style.display = "none";
})

const confirmation = document.getElementById('popup-confirmation')
const deltagBtn = document.getElementById('deltag-btn')
const popupContent = document.getElementById('popup-grid')

deltagBtn.addEventListener('click', () => {
    popupContent.style.display = "none";
    deltagBtn.style.display = "none";
    confirmation.style.display = "block";
    if (new Date().getHours() < 18) {
        document.getElementById("confirmation-text").innerHTML = "Sådan du er nu tilmeldt, forsat god dag!";
      };
})

const goBack = document.getElementById('go-back-btn')

goBack.addEventListener('click', () => {
    popupPhotoWorkshop.style.display = "none";
    overlay.style.display = "none";
    popupContent.style.display = "grid";
    deltagBtn.style.display = "flex";
    confirmation.style.display = "none";
})