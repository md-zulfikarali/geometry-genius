function rectangularCalculateButton() {
    // rectangle width input
    const rectangleWidthInput = document.getElementById('rectangle-width-input');
    const widthInputText = rectangleWidthInput.value;
    const width = parseFloat(widthInputText);
    // console.log(width);
    // rectangle length input
    const rectangleLengthInput = document.getElementById('rectangle-length-input');
    const lengthInputText = rectangleLengthInput.value;
    const length = parseFloat(lengthInputText);
        // console.log(typeof length);
        // rectangle area calculate
        const area = width * length;
        // console.log('Rectangle Area:', area); 
        // rectangle area value
        const rectangleAreaSpan = document.getElementById('rectangle-area-span');
        rectangleAreaSpan.innerText = area;
        // console.log(rectangleAreaSpan);



}