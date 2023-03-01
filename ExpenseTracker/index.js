
const button=document.getElementById('button');

function onsignup(event){
    event.preventDefault();
    const myobj={
 amount:document.getElementById('amount').value,
 description:document.getElementById('description').value,
 category:document.getElementById('category').value,
}
myobj_serialized=JSON.stringify(myobj);
    localStorage.setItem(document.getElementById('amount').value,myobj_serialized);
    const form=document.getElementById('form')
  const details=document.getElementById('details');
  const li =document.createElement('li')
  
  const span1=document.createElement('span');
  const span2=document.createElement('span');
  const span3=document.createElement('span');
  const buttontwo=document.createElement('button')
  const buttonthree=document.createElement('button')
  span1.textContent=document.getElementById('amount').value;
  span2.textContent=document.getElementById('description').value
  span3.textContent=document.getElementById('category').value
  buttontwo.textContent='EDIT'
  buttonthree.textContent='DELETE'
  li.appendChild(span1)
  li.appendChild(span2)
  li.appendChild(span3)
  li.appendChild(buttontwo);
  li.appendChild(buttonthree);
details.appendChild(li);
form.append(li)
function deletefnc(e){
    e.preventDefault();
    e.target.parentElement.remove();
    localStorage.removeItem(e.target.parentElement.firstChild.textContent)
    console.log();
}
function editfnc(e){
e.preventDefault();
const input1=document.getElementById('amount');
input1.value=e.target.parentElement.firstChild.textContent;
const input2=document.getElementById('description');
input2.value=e.target.parentElement.children[1].textContent;
const input3=document.getElementById('category');
input3.value=e.target.parentElement.children[2].textContent;
e.target.parentElement.remove();
}
  buttonthree.addEventListener('click',deletefnc);
  buttontwo.addEventListener('click',editfnc);
}
