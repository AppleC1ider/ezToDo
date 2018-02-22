var toDos = [];

var toClick = document.querySelector(".do-input");


//========== adding on click when you press the enter button =========
var bef = document.getElementById(".to-do");
bef.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      toClick.click();
    }
});

 function sure(){
//====== adds to do item to the array ========
  var toDo = document.querySelector(".to-do").value;
  toDos.push(toDo);
  var br = document.createElement("br");
  var newElement = document.createElement('li');
   newElement.innerHTML = toDos[toDos.length-1];
   // adds a class to the to-do item
   newElement.classList.add("unfinished" );
  var order = document.querySelector('#toDo');
  order.appendChild(newElement);
  var input = document.createElement("input");
  input.type = 'checkbox';
  input.class= 'unchecked';
  order.insertBefore(input,newElement);
  order.appendChild(br);
  console.log(toDos);
}
