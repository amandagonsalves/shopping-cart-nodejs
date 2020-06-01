const {products} = require('./data/products.json');
const prompt = require('prompt-sync')();
let nProdutos = prompt('Olá, quantos produtos são? ');
var ids = []
let i;

function calc() {
    for(i=0; i<nProdutos; i++) {
        var id = Number(prompt('Digite o id do produto: '));
    }
    var array = ids.push(id.value);
    return this.array
}
calc()

let filterProductsById = products.filter(produto => produto.id);
//console.log(filterProductsById);
//if(id!=filterProductsById) {
    //prompt('digite outro');
//}