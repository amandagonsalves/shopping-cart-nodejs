const {products} = require('./data/products.json');
const prompt = require('prompt-sync')();
let nProdutos = prompt('Olá, quantos produtos são? ');
var ids = []
let i;
for(i=0; i<nProdutos; i++) {
    var id = Number(prompt('Digite o id do produto: '))
}
var array = ids.push(id.value);
console.log(array[id])
let filterProductsById = products.filter(produto => produto.id);
//console.log(filterProductsById);
//if(id!=filterProductsById) {
    //prompt('digite outro');
//}