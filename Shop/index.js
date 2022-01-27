document.addEventListener("DOMContentLoaded", init);

function init() {
  showProducts();
  const get = document.querySelector(".get");
  get.addEventListener("click", compilation);
}

class Article {
  constructor(id, name, price, img) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getImg() {
    return this.img;
  }
}

const products = [
  {
    id: "01",
    name: "Altavoces",
    price: "20",
    img: "./img/ALTAVOCES.GIF",
  },
  {
    id: "02",
    name: "CD-ROM",
    price: "50",
    img: "./img/CDROM.GIF",
  },
  {
    id: "03",
    name: "Disquetera",
    price: "40",
    img: "./img/DISQUETERA.GIF",
  },
  {
    id: "04",
    name: "Dvd",
    price: "25",
    img: "./img/DVD.GIF",
  },
  {
    id: "05",
    name: "Fuente",
    price: "80",
    img: "./img/FUENTE.GIF",
  },
  {
    id: "06",
    name: "HD",
    price: "50",
    img: "./img/HD.GIF",
  },
  {
    id: "07",
    name: "Impresora",
    price: "56",
    img: "./img/IMPRESORA.GIF",
  },
  {
    id: "08",
    name: "Memoria",
    price: "20",
    img: "./img/MEMORIA.GIF",
  },
  {
    id: "09",
    name: "Micro",
    price: "115",
    img: "./img/MICRO.GIF",
  },
  {
    id: "10",
    name: "Micro AMD",
    price: "200",
    img: "./img/MICROAMD.GIF",
  },
  {
    id: "11",
    name: "Modem",
    price: "40",
    img: "./img/MODEM.GIF",
  },
  {
    id: "12",
    name: "Modem interno",
    price: "80",
    img: "./img/MODEMINTERNO.GIF",
  },
  {
    id: "13",
    name: "Ordenador 1",
    price: "500",
    img: "./img/ORDENADOR1.GIF",
  },
  {
    id: "14",
    name: "Ordenador2",
    price: "800",
    img: "./img/ORDENADOR2.GIF",
  },
  {
    id: "15",
    name: "Placa madre",
    price: "300",
    img: "./img/PLACAMADRE.GIF",
  },
  {
    id: "16",
    name: "Raton",
    price: "35",
    img: "./img/RATON.GIF",
  },
  {
    id: "17",
    name: "Scanner",
    price: "56",
    img: "./img/SCANNER.GIF",
  },
  {
    id: "18",
    name: "Teclado",
    price: "80",
    img: "./img/TECLADO.GIF",
  },
  {
    id: "19",
    name: "Tarjeta Gráfica AGP",
    price: "400",
    img: "./img/TGRAFICAAGP.GIF",
  },
  {
    id: "20",
    name: "Tarjeta Gráfica PCI",
    price: "600",
    img: "./img/TGRAFICAPCI.GIF",
  },
  {
    id: "21",
    name: "Tarjeta Red",
    price: "200",
    img: "./img/TRED.GIF",
  },
  {
    id: "22",
    name: "TSCSI",
    price: "300",
    img: "./img/TSCSI.GIF",
  },
  {
    id: "23",
    name: "Tarjeta de Sonido",
    price: "100",
    img: "./img/TSONDIDO.GIF",
  },
  {
    id: "24",
    name: "Web Cam",
    price: "40",
    img: "./img/WEBCAM.GIF",
  },
];

const productList = products.map((product) => {
  return new Article(product.id, product.name, product.price, product.img);
});

function showProducts() {
  const container = document.querySelector(".container");
  productList.forEach((product) => {
    container.innerHTML += `
        <article class="productos" data-price="${product.getPrice()}" data-name="${product.getName()}" data-id="${product.getId()}" data-img="${product.getImg()}">
        <article><img src="${product.getImg()}" class="${product.getId()}"></article>
        <section class="info"
        <p>${product.getId()}</p>
         <p>${product.getName()}</p>
         <p >${product.getPrice()}€</p>
         </section>
         <input type="number" min="0" max="50" class="quantity">
         </article>
         `;
  });
}

function compilation() {
  

  const sumaryAccount = [];
  const products = document.querySelectorAll(".productos");

  products.forEach((producto) => {
    const quantity = isNaN(parseFloat(producto.querySelector("input").value))
      ? 0
      : producto.querySelector("input").value;
    

    const item = {
      quantity: quantity,
      name: producto.dataset.name,
      price: producto.dataset.price,
      img: producto.dataset.img,
    };

    if (quantity > 0) {
      sumaryAccount.push(item);
    }

  });


  const date = new Date();
  date.setTime(date.getTime() + (60*60*1000));


  document.cookie = `sumaryAccount=${JSON.stringify(sumaryAccount)}; ${date.getTime()}; path=/; secure;`;
  location.replace("cart.html");
}


