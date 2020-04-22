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
    // .then(json => console.log(json)); }
    .then(json => addImages(json));
}
// how do i use forEach here??? 
function addImages(json) {
    const dogContainer = document.querySelector('#dog-image-container')
    // json.forEach('message' => {
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
            // console.log(data);
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

        // function updateBreedList(allBreeds) {
        //     const ul = document.querySelector("#dog-breeds");
        //     let breedDropdown = document.querySelector('#breed-dropdown');
        //     breedDropdown.addEventListener('change', function(e) {
        //         ul.remove();
        //         ulNew = document.createElement('ul')
        //         ulNew.id = "dog-breeds";
        //         body.appendChild(ulNew);
        //         let letter = e.target.value;
        //         allBreeds.filter(breed=> addBreed(breed.startsWith(letter)));
                
        //     })
        // }



// // {"message:{"breed":[subbreed, array]}
//     function addBreeds(json) {
//         const breedList = document.querySelector('#dog-breeds');
//         for (let i = 0; i < json.message.length; i++) {
//             // let li = document.createElement('li');
//             // let breed = json['message'][i];
//             // if (message[i].length > 0) {
//             //     for (let j=0; j < i.length; j++) {
//             //         let li = document.createElement('li');
//             //         li.innerHTML = `${i[j]} ${breed}`;
//             //         breedList.appendChild(li);
//             //     }; 
//             // } else {
//                 let li = document.createElement('li');
//                 li.innerText = json['message'][i];
//                 breedList.appendChild(li);
//             // }
//         }
//     }


      
// function addBreeds(json) {
//     const breedList = document.getElementById("dog-breeds");
//     const dropdown = document.getElementById("breed-dropdown");
//     Object.keys(json["message"]).forEach(breed => {
//         // if (breed[0] == dropdown.options[dropdown.selectedIndex].value) {
//             let li = document.createElement("li");
//             li.innerText = breed;
//             li.addEventListener('click', function() {
//                 li.style.color = "red";
//             });
//             breedList.appendChild(li);
//         // }
//     });
// }

// let selection = document.querySelector("#breed-dropdown");
// selection.addEventListener("select", ()=>{console.log(e)})