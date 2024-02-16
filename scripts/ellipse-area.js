function getEllipseAreaById(){
const ellipseA = ellipseInputAreaValue('ellipse-a-input');
const ellipseB = ellipseInputAreaValue('ellipse-b-input');
const pi = 3.14;
const area = pi * ellipseA * ellipseB;
setEllipseArea('ellipse-area',area);
    
}

function ellipseInputAreaValue(ellipseElementId){
    const inputAreaText = document.getElementById(ellipseElementId);
    const inputText = inputAreaText.value;
    const value = parseFloat(inputText);
    return value;
}

function setEllipseArea(ellipseAreaId, area){
    const ellipseArea = document.getElementById(ellipseAreaId);
    ellipseArea.innerText = area;
}