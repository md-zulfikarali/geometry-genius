function getRhombusAreaById(){
    const rhombusD1 = rhombusInputValueText('rhombus-d1-input');
    const rhombusD2 = rhombusInputValueText('rhombus-d2-input');
    const area = 0.5 * rhombusD1 * rhombusD2;
    setRhombusArea('rhombus-area', area);
    
}

function rhombusInputValueText(rhombusElementId){
    const rhombusInputText = document.getElementById(rhombusElementId);
    const inputText = rhombusInputText.value;
    const value = parseFloat(inputText);
    return value;
}

function setRhombusArea(elementId, area){
    const rhombusArea = document.getElementById(elementId);
    rhombusArea.innerText = area;
}