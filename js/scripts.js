var toDos = [];

var toClick = document.querySelector(".do-input");

 function sure(){

  var toDo = document.querySelector(".to-do").value;
  toDos.push(toDo);
  var br = document.createElement("br");
  var newElement = document.createElement('li');
   newElement.innerHTML = toDos[toDos.length-1];
   newElement.classList.add("unfinished");
  var order = document.querySelector('#toDo');
  order.appendChild(newElement);
  var input = document.createElement("input");
  input.type = 'checkbox';
  order.insertBefore(input,newElement);
  order.appendChild(br);
  console.log(toDos);


}
