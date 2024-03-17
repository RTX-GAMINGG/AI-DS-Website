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


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

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


document.querySelector('nav .mainMenu .closeMenu').addEventListener('click', function() {

  toggleMenu();
});
