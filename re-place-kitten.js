function replace_image(element){

    var choices = [
        'http://placekitten.com/',
        'http://www.fillmurray.com/',
        'http://www.stevensegallery.com/',
        'http://www.placecage.com/',
        'http://lorempixel.com/',
        'http://placebeard.it/',
        'http://placezombie.com/',
        'http://placebabies.com/',
        'http://baconmockup.com/',
        'http://www.fillmurray.com/',
        'http://www.fillmurray.com/g/',
        'http://www.placecage.com/',
        'http://www.placecage.com/c/',
        'http://www.placecage.com/g/',
        'http://placebear.com/'
    ];

    var choice = choices[Math.floor(Math.random() * choices.length)];

    var src = choice + $(element).width() + '/' + $(element).height();
    $(element).attr("src", src);
}

$(function() {
        var global = false;
        var replace_class = '';
        if($('body[data-re-place-kitten-global]').length){
            global = true;
        }
        if($('body[data-re-place-kitten]').length && !global){
            replace_class = $('body[data-re-place-kitten]');
        }

        $('img').load(function() {
            if (global) {
                replace_image(this);
            } else if($(this).attr('data-re-place-kitten') !== undefined && $(this).attr('data-re-place-kitten').length !== undefined){
                replace_image(this);
            }else if (replace_class !== '' && $(this).hasClass(replace_class)) {
                replace_image(this);
            }
        });
});