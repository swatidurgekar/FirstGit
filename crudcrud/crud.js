
const button1=document.getElementById('submit');
button1.addEventListener('click',submit)
console.log(button1);
function submit(e){
e.preventDefault();
const name=document.getElementById('name').value
const email=document.getElementById('email').value
const phonenumber=document.getElementById('phone').value
const myObj={
name,
email,
phonenumber

}
const myObj_serialized=JSON.stringify(myObj);
axios.post('https://crudcrud.com/api/6cbb6c090be24a5599e24f682796991c/appointmentData',myObj)
.then((resolve)=>console.log(resolve))
.catch((err)=>console.log(err))


//localStorage.setItem('form',myObj_serialized);
}

function showUserOnScreen(val){
    const form=document.getElementById('form');
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    li.textContent=val;
    ul.appendChild(li);
    form.appendChild(ul);
}


window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/6cbb6c090be24a5599e24f682796991c/appointmentData')
    .then((resolve)=>{
        console.log(resolve);
        for(let i=0;i<resolve.data.length;i++){
            showUserOnScreen(JSON.stringify(resolve.data[i]))
        }
    })
    .catch((error)=>{
        console.log(error);
    })
})