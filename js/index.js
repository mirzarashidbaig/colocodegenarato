
const getColor = ()=>{
    const randomNum = Math.floor(Math.random()*16777251);
    const randomCode = "#" + randomNum.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("code-get").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener(
    'click', getColor
) 


getColor()