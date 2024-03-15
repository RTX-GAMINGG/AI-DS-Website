document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.landing-content').style.display = 'block';
    }, 1000); 
  });
  
  const learnMoreBtn = document.getElementById('learnmore');
  
  // Add a click event listener
  learnMoreBtn.addEventListener('click', function() {
    // Redirect to about.html when the button is clicked
    window.location.href = this.getAttribute('href');
  });
window.addEventListener('scroll', function() {
  const scrolled = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  document.getElementById("progress-bar").getElementsByTagName('div')[0].style.width = scrolled * 100 + "%";
})

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
function toggleMenu() {
  var menu = document.querySelector('nav .mainMenu');
  menu.classList.toggle('open');
}

// Add an event listener to the closeMenu button
document.querySelector('nav .mainMenu .closeMenu').addEventListener('click', function() {
  // Hide the menu when the close button is clicked
  toggleMenu();
});
