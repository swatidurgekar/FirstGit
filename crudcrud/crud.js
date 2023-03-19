
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
axios.post('https://crudcrud.com/api/df19064585b647438d4101634a496a21/appointmentData',myObj)
.then((resolve)=>console.log(resolve))
.catch((err)=>console.log(err))


//localStorage.setItem('form',myObj_serialized);
}

function deletefnc(e){
    e.preventDefault()
    console.log( );
    axios.delete(`https://crudcrud.com/api/df19064585b647438d4101634a496a21/appointmentData/${e.target.parentElement.id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    e.target.parentElement.remove()
}

function showUserOnScreen(val){
    const form=document.getElementById('form');
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    li.id=val._id
    let span=document.createElement('span');
    span.textContent
    li.textContent=JSON.stringify(val);
    let button=document.createElement('button');
    button.textContent='DELETE'
    button.addEventListener('click',deletefnc)
    li.appendChild(button);
    ul.appendChild(li);
    form.appendChild(ul);
    console.log(val._id);
}


window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/df19064585b647438d4101634a496a21/appointmentData')
    .then((resolve)=>{
        console.log(resolve);
        for(let i=0;i<resolve.data.length;i++){
            showUserOnScreen(( resolve.data[i]))
        }
    })
    .catch((error)=>{
        console.log(error);
    })
})