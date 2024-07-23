function rotate(){
    var lastChild = $('.slider div:last-child').clone();
    $('.slider div').removeClass('firstSlider')
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild)
    $(lastChild).addClass('firstSlider')
}

window.setInterval(function(){
    rotate();
},5000)


  function ageCount() {
    var now =new Date();                            //getting current date
    var currentYear= now.getFullYear();                //extracting year from the date
    var currentMonth= now.getMonth();                   //extracting month from the date
  


    var incorpdate = '04/24/2024'; //getting user input
    var doincorp = new Date(incorpdate);                             //formatting input as date
    var extractYear = doincorp.getFullYear();                          //extracting year from input date
    var extractMonth = doincorp.getMonth();                             //extracting month from input date


    var Yearhave = currentYear - extractYear;
    var agehaveMonth = Math.abs(currentMonth- extractMonth);          //converting any negative value to positive

    document.getElementById('demo').innerHTML = Yearhave +' years ' + agehaveMonth +' months ';
    }




    var countDownDate = new Date("Jul 24, 2024 11:21:00").getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if(distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            window.open("luanchscreen.html");
        }

    },1000);


