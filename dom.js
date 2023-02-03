// //EXAMINE THE DOCUMENT OBJECT

// //console.dir(document);
// // 
// // console.log(document.images)

// var headerTitle=document.getElementById('header-title');
 var header=document.getElementById('header-title');
// //console.log(headerTitle);
// //headerTitle.textContent='Hello';
// //console.log(headerTitle.innerText)
// //headerTitle.innerHTML='<h3>Hello</h3>'
// header.style.borderBottom='solid 3px #000'
// var header1=document.querySelector('.title')
// header1.style.fontWeight='bold';
// header1.style.color='green';
// console.log(header.textContent)
// console.log(header.innerText);

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello';
items[1].style.fontWeight='bold'
items[1].style.backgroundColor='yellow'

//items.style.backgroundColor='#f4f4f4'

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4'
}

items[2].style.backgroundColor='green'
for(var i=0;i<items.length;i++){
items[i].style.fontWeight='bold';
}
