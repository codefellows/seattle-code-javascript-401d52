'use strict';

const rootDir = process.cwd();
const Products = require(`${rootDir}/src/models/products/products-model.js`);
const supergoose = require('@code-fellows/supergoose');

const products = new Products();

describe('Products Model', () => {
  it('can create() a new product', () => {
    let obj = { name: 'Test Product', category: 'test', price: 1.00 };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product', () => {
    let obj = { name: 'Test Product', category: 'test', price: 1.00 };
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(products => {
            Object.keys(obj).forEach(key => {
              expect(products[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});