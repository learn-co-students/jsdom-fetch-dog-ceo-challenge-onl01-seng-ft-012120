console.log('%c HI', 'color: firebrick')


function fetchPics() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderPics(json));
  }

function fetchBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
  }
  
  function renderPics(json) {
    const div = document.getElementById("dog-image-container");
    json["message"].forEach(dog => {
        let p = document.createElement("p");
        p.innerHTML = `<img src = ${dog} />`;
        div.appendChild(p);
    });
}


    function renderBreeds(json) {
        const ul = document.getElementById("dog-breeds");
        ul.innerHTML = "";
        const dropdown = document.getElementById("breed-dropdown");
        Object.keys(json["message"]).forEach(breed => {
            if (breed[0] == dropdown.options[dropdown.selectedIndex].value) {
                let li = document.createElement("li");
                li.innerText = breed;
                li.addEventListener('click', function() {
                    li.style.color = "#0000FF";
                });
                ul.appendChild(li);
            }
        });
    }


  document.addEventListener('DOMContentLoaded', function() {
    fetchPics();
    fetchBreeds();
    document.getElementById("breed-dropdown").addEventListener("change", fetchBreeds);
  })