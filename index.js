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
   |    7: Parar de comprar                                        |
   =================================================================
    `)
    let nProducts = []
    let option = prompt('Digite a opção: ');
    if(option=='1') {
        let searchProduct = prompt('Digite o nome do produto: ').toUpperCase();
        const filtro = products.filter(searchProduct => { products.name === searchProduct})
        console.log(filtro)
    } else if (option == '2') {
        let addProduct = prompt('Digite o nome do produto: ').toUpperCase();
        if(addProduct === products.name) {
            console.log(data)
            let res = prompt('Adicionar ao carrinho? [Y/N]');
            if(res == 'Y' || 'y') {
                nProducts.push(addProduct.value)
            } else {
                
            }
            
        }
    }
    
}

returnProducts()
