 

(function ($)
{ "use strict"




let flkty = new Flickity(".main-carousel-2", {
    // options
    cellAlign: 'left',
    //contain: true,
    freeScroll: true,
    wrapAround: true,
    imagesLoaded: true,
 });
 
 
 
   const transformer = new FlickityTransformer(flkty, [
     {
       name: 'scale',
       stops: [
         [-300, 0.7],
         [0, 1],
         [1000, 0.7]
       ]
     },
  
    
     
   ])
 

   
})(jQuery);