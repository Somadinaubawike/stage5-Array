let products = [
    {
        product_Img: 'shoe1',
        productName: 'Charge-001',
        productPrice: '$250'
    },
    {
        product_Img: 'shoe2',
        productName: 'Charge-002',
        productPrice: '$150'
    },
    {
        product_Img: 'shoe3',
        productName: 'Charge-003',
        productPrice: '$100'
    },
    {
        product_Img: 'shoe4',
        productName: 'Charge-004',
        productPrice: '$200'
    },
    {
        product_Img: 'shoe5',
        productName: 'Charge-005',
        productPrice: '$100'
    },
    {
        product_Img: 'shoe6',
        productName: 'Charge-006',
        productPrice: '$100'
    },
    {
        product_Img: 'shoe7',
        productName: 'Charge-007',
        productPrice: '$100'
    },
    {
        product_Img: 'shoe8',
        productName: 'Charge-008',
        productPrice: '$100'
    },,
    {
        product_Img: 'shoe9',
        productName: 'Charge-009',
        productPrice: '$100'
    },,
    {
        product_Img: 'shoe10',
        productName: 'Charge-010',
        productPrice: '$100'
    },,
    {
        product_Img: 'shoes11',
        productName: 'Charge-011',
        productPrice: '$100'
    },
    {
        product_Img: 'shoe12',
        productName: 'Charge-012',
        productPrice: '$100'
    },
]

let gallery = document.getElementById('chargeProducts');
let html = '';
products.forEach(e => {
  html += `
      <div class="product-card col-12 col-md-3 col-lg-3 ml p-3 bg-light">
        <div class="product-img">
          <img src="../stage5-Array/images/${e.product_Img}.jpg" alt="" class="img-fluid rounded">
        </div>
        <div class="product-info">
          <h1>${e.productName}</h1>
          <p class="fw-bold">${e.productPrice}</p>
        </div>
      </div>`
    console.log(e)

    gallery.innerHTML = html

});


