// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message")
const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach(heart => heart.addEventListener("click", ()=> {
  mimicServerCall()
  .then(()=>{
    heart.textContent = heart.textContent === EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
    heart.classList.toggle("activated-heart");
  } )
  .catch(error => {
    modal.textContent = error;
    modal.classList.remove("hidden");
    setTimeout(()=> modal.classList.add("hidden"), 3000)
  })

}))


   

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
