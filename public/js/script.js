//Change Navbar Scrolling 
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
  
    let windowPosition = window.scrollY > 0;

    header.classList.toggle('scrolling-active', windowPosition);

})

let ChangeIcon = function(icon){
    icon.classList.toggle("change")
}

//Scroll Revel
window.sr= ScrollReveal();


sr.reveal('.BOUNCE_ANIMAT', { 
    duration:1500,
    origin:'bottom'
});

sr.reveal('.LEFT_ANIMAT',{    
    duration:1500,
    distance:'500px',
    origin:'left',
})

sr.reveal('.TOP_ANIMAT',{
    duration:1500,
    distance:'100px',
    origin:'top',
})

