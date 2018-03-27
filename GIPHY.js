// activate submit button
$("#addAnimal").click(function () {


    // gets data from the text box:
    var btnTxt = $("#animal-input").val();

    // btnTxt is activated when text/data is entered; if empty, no action taken.

    if (btnTxt === "") {
            // does nothing
            // focus on the textbox
            $("#animal-input").focus();
    } else {
        // new variable for new button with class of animalBTN
        var newbtn = $("<button class='animalBTN'>");

        // add text inside newbtn
        // add value attribute to the button
        newbtn.attr("value", btnTxt);

        // add text the button
        newbtn.text(btnTxt);

        // append the new button in the div called animalSwitch
        $("#animalSwitch").append(newbtn);

        // clean the textbox
        $("#animal-input").val("");

        // focus on the text box
        $("#animal-input").focus();
    }
    // Prevent submit button from refreshing page.
    return false;
})

$("#animalSwitch").on("click", "button", function(res){


// GIPHY related:


// api key from giphy
var apikey = "6rvZikSkdbHSZ8jxAXPHuGvVUge4Yj0T";

// host and path
var host = "api.giphy.com";
var path = "/v1/gifs/search";

// full path
var fullpath = "https://"+host+path;
    // alert(fullpath);

// limit the number of images
var limit = 10;

var search = this.value; // checking value when search is performed

// api key 
fullpath = fullpath+"?api_key="+apikey;

// search question:
fullpath = fullpath+"&q="+search;

// limit return
fullpath = fullpath+"&limit="+limit;

// ajax:
$.ajax({"url": fullpath,
        "method": "GET"
    }).then(function(response){

        for(var i =0; i<response.data.length; i++){
        
        /// console log response
        console.log(response);

        // still image url
        console.log(response.data[i].images.downsized_still.url);

        // animated image url:
        console.log(response.data[i].images.downsized.url);

        // get rating
        console.log(response.data[i].rating);

        // making new image:
        var newImage = $("<img>");

        // initial path should be still image
        newImage.attr("src", response.data[i].images.fixed_height_still.url);

        // save animated image path in the data-path attribute
        newImage.attr("data-path", response.data[i].images.fixed_height.url);

        // make the status of img to still
        newImage.attr("status", "still");

        // gif rating
        var ratingDiv = $("<div>");
        ratingDiv.text(response.data[i].rating);

        $("#animals").prepend(ratingDiv);
        $("#animals").prepend(newImage);
        }

});

});

