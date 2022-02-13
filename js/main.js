document.getElementById("formVal")

//variables for each coin image
// const coin1 = document.createElement('img');
// const coin2 = documnet.createElement('img');
// const coin3 = document.createElement('img');

//create an array with the two images
// let imgArr = ["front.jpg", "back.jpg"];
// let imageIndex = 1;

//make coins visible on click
// coin1.src = '/images/back.png';

//identify container to append image to

// document.getElementById('coinOne').innerHTML =(coin1);

function coinToss() {
    var myList = document.getElementById('coins');
    document.getElementById("amount").value = myList.options[myList.selectedIndex].text;

    let numSelected = myList.selectedIndex;

    console.log(numSelected);

    if (numSelected === 1){
        console.log("you chose 1");

        document.getElementById("coinOne").innerHTML= "<img src='images/front.png' />"
    } else if (numSelected === 2) {
        console.log("you chose 2");
    } else if (numSelected === 3) {
        console.log("you chose 3"); 
    } else {
        console.log("please choose");
    }
    // oDiv.addEventListener('click', function() {
    //     this.setAttribute('style', 'background-image: images/back.png');
    // }, false);
};

//pull value from form sumbission
//create a func for on click

//
//function using math.random to flip

// function headsTails() {

// }