// //EXAMINE THE DOCUMENT OBJECT

// //console.dir(document);
// // 
// // console.log(document.images)

// var headerTitle=document.getElementById('header-title');
 //var header=document.getElementById('header-title');
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

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='hello';
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='yellow'

// //items.style.backgroundColor='#f4f4f4'

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4'
// }



// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='hello';
// li[1].style.fontWeight='bold'
// li[1].style.backgroundColor='yellow'

//items.style.backgroundColor='#f4f4f4'

// for(var i=0;i<li.length;i++){
// li[i].style.backgroundColor='#f4f4f4';
// }

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='hello world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color="blue"

var seconditem=document.querySelector('.list-group-item:nth-child(2');
seconditem.style.color="coral";

//QUERYSELECTOR
var titles=document.querySelectorAll('.title');
console.log(titles);

var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
    // even[i].style.backgroundColor='#ccc';
}

seconditem.style.backgroundColor='green';
//seconditem.style.display='none'


