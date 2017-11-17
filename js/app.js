var botonAddList = document.getElementById('boxAdd-js');
var firstSpan = document.getElementById('initialSpan');
var principal = document.getElementById('container');
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
    botonSave.textContent = 'Guardar';
    // agrega una clase para que obtenga estilos
    newInput.classList.add('inputStyle');
    botonSave.classList.add('botonStyle');
    newList.classList.add('divStyle');
    newInput.setAttribute('placeholder','Añadir una lista...');
    // elimina al span que tiene contenido boxAdd
    botonAddList.removeChild(firstSpan);
    //agrega dentro del div padre un div nuevo de lista
    botonAddList.appendChild(newList);
    //dentro de lista agrega el input y el boton
    newList.appendChild(newInput);
    newList.appendChild(botonSave);
    /* funcion para que obtenga el valor del input
    ,guarde e imprima los elementos dentro */
    botonAddList.addEventListener('click',function(event){
        var titleText = newInput.value;
        /* al darle save deberia de eliminar
        el input y guardarlo en un div como
        titulo arriba */
        var newContainer = document.createElement('div');
        var titlePrincipal = document.createElement('p');
        var secondInput = document.createElement('p');
        /* insertar texto */
        titlePrincipal.textContent = titleText;
        secondInput.classList.add('titleStyle');
        /* metiendo al html */
        newContainer.appendChild(titlePrincipal);
        newContainer.appendChild(secondInput);
        principal.appendChild(newContainer);
        principal.appendChild(newContainer,newList);
    });
    
});