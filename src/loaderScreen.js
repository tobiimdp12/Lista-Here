let loaderWrapper=document.querySelector(".loader-wrapper");

document.body.style.overflow = 'hidden';//bloquear el scroll

//para mejorar la optimizacion y el SEO
document.querySelector('#person-form').style.display = "none";
document.querySelector('.table-responsive').style.display = "none";
document.querySelector('#person-form-edit').style.display = "none";


window.addEventListener("load",function(){
    setTimeout(function(){
        
        document.querySelector('#person-form').style.display = "block";
        document.querySelector('.table-responsive').style.display = "block";
        document.querySelector('#person-form-edit').style.display = "block";
        loaderWrapper.parentElement.removeChild(loaderWrapper);
        window.scrollTo(0,0);
        document.body.style.overflow = 'visible';//habilitar el scroll
    },2000);
  
});