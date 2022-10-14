window.addEventListener('load', ()=>{

  if ( window.innerWidth > 1024 ) {
    AOS.init({
      once: true
    })
  };
  
})

$(function(){
  
  $('html').addClass('is-ready')

  // var vConsole = new window.VConsole();

})
