const display=document.querySelector('#display');
const buttons=document.querySelectorAll('button');

buttons.forEach((items)=>{
    items.onclick =()=>{
        if(items.id=='clear')
        {
            display.textContent='';

        }
        else if(items.id=='backspace')
        {
            let string=display.textContent.toString();
            display.textContent=string.substr(0,string.length-1);
        }
        else if(display.textContent != '' && items.id == 'equal')
        {
            display.textContent=eval(display.textContent);
        }
        else if(display.textContent=='' && items.id=='equal')
        {
            display.textContent='Empty';
            setTimeout(()=>(display.textContent=''),2000);
        }
        else
        {
            display.textContent+=items.id;
        }
    
    }
});

const themeToggleBtn=document.querySelector('.theme-toggler');
const calculator=document.querySelector('.calculator');
const toggleIcon=document.querySelector('.toggler-icon') 
let isdark=true;
themeToggleBtn.onclick=()=>{
    themeToggleBtn.classList.toggle('active');
    calculator.classList.toggle('dark');
    // isdark= !isdark;
}