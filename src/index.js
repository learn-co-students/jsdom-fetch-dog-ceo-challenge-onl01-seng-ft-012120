console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function getImages() {
    return fetch(imgUrl).then(resp => resp.json()).then(json => images(json));
};

function images(json) {
    let div = document.getElementById("dog-image-container");
    json.message.forEach(image => {
        let imageElem = document.createElement('img');
        imageElem.src = image;
        div.appendChild(imageElem);
    })};

function getBreeds() {
    return fetch(breedUrl).then(resp => resp.json()).then(json => breeds(json));
}

 function breeds(json) {
     allBreeds = Object.keys(json.message);
    breedList(allBreeds);
 }

function breedList(json) {
     dogBreeds = document.getElementById("dog-breeds");
    json.forEach(breed => {
        let elem = document.createElement('li');
        elem.innerText = breed;
        elem.addEventListener('click', changeColor);
        dogBreeds.appendChild(elem);
    })};

function changeColor(e) {
    e.target.style.color = "green";
}

function filter() {
    let breedDropdown = document.getElementById('breed-dropdown')
    breedDropdown.addEventListener('change', filterBreed);
}

 function filterBreed(e) {
    while(dogBreeds.firstChild) dogBreeds.removeChild(dogBreeds.firstChild);
     let letter = e.target.value;

     let filtered = allBreeds.filter((breed) => breed.startsWith(letter));

    breedList(filtered);
 }

document.addEventListener('DOMContentLoaded', function () {
    getImages();
    getBreeds();
    filter();
  })