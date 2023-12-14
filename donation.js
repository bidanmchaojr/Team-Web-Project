var firstName = "";
var lastName = "";
var email = "";
var dType = "";
var receipt = "";
var anon = "";
var list = "";
var amount = "";

$('.set-amount').autoGrow(0);

$(".set-amount").keyup(function () {
  if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
    this.value = this.value.replace(/[^0-9\.]/g, '');
  }
});

$("input").on("change", function () {
  firstName = $("#firstName").val();
  lastName = $("#lastName").val();
  email = $("#email").val();

  if ($("#one-time").prop("checked")) {
    dType = "One-Time";
  }
  if ($("#monthly").prop("checked")) {
    dType = "Monthly";
  }

  // Debugging statements
  console.log("Toggle class attempt");
  console.log($(".amount .button").length); // Log the number of elements found

  // Toggle the "filtered" class on elements with class "button" within a parent div with class "amount"
  $(".amount .button").toggleClass("filtered");
});
