var list = document.getElementById('items');
var entry = document.getElementById('myform');
entry.onsubmit = function(event) {
event.preventDefault();
var task = document.getElementById('task').value;
var entry = document.createElement('li');
entry.appendChild(document.createTextNode(task));
list.appendChild(entry);
}