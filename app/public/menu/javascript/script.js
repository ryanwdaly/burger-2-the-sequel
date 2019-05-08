$(document).ready(function() {

    // Post Menu
    $.get("/api/burgers/all", function(data) {
        for (let i = 0; i < data.length; i++) {
            let newDiv = $("<div>");
            newDiv.attr("id", i)
            let newData = generateP(data[i]);

            if (data[i].devoured === "0") {
                newDiv.attr("class", "available-item")
                $("#available-container").append(newDiv);
                let newBtn = $("<button>")
                newBtn.attr("class", "btn btn-warning devour-btn")
                newBtn.attr("data-id", data[i].id)
                newBtn.html("Devour it!" );
                $("#" + i).append(newBtn);
                $("#" + i).append(newData);
            } else {
                newDiv.attr("class", "devoured-item")
                $("#devoured-container").append(newDiv);
                $("#" + i).append(newData);
            }
        }
    });

    $("body").on("click", ".devour-btn", function() {
        var id = $(this).data("id");
        $.post("/api/update/" + id, function(data){});
        location.reload();
    });

    
    $("#field-submit").on("click", function() {
        let burger = document.getElementById("burger-field").value;
        let burger_found = false;
        $.get("/api/burgers/all", function(data) {
            for (let i = 0; i < data.length; i++) {

                if (data[i].burger_name === burger && data[i].devoured === "0") {
                    let burger_id = data[i].id
                    $.post("/api/update/" + burger_id, function(data){});
                    burger_found = true; 
                    location.reload();
                } 
            }
            if (burger_found === false) {
                alert("Invalid Input!");
            }
        });
    });
   
    function generateP(data) {
        let newEl = $("<p>");
        newEl.html(data.id + ". " + data.burger_name)
        newEl.attr("class", "item")
        return newEl
    }
});