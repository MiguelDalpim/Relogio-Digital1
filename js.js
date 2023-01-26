function Showtime (){
    var data = new Date()
    var h = data.getHours()
    var m = data.getMinutes()
    var s = data.getSeconds()
    var session = "AM";


    if(h == 0){
        h=12
    }else{
        if(h>12){
            h=h - 12
            session="PM"
        }
    }
    h = (h<10) ? "0" + h : h
    m = (m<10) ? "0" + m : m
    s = (s<10) ? "0" + s : s
    var time = h + ":" + m + ":" + s + session
    document.getElementById('myclockhours').innerHTML = time
    document.getElementById('myclockhours').textContent = time
    
    setTimeout(Showtime, 1000)
}
Showtime()