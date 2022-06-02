$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $("#mature").show();
  } else {
    $("#young").show();
  }

});