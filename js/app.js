$(document).ready(function() {
    $('#theme-song')[0].volume = 0.05;

    $('.ryu-ready').on('dblclick', function() {
        alert("ouch!!");
    });

    $('.ryu')
        .mouseenter(function() {
            // $(this) --> ryu
            $('.ryu-still').hide();
            $('.ryu-cool').hide();
            $('.ryu-ready').show();
        }).mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-cool').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({ 'left': '1103px' },
                500,
                function() {
                    // look for the nearest selector (this)
                    $(this).hide();
                    $(this).css('left', '603px');
                }
            );
            //play hadouken sound
            // show hadouken and animate it to the right of the screen

        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
            //ryu goes back to his ready position
        });



});

function playHadouken() {
    $('#theme-song')[0].pause();

    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}



$(document).keydown(function(event) {
    // ternary operator
    // 1 ? true : 3
    // var keycode = (event.keyCode ? event.keyCode : event.which);
    if (event.which == 88) {

        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
    }
});

$(document).keyup(function(event){
	if (event.which == 88){
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	} 
})
