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
function buyProducts() {
    let addProduct = prompt('Digite o nome do produto: ').toUpperCase();
    return products.filter((product) => {
        if(product.name === addProduct){
            console.log('=====================================================');
            console.log(product);
            console.log('=====================================================');
            let res = prompt(`Adicionar ${addProduct} ao carrinho? [ y/n ] `);
            console.log('=====================================================');
            if(res==='y') {
                nProducts.push(product);
                console.log('Produto adicionado ao carrinho.');
                console.log('=====================================================');
            } else {
                console.log('Produto não adicionado ao carrinho.');
                console.log('=====================================================');
            }
            console.log('Por enquanto, assim está seu carrinho: ');
            console.log(nProducts)
            console.log('=====================================================');
        } else {
            console.log('Produto não encontrado.')
        }
    })
}
function optionSelected(option) {
    nProducts = []

    if(option=='1') {

        //pesquisar produto
        console.log('=====================================================');
        let searchProduct = prompt('Digite o nome do produto: ').toUpperCase();
        console.log('=====================================================');
        return products.filter((product) => {
            if(product.name === searchProduct){
                console.log('=====================================================');
                console.log(product)
                console.log('=====================================================');
            } else {
                console.log('Produto não encontrado.')
            }
        })

    } else if (option == '2') {

        //adicionar produto ao carrinho
        console.log('=====================================================');
        buyProducts()
        let buy = prompt('Deseja adicionar mais algum no carrinho? [y/n] ');
        if(buy === 'y') {
            buyProducts()
            let buy = prompt('Deseja adicionar mais algum no carrinho? [y/n] ');
            console.log('=====================================================');
        } else {
            console.log('Produtos adicionados ao carrinho com sucesso.')
            console.log('=====================================================');
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
