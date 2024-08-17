// sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};
// end sticky navbar

// nav sideshow
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
};
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
};
// end nav sideshow


// Image, Audio, Video
const filterButtons = document.querySelectorAll(".filler_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};
// Click event listerner
filterButtons.forEach(button => button.addEventListener("click", filterCards));


// contact form validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
  // Get the input values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.querySelector('input[placeholder="Your Subject"]').value.trim();
  const message = document.querySelector('textarea[placeholder="Your message..."]').value.trim();

  const usernamePattern = /^[A-Za-z0-9 ]{3,}$/;
  if (!usernamePattern.test(username)) {
      alert('Please enter a valid username.');
      e.preventDefault();
      return;
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
      return;
  }
});

