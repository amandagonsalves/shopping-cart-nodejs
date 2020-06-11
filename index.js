const {products} = require('./data/products.json');
const prompt = require('prompt-sync')();
const data = require('./data/products.json');

function returnProducts() {
    console.log(`
   =================================================================
   |    1: Pesquisar produto                                       |
   |    2: Adicionar novo produto ao carrinho                      |
   |    3: Analisar promocão dos produtos                          |
   |    4: Calcular o valor total com os descontos (caso existam)  |
   |    5: Calcular total de desconto                              |
   |    6: Calcular porcentagem de desconto                        |
   =================================================================
    `)
    let option = prompt('Digite a opção: ');
    if(option=='1') {
        let searchProduct = prompt('Digite o nome do produto: ');
        if(searchProduct === data.name ) {
            return data.name
        }
    }
    
}
returnProducts()
//console.log(data.products.name)