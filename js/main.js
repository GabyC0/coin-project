//document.getElementById("formVal")

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

function headsTails() {
    let num = Math.round(Math.random() * (2 - 1) + 1);
    console.log("either 1 or 2", Math.round(num));
    
    if(num === 1) {
        document.getElementById("coinOne").innerHTML= "<img src='images/front.png' />"
        
    } else if (num === 2) {
        document.getElementById("coinOne").innerHTML= "<img src='images/back.png' />"
    }

};

function headsTailsTwo() {

    // document.getElementById("coinOne").innerHTML = "<img src='images/front.png' />"


    let num = Math.round(Math.random() * (2 - 1) + 1);
    console.log("either 1 or 2", Math.round(num));
    
    if(num === 1) {
        document.getElementById("coinTwo").innerHTML= "<img src='images/front.png' />"
        
    } else if (num === 2) {
        document.getElementById("coinTwo").innerHTML= "<img src='images/back.png' />"
    }

};

function headsTailsThree() {
    let num = Math.round(Math.random() * (2 - 1) + 1);
    console.log("either 1 or 2", Math.round(num));
    
    if(num === 1) {
        document.getElementById("coinThree").innerHTML= "<img src='images/front.png' />"
        
    } else if (num === 2) {
        document.getElementById("coinThree").innerHTML= "<img src='images/back.png' />"
    }
};

function coinToss() {
    var myList = document.getElementById('coins');
    document.getElementById("amount").value = myList.options[myList.selectedIndex].text;

    let numSelected = myList.selectedIndex;

    console.log(numSelected);

    // document.getElementById("coinOne").innerHTML= "<img src='images/front.png' />"

    if (numSelected === 1){
        console.log("you chose 1");

        // let num = Math.random() * (2-1) + 1;
        //console.log("either 1 or 2", Math.round(num));

        headsTails();

        // if(num === 1) {
        //     document.getElementById("coinOne").innerHTML= "<img src='images/front.png' />";
            
        // } if (num === 2) {
        //     document.getElementById("coinOne").innerHTML= "<img src='images/back.png' />";
        // }
    } else if (numSelected === 2) {
        console.log("you chose 2");

        // let num = Math.random() * (2-1) + 1;
        // console.log("either 1 or 2", Math.round(num));
        headsTails();
        headsTailsTwo();

    } else if (numSelected === 3) {
        console.log("you chose 3"); 

        headsTails();
        headsTailsTwo();
        headsTailsThree();
        
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
//     let num = Math.random() * (2 - 1) + 1;
//     return Math.round(num);
// };


//***reset button

