async function getProducts() {
  let res = await fetch('https://desistore.stackrel.com/products')
  let products = await res.json()
  console.log(products)

  let cards = products.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>₹${p.price}</p>
    </div>
  `)

  document.getElementById('products').innerHTML = cards.join('')
}

getProducts()
