console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", fetch(imgUrl)
.then((response)=> response.json())
.then((json)=> {
    for(let i = 0; i < json.message.length;i++) {
        let pic = document.createElement("img");
        pic.setAttribute("src", json.message[i]);
        document.querySelector("#dog-image-container").appendChild(pic);
    }
}));

const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener("DOMContentLoaded", fetch(breedUrl)
.then((response)=> response.json())
.then((json)=> { 
    for (const dog in json.message) {
        console.log(dog)
        let breed = document.createElement("li");
        breed.innerText = dog;
        breed.addEventListener("click", ()=>breed.style.color = "red")
        document.querySelector("#dog-breeds").appendChild(breed);
    }
}));
const dogBreeds = document.querySelector("#dog-breeds")
 let breedDropDown = document.querySelector("#breed-dropdown")
//   document.addEventListener("DOMContentLoaded", function() {
      
//      //let breedDropDown = document.querySelector("#breed-dropdown")
//       breedDropDown.addEventListener("click", function() {
//         for (element of dogBreeds.children) {
//             if (element.textContent[0] == breedDropDown.value ) {
//                 element.style.display = ""
//             } else {
//                 element.style.display = "none"
//             }
//         }
//     })
    
//   });

let alpha = document.querySelector("#breed-dropdown");
alpha.addEventListener("select", ()=>{console.log(e)})