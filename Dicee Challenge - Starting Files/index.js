// personal work:


// // random image
// // 1) get all the images
//  image_array = [
//   'dice1.png',
//   'dice2.png',
//   'dice3.png',
//   'dice4.png',
//   'dice5.png',
//   'dice6.png'
// ]
//
//
// //2) create function to random the pics
//
// function get_randome_image(){
//    // get a random index
//     randomIndex=Math.floor(Math.random() * image_array.length);
//
//     // get a random image at the random index
//     selected_image = image_array[randomIndex];
//
//     // display the image
//     document.getElementById("btn").src="./images/${selected_image}";
//
// }




// correction work:

var random_number1=Math.floor(Math.random()*6)+1; //1-6
var randomDiceImage="dice" + random_number1 +".png"; //dice1.png-dice6.png
var randomImageSource= "./images/" + randomDiceImage;
//path-dice1.png-path.dice6.png

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);




var random_number2=Math.floor(Math.random()*6)+1; //1-6
var randomDiceImage2="dice" + random_number2 +".png"; //dice1.png-dice6.png
var randomImageSource2= "./images/" + randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(random_number1>random_number2){
  document.querySelector("h1").innerHTML="🎉 player 1 wins!";
}
else if(random_number1<random_number2)
{
  document.querySelector("h1").innerHTML=" player 2 wins! 🎉";
}else{
  document.querySelector("h1").innerHTML=" Draw!";
}
