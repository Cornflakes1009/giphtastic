// api key t0ciuMUzF8UO9InX1mShBj5y9JfhJqOn
$(document).ready(function () {
    
    var gifArray = ['Donkey Kong', 'Zelda', 'Kirby', 'Pokemon', 'Metroid', 'Star Fox'];
    console.log(gifArray);

    function addButtons(){
        for(var i = 0; i < gifArray.length; i++){
            $('.button-area').append("<button class='btn btn-info mr-3 mt-4 gif-button'>" + gifArray[i] + '</button>');
            //$('button').attr('class', 'btn btn-info mr-3 mt-4');
        };
    }
    addButtons();
    $('#submit').on('click', function () {
        var wordInSearchBox = $('.search-box').val().trim();
        if (wordInSearchBox.length > 0) {
            gifArray.push(wordInSearchBox);
            console.log(gifArray);
            addButtons();
            //$('.button-area').append("<button class='btn btn-info mr-3 mt-4 gif-button'>" + wordInSearchBox + '</button>');
            // $('button').attr('class', 'btn btn-info mr-3 mt-4');
            $('button').addClass('gif-button');
        } 
    });
    $('.gif-button').on('click', function(){
        alert('clicked');
    });
















}); // end of the docuemnt ready func

