const submitbutton = document.getElementById("submit-button");
const accounts = JSON.parse(localStorage.getItem("accounts"))||[];

submitbutton.addEventListener("click",()=>{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let found = false;
for(let i = 0 ; i < accounts.length;i++)
{
    if(accounts[i].username == username)
    {
        found=true;
        if(accounts[i].password==password)
        {
            localStorage.setItem("currentuser",JSON.stringify(accounts[i]));
            location.href="./index.html";
            break;
        }
        else
        {
            alert("wrong Password")
            break;
        }
    }
  
    
}
if(!found)
{
    alert("User not found in our system")
}
})