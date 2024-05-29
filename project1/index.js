const buttons=document.querySelectorAll('.button');
const x =document.querySelector("body");

buttons.forEach(function (button) {
    button.addEventListener("click",function(e){
    if (e.target.id === 'grey')
    {
        x.style.backgroundColor=e.target.id;
    }
    if (e.target.id === 'blue')
    {
        x.style.backgroundColor=e.target.id;
    }
    if (e.target.id === 'red')
    {
        x.style.backgroundColor=e.target.id;
    }
    if (e.target.id === 'yellow')
    {
        x.style.backgroundColor=e.target.id;
    }
    if (e.target.id === 'black')
    {
        x.style.backgroundColor=e.target.id;
    }
    });
});