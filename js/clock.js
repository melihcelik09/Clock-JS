function showTime(){
    let clock=document.querySelector("#myClock")
    var d = new Date()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()
    var daysList=["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    var days=daysList[d.getDay()]
    if(hours<10){
    hours=`0${hours}`
    }
    if(minutes<10){
    minutes=`0${minutes}`
    }
    if(seconds<10){
    seconds=`0${seconds}`
    }
    clock.innerHTML=`${hours}:${minutes}:${seconds} ${days}`
}
setInterval(showTime,1000)
let input=prompt("Adınız nedir?")
let username=document.querySelector("#myName")
username.innerHTML=`${input}`