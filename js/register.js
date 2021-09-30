const submitbutton = document.getElementById('Register-button');

submitbutton.addEventListener("click" ,()=> {

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let usernameinput = document.getElementById("username");
    let passwordinput = document.getElementById("password");
    let email = document.getElementById('email');

    let accounts = JSON.parse(localStorage.getItem("accounts"))||[];
    // create an object and store all these items inside it
    let newaccount = {
        username: usernameinput.value ,
        password: passwordinput.value ,
        first_name: fname.value ,
        last_name: lname.value ,
        emailinput : email.value,
    }
    //add it to the accounts array
    accounts.push(newaccount);
    localStorage.setItem("accounts",JSON.stringify(accounts));  
    // when you finish the log in page should open
    location.href = "./signin.html";



})