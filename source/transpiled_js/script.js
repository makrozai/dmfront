$(document).ready(function(){
  $('.sliderm').slider({
    height:600
  });
  $('select').material_select();
  $('ul.tabs').tabs();
  $(".button-collapse").sideNav();

  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .7, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '5%' // Ending top style attribute
    }
  );
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });
  $("#productList").pinto({
    itemWidth:250,
    gapX:30,
    gapY:30,
  });


  $("#product-img").elevateZoom({
    gallery:'product-gallery', 
    cursor: 'pointer', 
    galleryActiveClass: 'active', 
    imageCrossfade: true, 
    loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
  }); 

  //pass the images to Fancybox
  $("#product-img").bind("click", function(e) {  
    var ez =   $('#product-img').data('elevateZoom'); 
    $.fancybox(ez.getGalleryList());
    return false;
  });
});