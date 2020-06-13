const {products} = require('./data/products.json');
const prompt = require('prompt-sync')();

function options() {
    console.log(`
   =============================================================================
   |    1: Pesquisar produto                                                   |
   |    2: Adicionar novo produto ao carrinho e analisar promocão dos produtos |
   |    3: Calcular o valor total com os descontos (caso existam)              |
   |    4: Calcular total de desconto                                          |
   |    5: Calcular porcentagem de desconto                                    |
   |    6: Terminar compra                                                     |
   =============================================================================
`)
}
function decoration() {
    console.log('=====================================================');
}
function buyProducts() {
    
    var addProduct = prompt('Digite o nome do produto: ').toUpperCase();
    
    return products.filter((product) => {
        if(product.name === addProduct){
            decoration()
            console.log(product);
            decoration()
            let res = prompt(`Adicionar ${addProduct} ao carrinho? [ y/n ] `);
            decoration()
            if(res==='y') {
                nProducts.push(product);
                console.log('Produto adicionado ao carrinho.');
                decoration()
            } else {
                console.log('Produto não adicionado ao carrinho.');
                decoration()
            }
            console.log('Por enquanto, assim está seu carrinho: ');
            console.log(nProducts)
            decoration()
            let buy = prompt('Deseja adicionar novo item? [y/n] ');
            if (buy === 'y') {
                buyProducts()
            } else {
                console.log('Concluído.')
            }
        } 
    })
    
} 

function promotionsLook() {
    console.log(`
        ======================================================================
                                PROMOÇÕES DISPONÍVEIS
        ======================================================================
            SINGLE LOOK: Todos os produtos do carrinho com a mesma categoria
            DOUBLE LOOK: Pelo menos 2 produtos de categorias diferentes
            TRIPLE LOOK: Pelo menos 3 produtos de categorias diferentes
            FULL LOOK: Pelo menos 4 produtos da mesma categoria
        ======================================================================
    `)
    
}
function optionSelected(option) {
    nProducts = []
    
    if(option=='1') {

        //pesquisar produto e mostrar promoções
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
        buyProducts()
        promotionsLook()
        
    } else if (option == '3') {

        //calcular o valor total com desconto

    } else if (option == '4') {

        //calcular total de desconto

    } else if (option == '5') {

        //Calcular porcentagem de desconto

    } else if (option == '6') {

        console.log('Compra terminada.')

    }
    
}
let option;
while (option != "6") {
    options();
    option = prompt('Sua opção: ');
    const resultado = optionSelected(option);
    console.log(resultado)
    
}
