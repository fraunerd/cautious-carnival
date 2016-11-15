var paused = true;
var isStarted = false;
$('#pause').prop("disabled", true);

function startTimer(total) {
    var timer = total,
        mins, secs;

    var thistimer = setInterval(function() {
            if (paused == false) {
                mins = parseInt(timer / 60, 10);
                secs = parseInt(timer % 60, 10);

                mins = mins < 10 ? "0" + mins : mins;
                secs = secs < 10 ? "0" + secs : secs;

                $('#time').text(mins + ":" + secs);
                if (mins == 0 && secs == 0) {

                    if (total/60==10)
          {clearInterval(thistimer);
            startTimer(2*60);
          $('#time').css({"background-color":"#4CAF50", "color":"#FFF"});
          $('#whatwhat').css("color","#4CAF50");
          $('#whatwhat').text("Procrastinate!! Wheeeeee!");}

          else {
            clearInterval(thistimer);
            startTimer(10*60);
          $('#time').css({"background-color": "#D32F2F", "color":"#FFF"});
          $('#whatwhat').css("color","#D32F2F");
          $('#whatwhat').text("Work!");}

        }
                    if (--timer < 0) {
                        timer = total;
                    };


                }
            }, 1000);
    };

    function startClick() {
        paused = false;
        $('#pause').prop("disabled", false);
        if (isStarted == true) {
            location.reload()
        };
        var mins = 60 * 10;
        startTimer(mins);
        $('#start').html("<i class=\"fa fa-5x fa-refresh\" aria-hidden=\"true\"></i>");
        isStarted = true;
        $('#time').css({"background-color": "#D32F2F", "color":"#FFF"});
        $('#whatwhat').css("color", "#D32F2F");
        $('#whatwhat').text("Work!");
    };

    function pauseClick() {
        if (paused == true) {
            paused = false;
            $('#pause').html("<i class=\"fa fa-5x  fa-pause\" aria-hidden=\"true\"></i>");
        } else {
            paused = true;
            $('#pause').html("<i class=\"fa fa-5x fa-play\" aria-hidden=\"true\"></i>");
        }
    };
