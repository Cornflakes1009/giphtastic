// api key t0ciuMUzF8UO9InX1mShBj5y9JfhJqOn
$(document).ready(function () {
    
    var gifArray = ['mangoes', 'bananas', 'kiwi', 'pineapple', 'strawberries', 'oranges'];

    for(var i = 0; i < gifArray.length; i++){
        $('.button-area').append('<button>' + gifArray[i] + '</button>');
        $('button').attr('class', 'btn btn-info mr-3 mt-4');
    }

    $('.submit').on('click', function () {
        var wordInSearchBox = $('.search-box').val().trim();
        if (wordInSearchBox.length > 0) {
            //gifArray.push($('.search-box').val()); <- removed from conditional statement. Considered checking if the word was already in the array. 
            // && gifArray.indexOf(wordInSearchBox)
            gifArray.push(wordInSearchBox);
            console.log(gifArray);
        }
    })















}); // end of the docuemnt ready func

