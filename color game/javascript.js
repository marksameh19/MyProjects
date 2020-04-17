var squares = document.querySelectorAll(".square");
var picked = document.querySelector("#colorDisplay");
var title = document.querySelector("#t");
var newColors = document.querySelector("#generate");
var message =document.querySelector("#message");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var color_num = 6;
var colors = ["rgb(255, 0, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(0, 255, 0)","rgb(255, 255, 0)","rgb(255, 0, 255)"];
generateColors(color_num);
picked.textContent = pickColor(color_num);
for(var i = 0 ;i<squares.length ; i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",compare)
}


newColors.addEventListener("click",function(){
    generateColors(color_num);
    newColors.textContent = "NEW COLORS";
    picked.textContent = pickColor(color_num);
    title.style.backgroundColor = "steelblue";
    for(var i = 0 ;i<color_num ; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",compare)
    }
    message.textContent = "";
});
easy.addEventListener("click",function(){
    color_num = 3;
    easy.classList.add("selected");
    newColors.textContent = "NEW COLORS";
    hard.classList.remove("selected");
    title.style.backgroundColor = "steelblue";
    generateColors(color_num);
    picked.textContent = pickColor(color_num);
    for(var i = 0 ;i<color_num ; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",compare)
    }
    squares[3].style.backgroundColor = "rgb(35, 35, 35)";
    squares[4].style.backgroundColor = "rgb(35, 35, 35)";
    squares[5].style.backgroundColor = "rgb(35, 35, 35)";
    message.textContent = "";
});
hard.addEventListener("click",function(){
    color_num = 6;
    generateColors(color_num);
    easy.classList.remove("selected");
    hard.classList.add("selected");
    newColors.textContent = "NEW COLORS";
    title.style.backgroundColor = "steelblue";
    picked.textContent = pickColor(color_num);
    for(var i = 0 ;i<color_num ; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",compare)
    }
    message.textContent = "";
});

function compare()
{
    if(this.style.backgroundColor==picked.textContent)
    {
        title.style.backgroundColor=picked.textContent;
        message.textContent = "Correct!";
        newColors.textContent = "Play Again?";
        for(var i=0;i<color_num;i++)
        {
            squares[i].style.backgroundColor=picked.textContent;
        }
    }
    else
    {
        this.style.backgroundColor = "rgb(35, 35, 35)";
        message.textContent = "Try again :(";
    }
}
function pickColor(x)
{
    generated=Math.floor(Math.random()*x);
    return colors[generated];
}
function generateColors(x)
{
    for(var i=0 ;i<x;i++)
    {
       var r = Math.floor(Math.random()*256);
       var g = Math.floor(Math.random()*256);
       var b = Math.floor(Math.random()*256);
       var value = "rgb("+r+", "+g+", "+b+")";
       colors[i] = value;
    }
}