/**
 * Require products list.
 */
const {products,} = require('./data/products.json');
  
  /**
   * Fake cart.
   */
  const cart = [
    {
      id: 110,
      quantity: 2,
    },
    {
      id: 120,
      quantity: 1,
    },
    {
      id: 130,
      quantity: 1,
    },
  ];
  
  /**
   * Map cart to a more usefull structure.
   */
  const {
    /**
     * Selected products.
     */
    selected,
  
    /**
     * Categories from selected products.
     */
    categories,
  
  } = cart.reduce((data, { id, quantity }) => {
    const product = products.find(({ id: productId }) => productId === id);
  
    /**
     * Be sure product exists.
     */
    if (product) {
      /**
       * Add category to categories array.
       */
      data.categories.push(product.category);
  
      /**
       * Add product to selected array.
       */
      data.selected.push(product);
    }
  
    return data;
  }, {
    selected: [],
    categories: [],
  });
  
  /**
   * Check if all selected products are in the same category.
   *
   * Here we use the category index to check if all items are the same.
   *
   * Gave `const array = ['a', 'a', 'a'];`
   * If we check `array.indexOf('a')` it will always be 0, any other value would give a different index.
   */
  const isCartSingleLook = categories
  .indexOf(category => categories
  .indexOf(category) !== 0) === -1;