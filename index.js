/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector('#header')
header.addEventListener("click", function(){
  toggleColor(header)
});


/***** Deliverable 2 *****/

// 1. I need to get the form
// 2. I need to create the listener for the form and attach a callback function that reacts to the listener

const form = document.querySelector("#new-player-form")
form.addEventListener("submit", formSubmit)

// 3. create the callback function being referenced

function formSubmit(event) {
  event.preventDefault()

        // creating a 'form' variable to access the form input
  const form = event.target

        // creating a variable for the new player so I can add the info into the DOM
  const newPlayer = {
    number: form["number"].value,
    name: form["name"].value,
    nickname: form["nickname"].value,
    photo: form["photo"].value,
    likes: 1000
  }

  // now I need to create the player with the the 'newPlayer' variable
  renderPlayer(newPlayer)
}



/***** Deliverable 3 *****/

// use the 'playerContainer' variable created at the 'starter-code' section of this file. 
//    - then create a listener for the 'like click'
//        - can use the '.matches' method to look for the 'click' on the 'like' button 
//            - from the console, I can see that the button is labeled as a class "like-button" 
//                - I can use dot notation to access it

playerContainer.addEventListener("click", function(e){
  if (e.target.matches(".like-button")) {
    const player = e.target.closest(".player") // find the first parent element of the player who's like button was clicked
    
    const likeAmount = player.querySelector(".likes")  // find the element that I want to update

    likeAmount.textContent = `${parseInt(likeAmount.textContent) + 1} likes`    // update the element's 'textContent' 
  }
})