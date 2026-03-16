'use strick';

function getElementWidth(content, padding, border){
    const parsedContent = Number.parseFloat(content);
    const parsedPadding = Number.parseFloat(padding); 
    const parsedBorder = Number.parseFloat(border); 
    const totalWidth = Number.parseInt(parsedContent + (parsedPadding + parsedBorder) * 2);
    return totalWidth;
}