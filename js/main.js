/*Back-End(Logic)*/
var ping_pong = function(userInput) {
  for (var i = 1; i <= userInput; i++) {
    if ((i%15)===0) {
      $("#output").append("<li>" + "Ping-Pong!");
    }else if ((i%3)===0) {
      $("#output").append("<li>" +"Ping");
    }else if ((i%5)===0) {
      $("#output").append("<li>" + "Pong" );
    }else {
      $("#output").append("<li>" + i);
    }
  }
}
/*Front-End(User Interface)*/
$(document).ready(function() {
   $("form#number-baby").submit(function(event) {
         event.preventDefault();
         var userInput = parseInt($("#number-here").val());
         alert("Hey did you just say "+ userInput);
         ping_pong(userInput);
        });
});
