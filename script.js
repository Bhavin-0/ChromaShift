const btn = document.getElementById('changeColorBtn');
const colorCode = document.createElement('p');
const toggle = document.getElementById('toggleMode');

document.body.appendChild(colorCode);

function generateRandomColor(){
    return `#${(Math.floor(Math.random()*16777215).toString(16)).padStart(6,'0')}`;
}

function generateRandomGradient(){

    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const gradientText = `Gradient : ${color1} → ${color2}`;
    
    //Apply gradient
    document.body.style.background = `linear-gradient(to bottom,${color1},${color2})`

    //shows gradient color on the screen
    colorCode.textContent = gradientText;
}

function generateRandomSolidColor(){
    const solidColor = generateRandomColor();
    const solidText = `Current Color : ${solidColor}`;

    document.body.style.background = solidColor;
    colorCode.textContent = solidText;
}

btn.addEventListener("click",()=>{
    if(toggle.checked){
        generateRandomGradient();
        console.log("Gradient Mode is ON ✅");
    }else{
        generateRandomSolidColor();
        console.log("Solid Color Mode is ON 🎨");
    }
});