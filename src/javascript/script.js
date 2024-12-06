const menuToggle =document.getElementById('menu')
const closeBar = document.getElementById('close')
const sideBar = document.getElementById('sidebar')

closeBar.addEventListener('click', () =>{
  sideBar.style.display = 'none'
  sideBar.style.transition = 'all 0.5s'
})

menuToggle.addEventListener('click', () =>{
  sideBar.style.display = 'block'
})