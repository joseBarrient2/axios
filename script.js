//import {axios} from 'axios';
/*const btnShow = document.getElementById('btn_mostrar');
const loader =  document.getElementById('loader');
const boxData = document.querySelector('.info');
const boxError = document.querySelector('.msj-error');*/
const axios = require('axios');

//btnShow.addEventListener('click',obtenerUsruarios);

async function obtenerUsruarios(e){
    //console.log('users');
    //e.preventDefault();
    loader.classList.add('show');
    try{
         const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
         //const datos = await request.json();
         console.log(data);
    }
    catch(error){
        //printError(error);
        console.log(error.message);
    }
    finally{
        //loader.classList.remove('show');
        //boxData.style.visibility = 'visible';   
        console.log('game over');
    }
     
}
/*
function imprimeDatos(datos){
    
    for(info in datos){
        boxData.innerHTML += `
        <article class="item">${datos[info].id}</article>
        <article class="item">${datos[info].name}</article>
        <article class="item">${datos[info].username}</article>
        <article class="item">${datos[info].email}</article>
        <article class="item">${datos[info].address.street}</article>
        <article class="item">${datos[info].phone}</article>
        <article class="item">${datos[info].website}</article>
        <article class="item">${datos[info].company.name}</article>
        `;
    }
    btnShow.disabled = true;  
}

function printError(error){
    //boxError.innerHTML = err;
    //console.log('herror : '+ error.message);
}*/
obtenerUsruarios();