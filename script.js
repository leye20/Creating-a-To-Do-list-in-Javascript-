var myForm = document.getElementById( 'myform' );

myForm = document.addEventListener( 'submit', function ( event ) {
    event.preventDefault();

    var toDoList = document.getElementById( 'tasklist' );

    var toDoListValue = document.getElementById( 'todolist' ).value;

    var newRow = document.createElement( 'checkbox' + 'li');
    newRow.textContent = toDoListValue;
    toDoList.appendChild( newRow );
        
});
