/*boton para menu desplegable*/
let nav_icon = document.querySelector(".nav-boton");
let menu_nav = document.querySelector(".menu-nav");

function delegar (e){
    menu_nav.classList.toggle("menu-nav_visible");
}

nav_icon.addEventListener("click",()=>{
    menu_nav.classList.toggle("menu-nav_visible");
});

document.addEventListener("click", (e)=>{
    if(e.target.matches("header ul, body div")){
        delegar(e);
    }
});


/*catalogo*/

const catalogo = {
  perro: {
    alimentacion: [
      { id:"ali-perro-1", nombre:"Pienso seco adulto Purina Pro Plan 5kg", precio:14.99, img:"media/piensosecoperro1.jpg" },
      { id:"ali-perro-2", nombre:"Pienso seco mini Pedigree 5kg", precio:14.99, img:"media/piensosecoperro3.jpg" },
      { id:"ali-perro-3", nombre:"Snack lata Friskies 100g", precio:9.50, img:"media/snackperro.jpg" },
      { id:"ali-perro-4", nombre:"snack cremoso pollo 100g", precio:8.30, img:"media/snackperro1.jpg" },
    ],
    higiene: [
      { id:"hig-perro-1", nombre:"Champú suave 250ml", precio:6.50, img:"media/champuperro.jpg" },
      { id:"hig-perro-2", nombre:"Pack cepillo y peine", precio:7.90, img:"media/cepilloperro.jpg" },
      { id:"hig-perro-3", nombre:"Toallitas húmedas especial patas", precio:3, img:"media/toallitaperro.jpg" },
      { id:"hig-perro-4", nombre:"Corta uñas para perros", precio:4.99, img:"media/cortauñaperro.jpg" },
      { id:"hig-perro-5", nombre:"Empapadores para perros 50 unidades(55x56cm),", precio:24.99, img:"media/empapadorperro1.jpg" },
      { id:"hig-perro-6", nombre:"Desinfectante unisex Antisept", precio:5.99, img:"media/desinfectanteperro1.jpg" },
      { id:"hig-perro-7", nombre:"Colonia perro sin alcohol", precio:5.99, img:"media/coloniaperro.jpg" },
    ],
    juguetes: [
      { id:"jug-perro-1", nombre:"Pelota resistente",  precio:3.20, img:"media/jugueteperro3.jpg" },
      { id:"jug-perro-2", nombre:"Hueso silicona", precio:2.99, img:"media/jugueteperro.jpg" },
    ],
    accesorios: [
      { id:"acc-perro-1", nombre:"Correa nylon", precio:5.50, img:"media/collarperro.jpg" },
      { id:"acc-perro-2", nombre:"Comedero inox", precio:5.60, img:"media/comederoperro.jpg" },
      { id:"acc-perro-3", nombre:"Arnés para perro", precio:11.99, img:"media/arnesperro.jpg" },
      { id:"acc-perro-4", nombre:"Cama extra comodidad de 100x90", precio:21.5, img:"media/camaperro.jpg" },
      { id:"acc-perro-5", nombre:"Chaleco de perro impermeable", precio:18.5, img:"media/ropaperro1.jpg" },
       { id:"acc-perro-6", nombre:"Transportin para perro", precio:31.50, img:"media/transportinperro.jpg" },
    ],
  },
  gato: {
    alimentacion: [
      { id:"ali-gato-1", nombre:"Pienso seco gato Friskies 5kg",  precio:16.50, img:"media/piensosecogato1.jpg" },
      { id:"ali-gato-2", nombre:"Lata Ultima (Fit y delicioso) 85g", precio: 1.20, img:"media/latagato1.jpg" },
      { id:"ali-gato-3", nombre:"Sobre pollo Whiskas 85g", precio: 2.30, img:"media/sobregato.jpg" },
      { id:"ali-gato-4", nombre:"Snack Partymix de Purina 60g", precio: 2.85, img:"media/snackgato1.jpg" },
    ],
    higiene: [
      { id:"hig-gato-1", nombre:"Champú suave Beaphar 250ml", precio:8.50, img:"media/champugato.jpg" },
      { id:"hig-gato-2", nombre:"Cepillo carda de plastico", precio:4.50, img:"media/cepillocardaplastico.jpg" },
      { id:"hig-gato-3", nombre:"Colonia fresca sin alcohol ", precio:6.50, img:"media/coloniagato.jpg" },
      { id:"hig-gato-4", nombre:"Desinfectante unisex Antisept", precio:5.99, img:"media/desinfectanteperro1.jpg" },
      { id:"hig-gato-5", nombre:"Arena Amigo, 5kg", precio:11.90, img:"media/arenagato1.jpg" },   
     ],
      
    juguetes: [
      { id:"jug-gato-1", nombre:"Pelota suave", precio:2.50, img: "media/juguetegato2.jpg" },
      { id:"jug-gato-2", nombre:"Caña con plumas", precio:3.80, img:"media/juguetegato3.jpg" },
      { id:"jug-gato-3", nombre:"Juego de pelotas interactivo y con sonido",  precio:12.99, img:"media/juguetegato5.jpg" },
      { id:"jug-gato-4", nombre:"Trepador con pelota", precio:14.99, img:"media/juguetegato4.jpg" },
    ],
    accesorios: [
      { id:"acc-gato-1", nombre:"Rascador pequeño", precio:15.90, img:"media/rascadorgato.jpg" },
      { id:"acc-gato-2", nombre:"Cama redonda", precio:18.40, img:"media/camagato.jpg" },
      { id:"acc-gato-3", nombre:"Collar con cascabel", precio:2.5, img:"media/collargato1.jpg" },
      { id:"acc-gato-4", nombre:"Comedero forma cara gato", precio:6.50, img:"media/comederogato.jpg" },
      { id:"acc-gato-5", nombre:"Comedero inteligente",  precio:18.50, img:"media/comederogato1.jpg" },
      { id:"acc-gato-6", nombre:"Transportin bolso novedad",  precio:24.99, img:"media/transportingato1.jpg" },
    ],
      
  },
};

const OFERTAS_DATA = {
  'oferta-pienso': {
    titulo: 'Pienso para perros - Marca Dogfy Diet(10kg)',
    precio: 15.20,
    img: 'media/ofertadogfy.jpg'
  },
  'oferta-gatos': {
    titulo: 'Pack ahorro para gatos(10kg de arena + 2 snacks de regalo)',
    precio: 14.99,
    img: 'media/arenaysnackoferta.jpg'
  },
  'oferta-accesorios': {
    titulo: 'Transportín rígido para mascotas',
    precio: 18.90,
    img: 'media/transportinoferta.jpg'
  }
};

/*SELECTORES*/
const $  = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];

const cartBtn     = $('#tm-cart-button');
const cartModal   = $('#tm-cart-modal');
const galModal    = $('#tm-gallery-modal');

const galTitle    = $('#gallery-title');
const galGrid     = $('#gallery-grid');

const cartList    = $('#cart-list');
const cartTotalEl = $('#tm-cart-total');

const cart = []; 

const offerModal   = document.getElementById('tm-offer-modal');
const offerTitle   = document.getElementById('offer-title');
const offerContent = document.getElementById('offer-content');


/*MODALES: abrir/cerrar + click fuera*/
function lockScroll(lock) { document.body.style.overflow = lock ? 'hidden' : ''; }

function openModal(m) {
  if (!m) return;
  m.hidden = false;
  m.setAttribute('aria-hidden', 'false');
  lockScroll(true);
}
function closeModal(m) {
  if (!m) return;
  m.hidden = true;
  m.setAttribute('aria-hidden', 'true');
  const algunoAbierto = $$('.modal, .tm-cart-modal').some(md => !md.hidden && md.getAttribute('aria-hidden') !== 'true');
  if (!algunoAbierto) lockScroll(false);
}

/*Cerrar al hacer click en el fondo (backdrop) o en el área vacía del modal*/
[galModal, cartModal,offerModal].forEach(modal => {
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    const clickEnFondo = e.target === modal || e.target.classList.contains('tm-cart-backdrop');
    if (clickEnFondo) closeModal(modal);
  });
});

/*ABRIR GALERÍA*/
function abrirGaleria(animal, cat) {
  const productos =
    (catalogo[animal] && catalogo[animal][cat]) || [];
  galTitle.textContent = `Productos de ${cat} (${animal})`;
  galGrid.innerHTML = productos.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.nombre}">
      <h4>${p.nombre}</h4>
      <p>€${p.precio.toFixed(2)}</p>
      <button class="add-to-cart"
              data-animal="${animal}"
              data-cat="${cat}"
              data-id="${p.id}">
        Añadir
      </button>
    </article>
  `).join('');

  openModal(galModal);
}

/*CARRITO*/
function addToCartBy(animal, cat, id) {
  const p = (catalogo[animal] && catalogo[animal][cat] || []).find(x => x.id === id);
  if (!p) return;
  const item = cart.find(x => x.id === p.id);
  if (item) item.qty += 1;
  else cart.push({ ...p, qty: 1 });
  updateCartCount();
}
function addOfferToCart(ofertaKey) {
  const d = OFERTAS_DATA[ofertaKey];
  if (!d) return;

  const id = `offer-${ofertaKey}`;
  const it = cart.find(x => x.id === id);

  if (it) {
    it.qty += 1;
  } else {
    cart.push({
      id,
      nombre: d.titulo,
      precio: d.precio,
      img: d.img,
      qty: 1
    });
  }

  updateCartCount();
  renderCart();
}

function renderCart() {
  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `<li>Tu carrito está vacío.</li>`;
  } else {
    cartList.innerHTML = cart.map(it => `
      <li class="tm-cart-line">
        <img src="${it.img}" alt="${it.nombre}">
        <div class="tm-cart-info">
          <h4>${it.nombre}</h4>
          <div class="tm-cart-price">€${it.precio.toFixed(2)}</div>
          <div class="tm-cart-qty">
            <button class="cart-minus"  data-id="${it.id}">-</button>
            <span class="tm-qty tm-cart-num">${it.qty}</span>
            <button class="cart-plus"   data-id="${it.id}">+</button>
            <button class="tm-remove cart-remove" data-id="${it.id}">Eliminar</button>
          </div>
        </div>
        <div class="tm-line-total">€${(it.precio * it.qty).toFixed(2)}</div>
      </li>
    `).join('');
  }

  const total = cart.reduce((acc, it) => acc + it.precio * it.qty, 0);
  cartTotalEl.textContent = `€${total.toFixed(2)}`;
  updateCartCount();
}

function abrirCarrito() {
  renderCart();
  openModal(cartModal);
}

function updateCartCount() {
  const badge = document.getElementById('tm-cart-count');
  if (!badge) return;
  const count = cart.reduce((n, it) => n + it.qty, 0);
  badge.textContent = count;
}

/*delegacion de eventos*/

document.addEventListener('click', (e) => {
  // Cerrar con X (cualquier modal)
  if (e.target.matches('.tm-cart-close')) {
    const modal = e.target.closest('#tm-cart-modal, #tm-gallery-modal, #tm-offer-modal');
    closeModal(modal);
    return;
  }

  /*Abrir carrito*/
  if (e.target.matches('#tm-cart-button')) {
    e.preventDefault();
    abrirCarrito();
    return;
  }

  /*Conócelo (galería)*/
  if (e.target.matches('.btn-conocelo')) {
    const { animal, cat } = e.target.dataset;
    abrirGaleria(animal, cat);
    return;
  }

  /*Añadir desde galería*/
  if (e.target.matches('.add-to-cart')) {
    const { animal, cat, id } = e.target.dataset;
    addToCartBy(animal, cat, id);
    e.target.textContent = 'Añadido ✓';
    setTimeout(() => (e.target.textContent = 'Añadir'), 700);
    return;
  }

/*Ver más (ofertas)*/
if (e.target.matches('.ver-mas')) {
  const key  = e.target.dataset.oferta;   
  const data = OFERTAS_DATA[key];
  if (!data) return;

  offerTitle.textContent = data.titulo || 'Detalles de la oferta';
  const precioStr = (typeof data.precio === 'number') ? `€${data.precio.toFixed(2)}` : '';

  
  offerContent.innerHTML = `
    <div class="offer-card">
      <img src="${data.img}" alt="${offerTitle.textContent}">
      <div class="offer-info">
        <h4>${data.titulo || ''}</h4>
        <p class="offer-price">${precioStr}</p>
        <div class="offer-actions">
          <button class="offer-add" data-oferta="${key}">Añadir</button>
        </div>
      </div>
    </div>
  `;

  openModal(offerModal);
  return;
}

if (e.target.matches('.offer-add')) {
  const key = e.target.dataset.oferta;
  addOfferToCart(key);
  e.target.textContent = 'Añadido ✓';
  setTimeout(() => (e.target.textContent = 'Añadir'), 700);
  return;
}

  /*Controles del carrito*/
  if (e.target.matches('.cart-plus')) {
    const it = cart.find(x => x.id === e.target.dataset.id);
    if (it) it.qty += 1;
    renderCart();
    return;
  }
  if (e.target.matches('.cart-minus')) {
    const it = cart.find(x => x.id === e.target.dataset.id);
    if (it && it.qty > 1) it.qty -= 1;
    renderCart();
    return;
  }
  if (e.target.matches('.cart-remove')) {
    const i = cart.findIndex(x => x.id === e.target.dataset.id);
    if (i >= 0) cart.splice(i, 1);
    renderCart();
    return;
  }
  if (e.target.matches('#tm-cart-clear')) {
    cart.splice(0, cart.length);
    renderCart();
    updateCartCount();
    return;
  }
});