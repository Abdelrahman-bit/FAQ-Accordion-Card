$(document).ready( function () {
  if( $('.faq-list').length ) {
    $('.faq-list li').on('click', function() {
      if($(this).hasClass('active')) {
        return;
      }
      $('.faq-list li').removeClass('active');
      $(this).addClass('active');
      $('.faq-list__answer').slideUp();
      $(this).find('.faq-list__answer').slideDown();
    });
  }
});