console.log('hi its profile');
// tab
$(function() {
   $('.divBar-button .tabbtn').click(function() {
     let onTab = $(this).attr('data-tab');
     $('.divBar-button .tabbtn').removeClass('on');
     $('.cnt').removeClass('on');
     $(this).addClass('on');
     $('#'+onTab).addClass('on');
   })
 });
