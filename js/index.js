var maintext = document.getElementById('Main-text');

maintext.innerHTML = localStorage.getItem('Main-text');
if(localStorage.getItem('Main-text')===null)
{
    maintext.innerHTML = 'All The Cars You Need Are Under Your Serve';
}
else
{
    maintext.innerHTML = localStorage.getItem('Main-text');
}