let defaultBgColor = "white";
let defaultTextColor = "white";
let defaultButtonColor = "rgb(0, 191, 255)";
let image1 = "image1.png"; 
let image2 = "image2.png"; 

function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function changeBackground() {
    document.body.style.backgroundColor = getRandomColor();
}

function changeButtonTextColor() {
    let buttons = document.querySelectorAll("button");
    let color = getRandomColor();
    buttons.forEach(button => {
        button.style.color = color;
    });
}

function resetColors() {
    document.body.style.backgroundColor = defaultBgColor;
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.color = defaultTextColor;
        button.style.backgroundColor = defaultButtonColor;
    });
}

function changeImage() {
    let img = document.getElementById("image");
    img.src = (img.src.includes(image1)) ? image2 : image1;
}
