document.addEventListener("DOMContentLoaded", init);

function init() {
  mostrarCoches();
}

function coche(pMatricula, pMarca, pModelo, pPropietario) {
  return {
    matricula: pMatricula,
    marca: pMarca,
    modelo: pModelo,
    propietario: pPropietario,
  };
}

function persona(pNombre, pApellidos, pDireccion) {
  return {
    nombre: pNombre,
    apellidos: pApellidos,
    direccion: pDireccion,
  };
}

/*Personas*/

const miguel = persona("Miguel", "Lorenzo Almeida", "Calle de la alegria");
const naira = persona("Naira", "Falcón Álamo", "Calle Cuba");
const gabriel = persona("Gabriel", "Pérez Rodríguez", "Calle Marie Curie");
const isi = persona("Isi", "Cabrera Miranda", "Calle Juan Pablo Segundo");
const hugo = persona("Hugo", "Ortega Cano", "Calle Zambomba");
const pedro = persona("Pedro", "Lorenzo Cabrera", "Calle Tabaiba");
const sandra = persona("Sandra", "Caballero Figueroa", "Calle Algo");
const omar = persona("Omar", "Pérez Toro", "Calle Folias");


/*Coches*/

const alfaRomeo = coche("1111", "Alfa Romeo", "Giulietta", miguel);
const dacia = coche("2222", "Dacia", "Dokker", naira);
const ferrari = coche("3333", "Ferrari", "California", gabriel);
const ford = coche("4444", "Ford", "EcoSport", isi);
const jaguar = coche("5555", "Jaguar", "F-Type", hugo);
const audi = coche("6666", "Audi", "TT Coupé", pedro);
const bmw = coche("7777", "BMW", "i8", sandra);
const bugati = coche("8888", "Bugatti", "Chiron", omar);

const coches = [alfaRomeo, dacia, ferrari, ford, jaguar, audi, bmw, bugati];

function mostrarCoches() {
  // console.log('hola')
  const contenedor = document.querySelector(".contenedor");
  coches.forEach((coche) => {
    contenedor.innerHTML += `
        <div class="tarjeta">
            <div class="coche">
                <p>Marca: ${coche.marca}</p>
                <p>Modelo : ${coche.modelo}</p>
                <p>Matricula : ${coche.matricula}</p>
            </div>
            <div class="propietario">
                <p>Propietario: ${coche.propietario.nombre}</p>
                <p>Apellidos: ${coche.propietario.apellidos}</p>
                <p>Dirección : ${coche.propietario.direccion}</p>
            </div>
        </div>
        `;
  });
}
