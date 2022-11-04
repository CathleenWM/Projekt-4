const popupEvent = document.getElementById('event-photo-workshop')
const popupPhotoWorkshop = document.getElementById('popup-photo-workshop')
const popupPhotoCloseBtn = document.getElementById('photo-close-btn')
const overlay = document.getElementById('overlay ')

popupEvent.addEventListener('click', () => {
    popupPhotoWorkshop.style.display = "block";
})

popupPhotoCloseBtn.addEventListener('click', () => {
    popupPhotoWorkshop.style.display = "none"
})