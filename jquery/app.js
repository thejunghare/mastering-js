// select/target elements

$(document).ready(function () {
  // target using element itself
  $("button").addClass("btn");

  // target using class
  $(".btn").addClass("btn");

  // target using id
  $("#container").remove();
});
