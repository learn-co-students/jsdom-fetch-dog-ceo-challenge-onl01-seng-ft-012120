console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() { 
    let dogImageContainer = document.querySelector("#dog-image-container");
    const dogBreeds = document.querySelector("#dog-breeds")

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const breedDropDown = document.querySelector("#breed-dropdown")

    fetch(imgUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            json["message"].forEach(element => {
                let dogImg = document.createElement("IMG");
                    dogImg.src = element;
                    dogImageContainer.appendChild(dogImg);
            });
        })
    fetch(breedUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            for(const property in json.message ) {
                let dogBreed = document.createElement("LI");
                    dogBreed.innerText = property;
                    dogBreeds.appendChild(dogBreed);
                    dogBreed.addEventListener("click", function() {
                        dogBreed.style.color = "blue"
                    })
            }
        })
    breedDropDown.addEventListener("click", function() {
        for (element of dogBreeds.children) {
            if (element.textContent[0] == breedDropDown.value ) {
                element.style.display = ""
            } else {
                element.style.display = "none"
            }
        }
    })

})

  