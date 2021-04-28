let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function fetchToys() {
  return fetch('http://localhost:3000/toys')
	.then(res => res.json())
	.then(json => renderToys(json[0]))
}

function renderToys(toy) {
  const main = document.getElementById("toy-collection")
  const div = document.createElement('div')
  div.classList.add("card")
  main.appendChild(div)

  const h2 = document.createElement('h2')
  h2.innerHTML = toy.name
  div.appendChild(h2)

  const img = document.createElement('img')
  img.src = toy.image
  img.classList.add("toy-avatar")
  div.appendChild(img)

  const p = document.createElement('p')
  p.innerHTML = `${toy.likes} Likes`
  div.appendChild(p)

  const button  = document.createElement('button')
  button.classList.add("like-btn")
  button.innerHTML = "Like"
  div.appendChild(button)

}



// {id: 1, name: "Woody", image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png", likes: 33}
// id: 1
// image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"
// likes: 33
// name: "Woody"