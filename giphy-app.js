$(function () {
    var gifArray = ['Donkey Kong', 'Zelda', 'Kirby', 'Pokemon', 'Metroid', 'Star Fox'];
    var gif = "";//$(this).attr("data-name"); //;
    var boing = new Audio('boing.mp3');
    $("#submit").on("click", function (event) {
        console.log('submit clikced');
        event.preventDefault();
        var newGif = $(".search-box").val().trim();
        if (gifArray.indexOf(newGif) === -1 && newGif.length > 0) {
            gifArray.push(newGif);
            renderButtons();
            boing.load();
            boing.play();
        };
        $('.search-box').empty();
    });
    function loadGif() {
        boing.load();
        boing.play();
        console.log('load gif ran');
        var gameGif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gameGif + "&api_key=t0ciuMUzF8UO9InX1mShBj5y9JfhJqOn&limit=10";
        $(".gif-space").empty();
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            results = response.data;
            console.log(results.length);
            if(results.length === 0){
                alert('No gifs match that search');
            }
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                gif = $("<img>");
                gif.attr({
                    "src": results[i].images.fixed_height_still.url,
                    "data-state": "still",
                    "class": "gifImage",
                    "data-animate": results[i].images.fixed_height.url,
                    "data-still": results[i].images.fixed_height_still.url
                });
                gifDiv.append(p);
                gifDiv.append(gif);
                $(".gif-space").prepend(gifDiv);
            };
            renderButtons();
        });
    };
    function renderButtons() {
        console.log('render ran');
        $(".button-area").empty();
        for (var i = 0; i < gifArray.length; i++) {
            var a = $("<button class='btn btn-danger gifbutton mr-3 mt-4'>"); //gifImage
            a.attr("data-name", gifArray[i]);
            a.text(gifArray[i]);
            $(".button-area").append(a);
        }
    }
    $(document).on("click", ".gifImage", function () {
        boing.load();
        boing.play();
        console.log('gif clicked');
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        };
    });
    $(document).on("click", ".gifbutton", loadGif);
    renderButtons(); // happens when the page loads
});