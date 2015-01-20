
$('.heading1').on('click', function() {
	$('.body1').toggleClass('open');
	$('.body2').removeClass('open');
	$('.body3').removeClass('open');
});

$('.heading2').on('click', function() {
	$('.body2').toggleClass('open');
	$('.body1').removeClass('open');
	$('.body3').removeClass('open');
});

$('.heading3').on('click', function() {
	$('.body3').toggleClass('open');
	$('.body1').removeClass('open');
	$('.body2').removeClass('open');
});
