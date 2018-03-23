$(document).ready(function () {
    // all the global var's we need.
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var intervalId;
    var clockRunning = false;
    var time = 120;

    //Hiding all the content untill we call it.
    $(".visibility").hide();

    //Code that will execute after start button clicked.
    $("#start").on("click", function () {
        run();

    })
    //Time function:
    function run() {
        intervalId = setInterval(decrement, 1000);
        $("#button").hide();

    }
    //Decrementing time:
    function decrement() {
        time--;
        $("#time").html("<h2 id='time'>Time Remaining: " + time + " Seconds!</h2>");
        $(".visibility").show();
        if (time === 0) {
            stop();
            conditianal();
            innerHTML();
            
        }
    }
    //stop function:
    function stop() {
        clearInterval(intervalId);
    };
    //submit
    $("#submit").on("click", function () {
        conditianal();
        innerHTML();
    });
    //Conditianal statement that executes after submit button clicked.
function conditianal(){
    if ($("#choice3").is(":checked")) {
        correct++;
    } else if ($("#choice1, #choice2, #choice4").is(":checked")) {
        ++incorrect;
    } else {
        unanswered++;
    };

    if ($("#choice6").is(":checked")) {
        correct++;
    } else if ($("#choice5, #choice7, #choice8").is(":checked")) {

        incorrect++;
    } else {
        unanswered++;
    };

    if ($("#choice9").is(":checked")) {
        correct++;
    } else if ($("#choice10, #choice11, #choice12").is(":checked")) {
        incorrect++;
    } else {
        unanswered++;
    };

    if ($("#choice16").is(":checked")) {
        correct++;
    } else if ($("#choice15, #choice13, #choice14").is(":checked")) {
        incorrect++;
    } else {
        unanswered++;
    };

    if ($("#choice18").is(":checked")) {
        correct++;
    } else if ($("#choice17, #choice19, #choice20").is(":checked")) {
        incorrect++;
    } else {
        unanswered++;
    };

    if ($("#choice23").is(":checked")) {
        correct++;
    } else if ($("#choice21, #choice22, #choice24").is(":checked")) {
        incorrect++;
    } else {
        unanswered++;
    };

    if ($("#choice25").is(":checked")) {
        correct++;
    } else if ($("#choice26, #choice27, #choice28").is(":checked")) {
        incorrect++;
    } else {
        unanswered++;
    };
}
function innerHTML(){
    var html =
    "<p>All Done!!!</p>" +
    "<p>Correct Answers: " + correct + "</p>" +
    "<p>Incorrect Answers: " + incorrect + "</p>" +
    "<p>Unanswered: " + unanswered + "</p>"
$("#game").html(html);
$("#button").show();
}

});


