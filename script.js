const hamburgerBtn=document.getElementById('hamburger-btn');
const nav=document.querySelector('.navbar-links');
const closeBtn=document.getElementById('close');

hamburgerBtn.addEventListener('click', () => {
  nav.classList.add('active');
  hamburgerBtn.classList.add("active")
})
closeBtn.addEventListener('click',()=>{
  nav.classList.remove('active')
  hamburgerBtn.classList.remove('active');
})
