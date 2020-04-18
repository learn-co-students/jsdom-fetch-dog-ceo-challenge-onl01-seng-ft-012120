console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImages(){
    fetch(imgUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            json['message'].forEach((image) => {
                addImage(image);
            })
        });
};

function addImage(src){
    const imageContainer = document.getElementById('dog-image-container');
    const element = document.createElement('img');
    element.setAttribute('src', src);
    imageContainer.appendChild(element);
}

function fetchBreeds(){
    fetch(breedUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            document.querySelectorAll('.breed-list-item').forEach((element) => {
                element.remove();
            })
            Object.keys(json['message']).forEach((breed) => {
                addBreed(breed);
            });
        });
}

function addBreed(breed){
    const breedList = document.getElementById('dog-breeds');
    let element = document.createElement('li');
    element.innerText = breed;
    element.setAttribute('class', 'breed-list-item');
    const listElements = document.querySelectorAll('li');
    element.addEventListener('click', function(){
        element.style.color = 'red';
     });
    breedList.appendChild(element);
}

function filterBreeds(){
    let filter = document.getElementById('breed-dropdown');
    let remove 
    for(i=0; i < filter.options.length; i++){
        if (filter.options[i].selected){
            document.querySelectorAll('.breed-list-item').forEach((listItem) => {
                if (listItem.innerText[0] != filter.options[i].value){
                    listItem.remove()
                }
            });
        } 
    }
}

document.addEventListener("DOMContentLoaded", function(){
    fetchImages();
    fetchBreeds();
    let filter = document.getElementById('breed-dropdown');
    filter.addEventListener('change', filterBreeds);
})
