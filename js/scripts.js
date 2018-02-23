var toDos = [];
var fin = [];
var toClick = document.querySelector(".do-input");


//========== adding on click when you press the enter button =========
var bef = document.querySelector(".to-do");
bef.addEventListener("keydown", function(event) {

    if (event.keyCode === 13) {
      toClick.click();
      event.preventDefault();
    }
});
var n = 0;
 function sure(){
//====== adds to do item to the array ========
n++;

  var toDo = document.querySelector(".to-do").value;
  toDos.push(toDo);
  var newElement = document.createElement('li');
   // newElement.innerHTML = toDos[toDos.length-1];
   newElement.innerHTML = `<p class='inline-block'> ${toDo} </p>`;
   // adds a class to the to-do item
   newElement.classList.add("unfinished"+n );
  var order = document.querySelector('#toDo');
  order.appendChild(newElement);
  var input = document.createElement("input");
  input.type = 'checkbox';
  input.name = 'listItem';
  input.classList.add("unfinished"+ n , "box");
  newElement.appendChild(input);
  console.log(toDos);
  //
  input.addEventListener("click", function(){
    var indexToSplice = toDos.indexOf(this.previousSibling.textContent.toString());
    console.log(indexToSplice);
    console.log(this.previousSibling.textContent);
  })
}
