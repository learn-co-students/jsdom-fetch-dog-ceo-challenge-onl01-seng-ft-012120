console.log('%c HI', 'color: firebrick')

let breeds = null;

function fetchDogsImg() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => renderDogsImg(json.message))
}

function fetchDogsBreed() {
  return fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => {
    breeds = (Object.keys(json.message));
    renderDogsBreed(Object.keys(json.message))
    return json;
  })
}

function renderDogsImg(dogs) {
  const dogImgElem = document.getElementById('dog-image-container')
  dogs.forEach(dog => {
    const img = document.createElement('img')
    img.src = dog
    dogImgElem.appendChild(img)
  })
}

function renderDogsBreed(dogs) {
  const dogBreedElem = document.getElementById("dog-breeds")
  dogBreedElem.innerHTML = ""
  dogs.forEach(dog => {
    const name = document.createElement('li')
    name.innerText = dog
    name.addEventListener('click', () => {
      name.style.color = "green"
    })
    dogBreedElem.appendChild(name)
  })
}

function selectBreedByLetter(event) {
  const letter = event.target.value;
  const dogBreedElem = document.getElementById("dog-breeds")
  let x = breeds.filter(breed => {
    return breed.startsWith(letter)
  })
  
  renderDogsBreed(x)
}

document.addEventListener('DOMContentLoaded', function() {
  const selectBreedElem = document.getElementById("breed-dropdown")
  fetchDogsImg()
  fetchDogsBreed()
  selectBreedElem.addEventListener('change', selectBreedByLetter)
})



