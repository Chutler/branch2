$(document).ready(function() {
  $("form#user").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var weight = parseInt($("input#weight").val());
    var hair = $("input#hairColor").val();

    $(".age").text(age);
    $(".gender").text(gender);
    $(".weight").text(weight);
    $(".hair").text(hair);

    if (age < 18) {
      $('#underAge').show();
    } else if (age >= 18 && age <= 40) {
      $('#adult').show();
    } else {
      $('#senior').show();
    }

    event.preventDefault();
  });
});
