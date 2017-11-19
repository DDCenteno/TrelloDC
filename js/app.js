var botonAddList = document.getElementById('boxAdd-js');
var firstSpan = document.getElementById('initialSpan');
var principal = document.getElementById('container');
// ver. 0.0.1 mostrar añadir, ocultar y agregar formulario
botonAddList.addEventListener('click',function(event){
    console.log(botonAddList);
    /* al hacer click crear un elemento input dentro cambiando
    el div de color y agregandole un input para el ingreso
    del titulo de la nueva lista */
    botonAddList.style.backgroundColor = '#BDBDBD';
    botonAddList.style.color = 'gray';
    // creando un contenedor para el input y el boton
    var newInput = document.createElement('input');
    var newList = document.createElement('div');
    var botonSave = document.createElement('button');
    var botonClose = document.createElement('i');
    botonSave.textContent = 'Guardar';
    // agrega una clase para que obtenga estilos
    botonClose.setAttribute('class', 'fa fa-times');
    botonClose.setAttribute('id','btnClose');
    newInput.classList.add('inputStyle');
    botonSave.classList.add('botonStyle');
    newList.classList.add('divStyle');
    newInput.setAttribute('placeholder','Añadir una lista...');
    // elimina el div que tiene contenido boxAdd
    principal.removeChild(botonAddList);
    //agrega dentro del div padre un div nuevo de lista
    principal.appendChild(newList);
    //dentro de lista agrega el input y el boton
    newList.appendChild(newInput);
    newList.appendChild(botonSave);
    newList.appendChild(botonClose);
    /* funcion para que obtenga el valor del input
    ,guarde e imprima los elementos dentro */
    // ver. 0.0.2 al dar en guardar agregar el nuevo cuadro
    // añadir tarea
    botonSave.addEventListener('click', function(event){
      var textList = newInput.value; // el contenido del input
      // creando una Lista
      var newListWork = document.createElement('div');
      var titleList = document.createElement('p');
      var secondInput = document.createElement('p');
      var minimize = document.createElement('i');
      titleList.textContent=textList; // agregando el contenido en titleList
      titleList.setAttribute('class','titleStyle');
      minimize.setAttribute('class', 'fa fa-minus');
      minimize.setAttribute('id', 'minimize');
      secondInput.textContent = 'Añadir una tarea';
      // dentro del html
      newListWork.appendChild(titleList);
      titleList.appendChild(minimize);
      newListWork.appendChild(secondInput);
      principal.appendChild(newList);
      principal.insertBefore(newListWork,newList);
      // añadiendo clases 
      newListWork.setAttribute('class','newListStyle');
      secondInput.setAttribute('class', 'secondInput');
      newInput.value = '';
    
    // ver. 0.0.3 evento para que agreguen una tarea en secondInput
    // contenga un boton y textarea
      secondInput.addEventListener('click', function(event){
        // elementos nuevos
        var newTextArea = document.createElement('textarea');
        var botonInput = document.createElement('button');
        // clases y atributos 
        botonInput.setAttribute('class','botonStyle');
        newTextArea.setAttribute('class', 'textAreaStyle');
        botonInput.textContent = 'Añadir'; // contenido del boton
        // metiendo al html
        newListWork.appendChild(newTextArea);
        newTextArea.focus();
        newListWork.removeChild(secondInput);
        newListWork.appendChild(botonInput);
    
    // ver. 0.0.4 || focus al dar clic
    botonInput.addEventListener('click', function(){
        var newListItem = document.createElement('div');
        newListItem.classList.add('newListItemStyle');
        newListItem.textContent = newTextArea.value;
        newListWork.insertBefore(newListItem,newTextArea);
        newTextArea.focus();
        newTextArea.value = '';
      });
    });
  });
});