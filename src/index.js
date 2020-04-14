console.log('%c HI', 'color: firebrick')

// challenge #1
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

// chlannege #2
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

// challenge #4
let selection = document.querySelector("#breed-dropdown");
selection.addEventListener("select", ()=>{console.log(e)})
