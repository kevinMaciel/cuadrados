function rgbToHex(color) {
    color = ""+ color;
    if (!color || color.indexOf("rgb") < 0) {
        return;
    }

    if (color.charAt(0) == "#") {
        return color;
    }

    var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
        r = parseInt(nums[2], 10).toString(16),
        g = parseInt(nums[3], 10).toString(16),
        b = parseInt(nums[4], 10).toString(16);

    return "#"+ (
        (r.length == 1 ? "0"+ r : r) +
        (g.length == 1 ? "0"+ g : g) +
        (b.length == 1 ? "0"+ b : b)
    );
}


function estado(id)
{
    var cuadrado = document.getElementById(id);
    
    let compStyles = window.getComputedStyle(cuadrado);
    var color = compStyles.getPropertyValue('background-color');
    
    color = rgbToHex(color);

    var colorToCompare = '#9147ff';

    if(color == colorToCompare)
    {
        alert("Usted a adivinado el color!")
    }else{
            alert("No ha adivinado, intentalo nuevamente!");
         }
         

}


