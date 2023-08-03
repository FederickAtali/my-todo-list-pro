

//creating a close button to append in everylist items
var myTodoList  = document.getElementsByTagName("LI");
var i;
for(i = 0; i< myTodoList.length; i++){

    var span = document.createElement("SPAN");
    var txt =  document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myTodoList[i].appendChild(span);
}


//when clicked a close button, the current todos will be hidden
var close = document.getElementsByClassName("close");
var i;
 function todoList(){
for( i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var parentItem = this.parentElement;
        parentItem .style.display = "none";
    }
}
};

//Add a "checked symbol when clicking on a todo item"
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
      ev.target.classList.toggle('checked');
    }
},false);


//Create a new list items when clicking on the "Add" button
function newTodoElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputHere").value;
   var t = document.createTextNode(inputValue);
   li.appendChild(t);

   if(inputValue === ' '){
    //you can't submit an empty input field
    alert("enter an item please!");
   }else{
    //Add the enter todo
    document.getElementById("present-todo").appendChild(li);
   }
   document.getElementById("inputHere").value = " ";

   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className   = 'close';
   span.appendChild(txt);
   li.appendChild(span);

   //adding a close button to the newly added todo.
    todoList();
}