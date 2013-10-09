$(document).ready(function () {
  $("#die_roll").click(function(event) { 
    event.preventDefault(); console.log("click!")

  var roll = Math.floor((Math.random()*6)+1);
  console.log(roll);

  var data = {value: roll}

  $.post('/rolls', data, function(response){
    $('#die').html(response);
   });
 });
  // $("input type").click

  // PSEUDO-CODE:

  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});
