

$(document).ready(function(){
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevourState = {
            devoured: 1
        }




        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState,
        }).then(
            function () {
                console.log("changed burger to", newDevourState);
                console.log("The burger has been eaten");
                location.reload();
            }
        );

    });

    $(".create-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim()
        };
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("you made a new burger, YUM!");
                location.reload();
            }
        );

    });

});

    
