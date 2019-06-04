$(document).ready(function() {
  $("form#user").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var weight = parseInt($("input#weight").val());
    var hairColor = $("input#hairColor")

    var quote = (100 - age) * 3;
    if (gender === 'male' && age < 26) {
      quote += 50;
    }

    $("#date").text(quote);
    $("#yourDate").show()

    event.preventDefault();
  });
});
