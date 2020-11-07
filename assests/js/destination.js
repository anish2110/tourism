function readMore(place){
    document.getElementById('sariska').style.display = 'none';
    document.getElementById('siliserh').style.display = 'none';
    document.getElementById('bhangarh').style.display = 'none';
    document.getElementById('bala-quila').style.display = 'none';
    
    document.getElementById(place).style.display = 'block';
    document.getElementById(place+'-btn').style.display = 'none';
    document.getElementById(place+'-p').style.display = 'block';
    document.querySelector('h3').style.marginTop = '3rem';
}