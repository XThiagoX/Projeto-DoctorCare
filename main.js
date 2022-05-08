window.addEventListener('scroll', onScroll)
onScroll()

function onScroll()
{
  showNavOnScroll()
  showButtonBackToTop()
}

function showNavOnScroll(){
  if(scrollY > 0){
    navigation.classList.add('scroll')
  }
  else{
    navigation.classList.remove('scroll')
  }
}

function showButtonBackToTop(){
  if(scrollY > 1900){
    backToTopButton.classList.add('show')
  }
  else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance : '30px',
  duration: 1500,
}).reveal(`
#home, 
#home img, 
#home .stat, 
#services,
#services .card,
#about,
#about header,
#about content`);


