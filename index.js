const {products} = require('./data/products.json');
const prompt = require('prompt-sync')();

function options() {
    console.log(`
   =================================================================
   |    1: Pesquisar produto                                       |
   |    2: Adicionar novo produto ao carrinho                      |
   |    3: Analisar promocão dos produtos                          |
   |    4: Calcular o valor total com os descontos (caso existam)  |
   |    5: Calcular total de desconto                              |
   |    6: Calcular porcentagem de desconto                        |
   |    7: Terminar compra                                        |
   =================================================================
`)
}
function decoration() {
    console.log('=====================================================');
}
function buyProducts() {
    let addProduct = prompt('Digite o nome do produto: ').toUpperCase();
    return products.filter((product) => {
        if(product.name === addProduct){
            decoration()
            console.log(product);
            decoration()
            let res = prompt(`Adicionar ${addProduct} ao carrinho? [ y/n ] `);
            decoration()
            if(res==='y') {
                var allProducts = nProducts.push(product);
                console.log('Produto adicionado ao carrinho.');
                decoration()
            } else {
                console.log('Produto não adicionado ao carrinho.');
                decoration()
            }
            console.log('Por enquanto, assim está seu carrinho: ');
            console.log(nProducts)
            decoration()
        } 
    })
}
function optionSelected(option) {
    nProducts = []

    if(option=='1') {

        //pesquisar produto
        decoration()
        let searchProduct = prompt('Digite o nome do produto: ').toUpperCase();
        decoration()
        return products.filter((product) => {
            if(product.name === searchProduct){
                decoration()
                console.log(product)
                decoration()
            }
        })

    } else if (option == '2') {

        //adicionar produto ao carrinho
        decoration()
        buyProducts()
        let buy = prompt('Deseja adicionar mais algum no carrinho? [y/n] ');
        if(buy === 'y') {
            buyProducts()
            let buy = prompt('Deseja adicionar mais algum no carrinho? [y/n] ');
            decoration()
        } else {
            console.log('Produtos adicionados ao carrinho com sucesso.')
            decoration()
        }
        
    } else if (option == '3') {

        //analisar as promoções
        console.log(`
        ======================================================================
                                PROMOÇÕES DISPONÍVEIS
        ======================================================================
            SINGLE LOOK: Todos os produtos do carrinho com a mesma categoria
            DOUBLE LOOK: Pelo menos 2 produtos de categorias diferentes
            TRIPLE LOOK: Pelo menos 2 produtos de categorias diferentes
            FULL LOOK: Pelo menos 4 produtos da mesma categoria
        ======================================================================
        `)
        return allProducts.filter(product => {
            if(product.category === 'PANTS') {
                console.log('categ pants')
            }
        })

    } else if (option == '4') {

        //calcular o valor total com desconto

    } else if (option == '5') {

        //calcular total de desconto

    } else if (option == '6') {

        //Calcular porcentagem de desconto

    } else if (option == '7') {

        console.log('Compra terminada.')

    }
    
}
let option;
while (option != "7") {
    options();
    option = prompt('Sua opção: ');
    const resultado = optionSelected(option);
    console.log(resultado)
}
//returnProducts()
