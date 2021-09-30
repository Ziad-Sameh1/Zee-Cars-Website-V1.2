const updatebutton = document.getElementById("update-button");
const headlineinput =document.getElementById("headlineinput");

updatebutton.addEventListener ('click',()=>
 {
    if(headlineinput.value =='')
    {
        localStorage.setItem("Main-text",'All The Cars You Need Are Under Your Serve');
    }
    else
    {
        localStorage.setItem('Main-text',headlineinput.value);
        headlineinput.value='';
    }
}
)
//---------------------------
const change = document.getElementById('change');
const change2 = document.getElementById('change2');
const change3 = document.getElementById('change3');
const change4 = document.getElementById('change4');

const color = document.getElementById('color');
const body = document.body;
change.addEventListener('click', changeBG);
change2.addEventListener('click',changeBG_red);
change3.addEventListener('click',changeBG_green);
change4.addEventListener('click',changeBG_blue);


function changeBG(){
    const col1 = getRandomRGB(); 
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();

    const colorString = `RGB(${col1}, ${col2}, ${col3})`;
    body.style.background = colorString;
    color.innerText = colorString;
}
function changeBG_red(){
    const col1 = 200; 
    const col2 = 0;
    const col3 =0;

    const colorString = `RGB(${col1}, ${col2}, ${col3})`;
    body.style.background = colorString;
    color.innerText = colorString;
}
function changeBG_green(){
    const col1 = 0; 
    const col2 = 200;
    const col3 =0;

    const colorString = `RGB(${col1}, ${col2}, ${col3})`;
    body.style.background = colorString;
    color.innerText = colorString;
}
function changeBG_blue(){
    const col1 = 0; 
    const col2 = 0;
    const col3 =200;

    const colorString = `RGB(${col1}, ${col2}, ${col3})`;
    body.style.background = colorString;
    color.innerText = colorString;
}
function getRandomRGB(){
return Math.floor(Math.random() * 256);
}