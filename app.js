document.querySelector('.hamburger').addEventListener('click', (e) => {
  document.querySelector('.container ul').classList.toggle('show')
})

document.querySelector('main').addEventListener('click', (e) => {
  document.querySelector('.container ul').classList.remove('show')
})
