$(function () {
'use strict';
 //preloader
      $(" .loading-overlay .loader").fadeOut(2000,function (){
        $("body").css("overflow","auto");
       $(this).parent().fadeOut(500,
       function (){
        $(this).remove();
       });	
   	});
	
    // navbar
     $(window).scroll(function(){
         $('nav').toggleClass('scrolled',$(this).scrollTop() > 280);
     });
    
    $('.navbar .nav-item').click(function(){ 
        $('.navbar .nav-item').removeClass('active');
        $(this).addClass('active');});
    
     $(window).scroll(function(){
           var scrollLocation = $(this).scrollTop();
            var scrollLink =$('.navbar .nav-link');
        scrollLink.each(function(){
            var number=70;
            var section = $(this.hash).offset().top - number ;
            if (section <= scrollLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }   
            });
        });
    
        var s =$('.navbar .nav-link');
        var n=60;
        s.click(function(){
           $('html , body').animate({
               scrollTop:$(this.hash).offset().top - n
           },1000);
        });
    
    
    //just bg video height
    var winH = $(window).height();
    $('.bgVideo').height(winH);
   var navH = $('.navbar').innerHeight();
    $('.bgVideo').css("top", - navH);
    var d = 160;
     $('.bgVideo .wave').css("top" , winH - d );
  
     var btn =$('.bgVideo a');
        var n1=70;
        btn.click(function(){
           $('html , body').animate({
               scrollTop:$(this.hash).offset().top - n1
           },800);
        });
  
/// typed libarary
var typed = new Typed('.bgVideo  span.type', {
  strings : [ " " , "<i class='fa fa-users'></i> Team Of Awesome People",
             " <i class='fa fa-product-hunt'></i> We Create Digital Products",
             " <i class='fa fa-building'></i> We Are Digital Agency"],
    loop:true,
    typeSpeed: 40,
    backSpeed:30
});

    //// isotope libarary
    var $p =  $('.protfolio .projects ');
   $p.isotope({
       itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    $('.protfolio ul li').click(function(){ 
         var s =$(this).attr('data-filter');
        $('.protfolio ul li').removeClass('active');
        $(this).addClass('active');
        $p.isotope({filter: s});
    });
    
    
    /// swiper libarary
   var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides:true,
      slidesPerView: 'auto',
       loop: false,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination'
      },
       navigation : {
           nextEl: '.swiper-button-next',
          prevEl:'.swiper-button-prev'
        }
    });
    swiper.slideTo(3, false,false);
  
    // button scroll top
    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
           $('.topbtn').fadeIn(); 
        }else{
            $('.topbtn').fadeOut(); 
        } 
        
      
        
    });
    
    $('.topbtn').click(function(){
        $('html , body').animate({scrollTop:0},800);
    });
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
