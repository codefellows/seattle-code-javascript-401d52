'use strict';

const rootDir = process.cwd();
const Categories = require(`${rootDir}/src/models/categories/categories-model.js`);
const supergoose = require('@code-fellows/supergoose');

const categories = new Categories();

describe('Categories Model', () => {
  it('can create() a new category', () => {
    let obj = { name: 'test' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a category', () => {
    let obj = { name: 'test' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});