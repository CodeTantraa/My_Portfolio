//  Setup and start animation! 

    var typed = new Typed('#element', {
      strings: ['', 'Website Developer..'],
      typeSpeed: 50,
    });

// ---------------- ONCLICK LINKS ------------- //

var titles = document.getElementsByClassName("sub-title");
var details = document.getElementsByClassName("sub-details");

function opentab(tabname) {
  for(title of titles){
    title.classList.remove("active-link");
  }
  for(detail of details){
    detail.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// --------------- SIDEMENU --------------- //

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// -------------- CONTACT SPREADSHEET ------------ //

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw9r2nKuP5P3n70clarZCQOuHvEHMVXZMRG3vzJnRO_4Gz3OqOL1r7O-8mVsVUMCDPrNg/exec'
  const form = document.forms['submit-to-google-sheet']
  const reply = document.getElementById("reply")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        reply.innerHTML = 'Message sent successfully, Thank you.'
        setTimeout (function(){
            reply.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })