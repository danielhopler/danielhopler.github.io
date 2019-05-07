$(() => {
	var $scroller = $('#site-wrapper');
	$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $scroller.stop().animate({
        'scrollTop': $target.offset().top - $scroller.offset().top + $scroller.scrollTop()
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });
})
