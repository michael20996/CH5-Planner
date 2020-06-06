$(document).ready(function() {
    $('.saveBtn').on('click', function(){
        var words = $(this).siblings('.input').val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, words)

    })

    function updateDay(){
        
        var currentTime = moment().hours();

        $('.input').each(function() {
            var timeSelected = parseInt($(this).attr('id'));
        
            if (timeSelected > currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (timeSelected < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            } else {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
        });

    }

    updateDay();

    var interval = setInterval(updateDay, 15000);

  $("#9am .input").val(localStorage.getItem("9am"));
  $("#10am .input").val(localStorage.getItem("10am"));
  $("#11am .input").val(localStorage.getItem("11am"));
  $("#12m .input").val(localStorage.getItem("12pm"));
  $("#1pm .input").val(localStorage.getItem("1pm"));
  $("#2pm .input").val(localStorage.getItem("2pm"));
  $("#3pm .input").val(localStorage.getItem("3pm"));
  $("#4pm .input").val(localStorage.getItem("4pm"));
  $("#5pm .input").val(localStorage.getItem("5pm"));

  $("#currentDay").text(moment().format("dddd, MMMM Do"));

});