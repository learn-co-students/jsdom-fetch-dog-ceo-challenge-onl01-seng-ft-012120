console.log('%c HI', 'color: firebrick')
let breeds = [];
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function fetchImage(){
    return fetch(imgUrl)
    .then(function(response){ return response.json()})
    .then(function(json){json.message.forEach(image => renderImages(image))})
}

function renderImages(picUrl){
    let imageLocation = document.getElementById("dog-image-container")
    const im = document.createElement('img')
    im.src = picUrl
    imageLocation.appendChild(im)
}

function fetchBreed(){
    return fetch(breedUrl)
    .then(function(response){return response.json()})
    .then(results => {
        breeds = Object.keys(results.message);
        addToBreedList(breeds);
        filterBreed();
    })
}

function addToBreedList(breeds){
    let breedLocation = document.getElementById("dog-breeds")
    let oldBreed = breedLocation.lastElementChild
    while (oldBreed){
        breedLocation.removeChild(oldBreed)
        oldBreed = breedLocation.lastElementChild;
    }
    breeds.forEach(breed => addBreed(breed))
}

function addBreed(breed){
    let breedLocation = document.getElementById("dog-breeds")
    const li = document.createElement('li')
    li.innerText = breed
    breedLocation.appendChild(li)
    li.addEventListener('click', function(e){
        li.style.color = 'Blue'
    })
}

function filterBreed(){
    let filterSelect = document.getElementById("breed-dropdown")
    filterSelect.addEventListener('change', function(e){
        breedStarting(e.target.value)
    })
    
}

function breedStarting(letter){
    addToBreedList(breeds.filter(breed => breed.startsWith(letter)))
}
document.addEventListener('DOMContentLoaded', function(e){
    fetchImage();
    fetchBreed();
});