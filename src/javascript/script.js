const menuToggle =document.getElementById('menu')
const closeBar = document.getElementById('close')
const sideBar = document.getElementById('sidebar')

closeBar.addEventListener('click', () =>{
  sideBar.style.display = 'none'
})

menuToggle.addEventListener('click', () =>{
  sideBar.style.display = 'block'
})