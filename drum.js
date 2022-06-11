// document.querySelector(".set").addEventListener("click", handleClick) 
// //(type, listner) listner is mostly a js function
// // Pass the name of the function as an (input) attribute don't call a function with ()..

// function handleClick(){
//     alert("I got Clicked!");
// }


//Can also be done as:
// document.querySelector("button").addEventListener("click",function () {alert("I got Clicked!");} )


// var numberOfDrumButtons= document.querySelectorAll(".drum").length;

// for (var i=0; i<numberOfDrumButtons; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {alert("I got Clicked!");})
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var i = 0;

while(i < numberOfDrumButtons)
{
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   
      var buttonInnerHtml = this.innerHTML;

     makeSound(buttonInnerHtml);
     buttonAnimation(buttonInnerHtml);
      

    //this.style.color="white";
   })

   i++;
}


//On keyboard Click
document.addEventListener("keypress", function(e){

   makeSound(e.key);  //e is the event and key the element which is pressed
   buttonAnimation(e.key);

})


function makeSound(key){


   switch (key) {
         
      case "w":
         var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
         break;

      case "a":
         var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
      
      case "s":
         var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
         break;

      case "d":
         var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
         break;

      case "j":
         var audio = new Audio("sounds/crash.mp3");
         audio.play();
         break;

      case "k":
         var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;

      case "l":
         var audio = new Audio("sounds/snare.mp3");
         audio.play();
         break;
   
      default: 
         console.log(key)
         break;
   }


}

function buttonAnimation(currentKey){

   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
      activeButton.classList.remove("pressed");
   },100)

   //setTimeout(function,mili-seconds)

}