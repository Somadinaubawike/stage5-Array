let products = [
    {
        product_Img: 'shoe1',
        productName: 'Charge-001',
        productPrice: '$50'
    },
    {
        product_Img: 'shoe2',
        productName: 'Charge-002',
        productPrice: '$50'
    },
    {
        product_Img: 'shoe3',
        productName: 'Charge-003',
        productPrice: '$50'
    },
    {
        product_Img: 'shoe4',
        productName: 'Charge-004',
        productPrice: '$50'
    }
]

let gallery = document.getElementById('chargeProducts');
let html = '';
products.forEach(e => {
  html += `
      <div class="product-card col-12 col-md-3 col-lg-3 p-4 bg-light">
        <div class="product-img">
          <img src="/images/shoe1.jpg" alt="" class="img-fluid">
        </div>
        <div class="product-info">
          <h1>charge-001</h1>
          <p class="fw-bold">$50</p>
        </div>
      </div>`
    console.log(e)

    gallery.innerHTML = html

});
