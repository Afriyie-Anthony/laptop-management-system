const menuToggle =document.getElementById('menu')
const closeBar = document.getElementById('close')
const sideBar = document.getElementById('sidebar')

sideBar.style.width = '260px';

sideBar.style.transform = 'translateX(0)';
closeBar.addEventListener('click', () =>{
  sideBar.style.display = 'none'
  sideBar.style.transform = 'translateX(-100%)'
})

menuToggle.addEventListener('click', () =>{
  sideBar.style.display = 'block'
  sideBar.style.transform = 'translateX(0)'
})

