let box = document.querySelector('.box');
let contenedorCarrito = document.querySelector('.box_carrito')

let cart=[];
let prod =[];

let productos = [
    {
        id:1,
        titulo:"remera",
        precio:200,
        img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/440/495/products/argentina-vamos-argentina-adelante1-03d5fe4c7350410db815922346590160-640-0.png"
    },
    {
        id:2,
        titulo:"pantalon",
        precio:400,
        img:"https://s.libertaddigital.com/2022/03/07/pantalones-de-trabajo-para-hombre-stenso-des-emerton-slim-fit.jpg"
    },
    {
        id:3,
        titulo:"bufanda",
        precio:100,
        img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bufanda-ikks-amarilla-1610719718.jpg?resize=480:*"
    },
    {
        id:4,
        titulo:"camisa",
        precio:600,
        img:"https://http2.mlstatic.com/D_NQ_NP_822877-MLA46374685703_062021-W.jpg"
    },
];


productos.forEach( item =>{
box.innerHTML +=` <div class="card">
<img class="item_img" src=${item.img} alt=${item.titulo}/>
<h2 class="item_title">${item.titulo}</h2>
<p class="item_price">$ ${item.precio}</p>
<button class="btn_enviar" data-id=${item.id}>Comprar</button>
</div>`

});


let btn = document.querySelectorAll('.btn_enviar');

btn.forEach( item  => {
    item.addEventListener('click',(e)=>{
     
       let main = e.target.parentElement;
       let titulo = main.querySelector('.item_title').textContent;
       let precio = main.querySelector('.item_price').textContent;
       let img = main.querySelector('.item_img').src;
       let id = main.querySelector('button').getAttribute('data-id');
       let cantidad = 1;

       prod = [
        {id:id,
        titulo:titulo,
    precio:Number(precio),
    img:img,
    cantidad:cantidad
}
       ];
      

    agregarCarrito(titulo,precio,img,cantidad,id)
    mostrarItem();
   
    

    })
})



function agregarCarrito(titulo,precio,img,cantidad,id){

  let array = cart.some( item => item.id === id);
    if(array){
        cart.forEach( item => {
            if(item.id === id){
                item.cantidad++;
                return;
            }
        })
    }else{
        
        cart.push({titulo,precio,img,cantidad,id});
        
    }   
    limpiarHtml();

  console.log(cart)
  }


   
function mostrarItem(){
   cart.forEach( item => {
      
      contenedorCarrito.innerHTML +=`<div class="itemCarrito">
      <h2>${item.titulo}</h2>
      <p> ${item.precio}</p>
      <input class="valorInput" type="number" min="1" value="${item.cantidad}"/>
      <p>${item.precio}</p>
      <button class="btn_borrar" data-id=${item.id}>X</button>
      <p>${item.precio}</p>
      
      </div>`

     
}) 


}

function limpiarHtml(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.firstChild.remove(contenedorCarrito.firstChild)
    }
}


contenedorCarrito.addEventListener('click',(e)=>{
  console.log(e.target.querySelector('.btn_borrar'))
    })
















  
   
    
   


