function modify_qtyblue(val) {

    var qtyblue = document.getElementById('qtyblue').value;
    var new_qtyblue = parseInt(qtyblue,10) + val;
    
    if (new_qtyblue < 0) {
        new_qtyblue = 0;
    }
    
    document.getElementById('qtyblue').value = new_qtyblue;
    return new_qtyblue;
}



function modify_qtyred(val) {

    var qtyred = document.getElementById('qtyred').value;
    var new_qtyred = parseInt(qtyred,10) + val;
    
    if (new_qtyred < 0) {
        new_qtyred = 0;
    }
    
    document.getElementById('qtyred').value = new_qtyred;
    return new_qtyred;

}

var audio = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_coin.wav" ) ;

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = false;