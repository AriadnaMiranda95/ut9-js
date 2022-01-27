document.addEventListener("DOMContentLoaded", init);

function init() {
    mostrarCarta();
}


function mostrarCarta(){
    const resume = document.querySelector('.resume');
    const totalprice = document.querySelector('.totalprice');
    const cookies = (document.cookie).split(";"); // recuperamos todas las cookies y las almacenamos en un array
    
    const cookie = cookies.filter(element =>{ // filtramos el array de cookies para que nos devuelva el resumen de la compra
        return element.includes("sumaryAccount")
    })

    const getValues = cookie[0].split("sumaryAccount="); // recuperamos los valores, eliminando el nombre y el =
    const datos = JSON.parse(getValues[1]);
    console.log(datos)
    
    let total = 0;
    
    datos.forEach(dato=>{
        total += dato.quantity * dato.price;
        console.log(total)
       resume.innerHTML += `
       <section class='resumeProducto'>
       <div class="data">
       <p> Cantidad: ${dato.quantity} </p>
       <p> Nombre producto : ${dato['name']} </p>
       <p> Precio producto : ${dato.quantity} x ${dato.price}€</p>
       </div>
       <figure><img src="${dato['img']}" alt="imagenProducto"></figure>
       </section>
       `

    })

    totalprice.innerHTML= `
    <p> TOTAL : ${total} €</p>
    `



    

    


}

