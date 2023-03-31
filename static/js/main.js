// ajax
document.addEventListener('DOMContentLoaded', () =>{

    document.querySelector('#form').onsubmit = ()=>{
        
        const request = new XMLHttpRequest()
        const nombreInput = document.querySelector('#name-input').value;

        request.open('POST','/');

        request.onload = () =>{

        const data = JSON.parse(request.responseText);

        if (data.success){
            const id = data.id;
            const imagen = data.imagen;
            const nombre = data.nombre;
            const altura = data.altura;
            const peso = data.peso;
            const tipo =  data.tipo;

            document.querySelector('#imagen-pokemon').setAttribute('src',`${imagen}`);
            document.querySelector('.nombre-pokemon').innerHTML =  nombre;
            document.querySelector('#altura-pokemon').innerHTML =  altura;
            document.querySelector('#peso-pokemon').innerHTML =  peso;
            document.querySelector('#type-screen').innerHTML =  tipo;
            document.querySelector('#id-screen').innerHTML =  id;
        }
        else{
            alert(data.mensaje);  
           
        }


        }

        const data = new FormData();

        data.append('name-input', nombreInput);

        request.send(data);


        return false;
    };
});