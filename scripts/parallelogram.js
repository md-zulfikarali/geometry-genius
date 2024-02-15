function parallelogramCalculateButton(){
    // parallelogram base
    const parallelogramBaseInput = document.getElementById('parallelogram-base-input');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    // console.log(base);
    // parallelogram width
    const parallelogramWidthInput = document.getElementById('parallelogram-width-input');
    const parallelogramWidthText = parallelogramWidthInput.value;
    const width = parseFloat(parallelogramWidthText);
    // console.log(width);
    // Parallelogram area
    const area = base * width;
    // console.log('Parallelogram area is:',area)
    // parallelogram span area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area-span');
    parallelogramAreaSpan.innerText = area;
    // console.log(parallelogramAreaSpan);
}