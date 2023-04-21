const url='https://crudcrud.com/api/39c88eaab759472b86d41d7f14af602b/appointmentData'
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
axios.post(url,myObj)
.then((resolve)=>console.log(resolve))
.catch((err)=>console.log(err))

}

function deletefnc(e){
    e.preventDefault()
    axios.delete(`${url}/${e.target.parentElement.id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    e.target.parentElement.remove()
}

function editfnc(e){
    e.preventDefault();
   const name=document.getElementById('name');
   const email=document.getElementById('email');
   const phonenumber=document.getElementById('phone')
   const _id=e.target.parentElement.id;
   name.value=(e.target.parentElement.children[0].textContent)
   email.value=JSON.stringify(e.target.parentElement.children[1].textContent)
   phonenumber.value=e.target.parentElement.children[2].textContent;
   e.target.parentElement.remove();
    axios.delete(`${url}/${e.target.parentElement.id}`)
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
    let span1=document.createElement('span');
    let span2=document.createElement('span');
    span.textContent=val.name;
    li.appendChild(span)
    span1.textContent=val.email;
    li.appendChild(span1)
    span2.textContent=val.phonenumber;
    li.appendChild(span2)
    let button=document.createElement('button');
    let button1=document.createElement('button');
    button.textContent='DELETE'
    button1.textContent='EDIT'
    button.addEventListener('click',deletefnc)
    button1.addEventListener('click',editfnc)
    li.appendChild(button);
    li.appendChild(button1);
    ul.appendChild(li);
    form.appendChild(ul);;
}


window.addEventListener('DOMContentLoaded',()=>{
    axios.get(url)
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