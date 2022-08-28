console.log("%c HI", "color: firebrick");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const optionSel = document.querySelector("breed-dropdown");
console.log(optionSel)
document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
      addImage(data.message);
    });

  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      fetchDogs(data.message);
    });
});

function addImage(images) {
  for (let i = 0; i < images.length; i++) {
    const element = images[i];
    let src = element;
    let image = document.createElement("img");
    image.src = src;
    let imageContainer = document.getElementById("dog-image-container");
    imageContainer.appendChild(image);
  }
}

function fetchDogs(dogsBreed) {
  let breeds = Object.keys(dogsBreed);
  for (let i = 0; i < breeds.length; i++) {
    // console.log(breeds[i])
    let ul = document.querySelector("ul#dog-breeds");
    let li = document.createElement("li");
    li.append(`${breeds[i]}`);
    ul.appendChild(li);
    li.addEventListener("click", () => {
      li.style.color = "green";
    });
  }
}


optionSelected.addEventListener("change",(e)=>{
    console.log(e)
})