const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215) ; // making hexa decimal code
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode ;
    document.getElementById("color-code").innerText = randomCode ;
    document.getElementById("color-code").style.color = randomCode ;
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();