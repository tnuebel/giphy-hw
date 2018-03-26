//When submit button is clicked!
$("#addAnimal").click(function () {

    // alert("hi");



    //grab values from the text box:
    var btnTxt = $("#animal-input").val();

    // if btnTxt is empty don't do anything if not execute the code.

    if (btnTxt === "") {
            //do nothing
            //focus on the textbox
            $("#animal-input").focus();
    } else {
        //create new variable for new button with class of animalBTN
        var newbtn = $("<button class='animalBTN'>");
        //add the text inside newbtn
        //add value attribute to the button
        newbtn.attr("value", btnTxt);
        //add text the button
        newbtn.text(btnTxt);
        //append the new button in the div called animalSwitch
        $("#animalSwitch").append(newbtn);

        //clean the textbox
        $("#animal-input").val("");
        //focus on the text box
        $("#animal-input").focus();
    }
    //Prevent submit button from refreshing page.
    return false;
})

$("#animalSwitch").on("click", "button", function(res){


/////////////////Searching Giphy part


///api key from giphy
var apikey = "6rvZikSkdbHSZ8jxAXPHuGvVUge4Yj0T";

//host and path
var host = "api.giphy.com";
var path = "/v1/gifs/search";

//full path
var fullpath = "https://"+host+path;
    // alert(fullpath);

//limit the number of images
var limit = 10;

var search = this.value; // search for car for now. 
//later change this to button value

//adding api key to the search
fullpath = fullpath+"?api_key="+apikey;

//adding search question:
fullpath = fullpath+"&q="+search;

//adding limit return
fullpath = fullpath+"&limit="+limit;

//ajax part
$.ajax({"url": fullpath,
        "method": "GET"
    }).then(function(response){

        for(var i =0; i<response.data.length; i++){
        
        ///console log response
        console.log(response);
        //still image url
        console.log(response.data[i].images.downsized_still.url);
        //animated image url:
        console.log(response.data[i].images.downsized.url);

        //get the rating
        console.log(response.data[i].rating);

        //making new image:
        var newImage = $("<img>");
        //initially the path should still image
        newImage.attr("src", response.data[i].images.fixed_height_still.url);
        //save animated image path in the data-path attribute
        newImage.attr("data-path", response.data[i].images.fixed_height.url);

        //make the status of img to still
        newImage.attr("status", "still");

        var ratingDiv = $("<div>");
        ratingDiv.text(response.data[i].rating);

        $("#animals").prepend(ratingDiv);
        $("#animals").prepend(newImage);
        }

});

});

