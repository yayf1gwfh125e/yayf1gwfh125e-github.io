$(window).scroll(function () {
  //After scrolling 100px from the top...
  if ($(window).scrollTop() >= 350) {
      $('.conteudo').css('display', 'block');
      $('.conteudo').css('position', 'fixed');
      $('.conteudo').css('top', '0');
      $('.conteudo').css('left', '0');
      $('.conteudo').css('right', '0');
      $('.conteudo').css('z-index', '999');
      //Otherwise remove inline styles and thereby revert to original stying
  } else {
      $('.conteudo').css('display', 'none');
  }
});
