import { Product } from './Model/products.js';
// Sorts an array of objects "in place". (Meaning that the original array will be modified and nothing gets returned.)

export const sortOn = (arr, prop) => {
  arr.sort(function (a, b) {
    if (a[prop] < b[prop]) {
      return -1;
    } else if (a[prop] > b[prop]) {
      return 1;
    } else {
      return 0;
    }
  });
};

//objArray.sort(sortOn("id"));

/**
 * Get Product List
 */
const getProductList = () => {
  axios({
    url: 'https://5f3a39ff2300b100169a885c.mockapi.io/api/products',
    method: 'GET',
  }).then((res) => {
    mapData(res.data);
    renderProductList(productList);
  });
};

/**
 * Map data
 */
const mapData = (data) => {
  productList = data.map((product) => {
    const {
      id,
      name,
      image,
      description,
      price,
      inventory,
      rating,
      type,
    } = product;
    let rate = product.rating > 5 ? 5 : rating;
    console.log(product.description);
    const p = new Product(
      id,
      name,
      image,
      product.description.substr(0, 50) + '...',
      price,
      inventory,
      rate,
      type
    );
    return p;
  });
};

/**
 * render product list
 */
const renderProductList = (productList) => {
  var result = '';

  productList.forEach((product) => {
    result += `
    <div class="col-sm-4">
    <div class="product-item">
      <div class="img-category">
        <img src=${product.image} alt="" />
      </div>
      <div class="detail">
        <h4 class="name-phone">
        ${product.name}
        </h4>
        <p class="detail-phone">
        ${product.description}
        </p>
        <h3 class="price">
        ${product.price}
        </h3>
      </div>
      <button class="btn add-cart btn-circle" id="${product.id}">
        <i class="fa fa-plus"></i>
      </button>
    </div>
  </div>
    `;
  });

  document.getElementById('product-list-container').innerHTML = result;
};

var productList = [];
getProductList();

console.log(productList);
