$(document).ready(function(){
    //Cambio de header
    $(window).on('scroll', function(){
        let posicion = $('#primerTextoID').offset();
        if ($(window).scrollTop() >= posicion.top){
            $('header').removeClass('transparente');
        } 
        else{
            $('header').addClass('transparente');
        }
    })
    //Activa el menu lateral
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    }) 
    //Smooth scroll
    $('a').on('click',function(){
        if (this.hash !== ''){
            let hash = this.hash;
            $('html, body').animate({

                scrollTop: $(hash).offset().top
            
            }, 800)
        }
    })
})