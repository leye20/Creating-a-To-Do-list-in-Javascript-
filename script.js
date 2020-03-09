var myForm = document.getElementById( 'myform' );

myForm = document.addEventListener( 'click', function ( event ) {
    event.preventDefault();

    var toDoList = document.querySelector( 'form > label > input' );

    var newRow = document.createElement( 'TD' );
    newCell.textContent = toDoListValue;
    newRow.appendChild( 'li' );
    
    var newCell = document.createElement( 'li' );
    newCell.textContent = newValue;
    newCell.appendChild( newCell );

});
