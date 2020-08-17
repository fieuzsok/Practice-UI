// Sorts an array of objects "in place". (Meaning that the original array will be modified and nothing gets returned.)

import { Product } from '../Model/products.js';

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
export const getProductList = async () => {
  var productList = [];
  await axios({
    url: 'https://5f3a39ff2300b100169a885c.mockapi.io/api/products',
    method: 'GET',
  }).then((res) => {
    productList = mapData(res.data);
  });
  return productList;
};

/**
 * Map data
 */

export const mapData = (data) => {
  return data.map((product) => {
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
    const p = new Product(
      id,
      name,
      image,
      description,
      price,
      inventory,
      rate,
      type
    );
    return p;
  });
};
