const row=document.querySelector(".row");


async function getAllProducts(){
    await fetch("https://dull-tan-llama-suit.cyclic.app/api/products")
    .then(res=>res.json())
    .then(data=>{
      row.innerHTML=data.data.map(product=>{
        return `<div class="col-md-3">
        <div class="card m-2">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${product.name}</h5>
         <h5 class="card-title text-danger">GHC${product.price.toFixed(
2
         )}</h5>
         <p class="card-text">${product.description}</p>
         <a href="#" class"btn" btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>`
      })  

    });
}


getAllProducts();