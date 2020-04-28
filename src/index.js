console.log('%c HI', 'color: firebrick')
let allBreeds = [];
document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();

    const ul = document.querySelector("#dog-breeds");
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function(e) {
        ul.remove();
        ulNew = document.createElement('ul')
        ulNew.id = "dog-breeds";
        document.querySelector('body').appendChild(ulNew);
        let letter = e.target.value;
        console.log(allBreeds);
        newBreeds = allBreeds.filter(breed => breed.startsWith(letter));
        newBreeds.forEach(breed => addBreed(breed));
    })
    
});

function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    
    .then(json => addImages(json));
}

function addImages(json) {
    const dogContainer = document.querySelector('#dog-image-container')
    for (let i = 0; i < json.message.length; i++) {
        let img = document.createElement('img');
        img.src = json['message'][i];
        dogContainer.appendChild(img); 
    }
    }

    function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            Object.keys(data.message).forEach(breed => {
                
                allBreeds.push(breed);
                addBreed(breed)
            });
        });
    }
        function addBreed(breed) {
            const ul = document.querySelector("#dog-breeds");
            let li = document.createElement('li');
            li.innerHTML = breed;
            ul.appendChild(li);
            li.addEventListener("click", changeColor);
        }



        function changeColor(element) {
            element.target.style.color = "red";
        }