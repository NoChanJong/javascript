$(function() {
  // carousel 슬라이드 이벤트
  $('#myCarousel').on('slide.bs.carousel', function() {
    let to_slide = $('.carousel-item.active').attr('data-slide-no');
    $('.slide-indicators li').removeClass('active');
    $('.slide-indicators li[data-slide-to="'+to_slide+'"]').addClass('active');
  })
})