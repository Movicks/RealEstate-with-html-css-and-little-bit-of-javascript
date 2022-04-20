//creating a function for the toggle button to show a div or navnode
function show() {
    //call the (ID).style.display ="block";
    document.getElementById('id0l').style.display = 'block';
}


// how to build fade in and fade out slideshow javascript
var myIndex = 0;
slide();

function slide() {
    var i;
    var x = document.getElementsByClassName("mySlideshow");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    //Here we set the timing
    setTimeout(slide, 2559);
}

function getInputValue() {
    //select the input element and get its value
    let inputVal =
        document.getElementById("inputId").value;
    // display value
    alert(inputVal)
}