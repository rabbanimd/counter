
var x = setInterval(()=>{
    const el = document.getElementById("time");
    const days_el = document.getElementById('days');
    const hours_el = document.getElementById('hours');
    const minutes_el = document.getElementById('minutes');
    const seconds_el = document.getElementById('seconds');
    const targetDays = 90;

    var start_time = new Date("apr 25, 2023 00:00:00").getTime();

    var deadLine = start_time + targetDays * 24*60*60 *1000;

    var remaining_time = deadLine - new Date().getTime();
    console.log(remaining_time);
    if(remaining_time <= 0) {
        document.getElementById("hero").innerText="EXPIRED";
        clearInterval(x);
    }

    var days = Math.floor(remaining_time/(1000 * 60 * 60 * 24));
    var hours = Math.floor((remaining_time % (1000 * 60*60*24))/(1000*60*60));
    var minutes = Math.floor((remaining_time % (1000 * 60*60))/(1000*60));
    var seconds = Math.floor((remaining_time % (1000 * 60))/(1000));


    days_el.innerText=days+"D"
    hours_el.innerText=hours+":";
    minutes_el.innerText=minutes+":";
    seconds_el.innerText=seconds;
}, 1000);
