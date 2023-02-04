var form=document.getElementById('addForm');
var itemList=document.getElementById('items');


form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);


function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;

    //create new li
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item';
   //Add text 
   li.appendChild(document.createTextNode(newItem));


   var deleteBtn=document.createElement('button')
var editBtn=document.createElement('button');

   deleteBtn.className='btn btn-danger btn-sm float-right delete';
editBtn.className='btn btn-primary btn-sm float-right edit'

   deleteBtn.appendChild(document.createTextNode('X'));
   editBtn.appendChild(document.createTextNode('EDIT'));

   li.appendChild(deleteBtn);
li.appendChild(editBtn);

   itemList.appendChild(li);

   


}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
