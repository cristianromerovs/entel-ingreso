function prender(sw){
    var pic;
    if (sw ==0){
        pic = "../img/png/equipos.png"
        console.log('on');
    } else {
        pic = "../img/png/hogar.png"
        console.log('off');
    }
    document.getElementById('icon-tab').src = pic;
}