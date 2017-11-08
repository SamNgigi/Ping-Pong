/*Back-End(Logic)*/
 var pingPong = function functionName() {

 }
/*
1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong

i=0
for i == 1, i<x, i++
 if(x *=3 ---> ping)
 if(x *=5 ---> pong)
 if(x *=15 ---> pingpong)

7

1, 2
*/

/*Front-End(User Interface)*/
$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   $("form#number-baby").submit(function(event) {
         event.preventDefault();
         var userInput = $("#number-here").val();
         alert("Hey did you just say "+ userInput);
        });
});
