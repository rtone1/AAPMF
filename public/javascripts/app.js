// FUNCTIONS FOR AAPM SITE
(function(){ //FUNCTIONS CLOUSER

  // FUNCTION TO DISPLAY X ON HAMICON
  var addXMenu = function(){
    $('.line1').addClass('top');
    $('.line2').addClass('middle');
    $('.line3').addClass('bottom');
    $('.line1').removeClass('backMT');
    $('.line2').removeClass('backM');
    $('.line3').removeClass('backMB');
  };

  // FUNCTION TO REMOVE X ON HAMICON
  var removeXMenu = function(){
    $('.line1').addClass('backMT');
    $('.line2').addClass('backM');
    $('.line3').addClass('backMB');
    $('.line1').removeClass('top');
    $('.line2').removeClass('middle');
    $('.line3').removeClass('bottom');
  };

  // FUNCTION TO REMOVE ALL ANIMATIONS ON HAMICON
  var removeClasses = function(){
    $('.ctn-page').removeClass('shadow');
    $('.line1').removeClass('backMT');
    $('.line2').removeClass('backM');
    $('.line3').removeClass('backMB');
    $('.line1').removeClass('top');
    $('.line2').removeClass('middle');
    $('.line3').removeClass('bottom');
  }

  // FUNCTION TO DROP DOWN MENU
  $.fn.dropDownMenu = function(counter,target,action,amountH){
    var amount = $(amountH).height();
    $(target).on('click', function(){
      if (counter === 0 ){
        addXMenu();
        $(action).animate({top: amount},200);
        $(action).addClass('shadow');
        counter += 1;
      } else{
        removeXMenu();
        $(action).animate({top: 0},200);
        $(action).removeClass('shadow');
        counter -= 1;
      }
    });
    $('.ctn-page').on('click', function(){
      if (counter === 1){
        removeXMenu();
        $(action).animate({top: 0},200);
        $(action).removeClass('shadow');
        counter = 0;
      }
    });
      $(window).resize(function(){
        if ($(window).width() > 950){
          $(action).animate({top: 0},200);
          removeClasses();
          counter = 0;
        }
          amount = $(amountH).height();
      });
  };

  // FUNCTION FOR SHOWMORE DROPDOWN
  $.fn.showMore = function(target,specific,action){
    $('.small').hide();
    $(target).click(function(){
    var that = $(this).closest(specific);
       if (that.hasClass("active")) {
           $(that).find(action).slideToggle(300);
           $(that).removeClass("active");
           that.find('span').text('+ READ MORE');
       }
       else {
           $(that).find(action).slideToggle(300);
           that.addClass("active");
           that.find('span').text('- READ LESS');
       };
    });
  };

}()); // END OF FN CLOUSER

// RUN CODE WHEN PAGE IS DONE LOADING
$(document).ready(function(){

// CALL FUNCTIONS ON DOM
  var navDown = $.fn.dropDownMenu( 0, $('.hamIcon'), $('.ctn-page'), $('nav') );
  var displayMore = $.fn.showMore( $('.readMore'), $('article'), $('.small') );

}); // END OF DOCUMENT READY FUNCTION
