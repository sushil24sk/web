let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/L1.png') {
      myImage.setAttribute ('src','images/labrador2.png');
    } else {
      myImage.setAttribute ('src','images/L1.png');
    }
}