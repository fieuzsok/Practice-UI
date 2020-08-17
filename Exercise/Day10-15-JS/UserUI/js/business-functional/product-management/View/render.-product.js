/**
 * render product list
 */
export const renderProductList = (productList) => {
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
        ${product.decription}
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
