//variables for each coin image
const coin1 = document.createElement('img');
const coin2 = documnet.createElement('img');
const coin3 = document.createElement('img');

//create an array with the two images
let imgArr = ["front.jpg", "back.jpg"];
let imageIndex = 1;

//make coins visible on click
coin1.src = '/images/back.png';

//identify container to append image to

document.getElementById('.threeCoins').appendChild(coin1);

//function using math.random to flip

function headsTails() {

}