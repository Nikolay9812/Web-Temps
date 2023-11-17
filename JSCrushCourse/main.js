const myForm = document.querySelector('#my-form');
const nameImput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const useerList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameImput.value === ''||emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'

        setTimeout (() => msg.remove(), 3000);
    }else{
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(`${nameImput.value} : ${emailInput.value}`));

        useerList.appendChild(li);

        nameImput.value='';
        emailInput.value='';
    }
}

//the example above will allow us on evru sumbit to write down name and email
//but on refresh it will disapiar becaus we are not working with any DataBase
