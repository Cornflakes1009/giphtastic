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
    //addButtons();
    $('#submit').on('click', function () {
        
        var wordInSearchBox = $('.search-box').val().trim();
        if (wordInSearchBox.length > 0) {
            gifArray.push(wordInSearchBox);
            console.log(gifArray);
            
            $('.button-area').append("<button>" + wordInSearchBox + '</button>');
            // $('button').attr('class', 'btn btn-info mr-3 mt-4');
            $('button').addClass('gif-button btn btn-info mr-3 mt-4');

        } 
    });
    $('.gif-button').on('click', function(){
        alert('clicked');
    });
    function renderButtons() {
        console.log('function ran');
        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $(".button-area").empty();

        // Looping through the array of movies
        for (var i = 0; i < gifArray.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("gif-button "); //btn btn-info mr-3 mt-4
          // Adding a data-attribute
          a.attr("data-name", gifArray[i]);
          // Providing the initial button text
          a.text(gifArray[i]);
          // Adding the button to the buttons-view div
          $(".button-area").append(a);
        }
      }
      renderButtons();















}); // end of the docuemnt ready func

