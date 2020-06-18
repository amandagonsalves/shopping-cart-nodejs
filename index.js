const { products } = require('./data/products.json');
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
        if (product.name === addProduct) {
            decoration()
            console.log(product);
            decoration()
            let res = prompt(`Adicionar ${addProduct} ao carrinho? [ y/n ] `);
            decoration()
            if (res === 'y') {
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
    const { selected, categories } =
        nProducts.reduce((data, { id }) => {
            const productN = products.find(({ id: productId }) => productId === id);
            if (productN) {
                data.categories.push(productN.category);
                data.selected.push(productN);
            }
            return data;
        }, {
            selected: [],
            categories: [],
        });
    //console.log({selected,categories});
    //vai retornar os produtos selecionados e suas respectivas categorias
    const isSingleLook = new Set(categories).size == 1;
    if (isSingleLook) {
        decoration();
        console.log('Sua promoção é a SINGLE LOOK.');
        decoration();
        nProducts.forEach(product => {

            console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`);

            product.promotions.map(promotion => {

                for (let i = 0; i < product.promotions.length; i++) {
                    for (let j = 0; j < product.promotions[i].looks.length; j++) {
                        if (product.promotions[i].looks[j] === 'SINGLE LOOK') {
                            this.singleLook = product.promotions[i].looks[j];
                            this.priceSingle = product.promotions[i].price
                        }
                    }
                }

            })
            console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${this.singleLook} ${this.priceSingle}`);
            decoration()
        });
    }
    const isDoubleLook = new Set(categories).size == 2;
    if (isDoubleLook) {
        decoration()
        console.log('Sua promoção é a DOUBLE LOOK.')
        decoration()
        nProducts.forEach(product => {
            console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`)

            product.promotions.map(promotion => {

                for (let a = 0; a < product.promotions.length; a++) {
                    for (let b = 0; b < product.promotions[a].looks.length; b++) {
                        if (product.promotions[a].looks[b] === 'DOUBLE LOOK') {
                            this.doubleLook = product.promotions[a].looks[b];
                            this.priceDouble = product.promotions[a].price
                        }
                    }
                }

            })
            console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${this.doubleLook} ${this.priceDouble}`)
            decoration()
        });
    }
    const isTripleLook = new Set(categories).size == 3;
    if (isTripleLook) {
        decoration()
        console.log('Sua promoção é a TRIPLE LOOK.')
        decoration()
        nProducts.forEach(product => {
            console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`)

            product.promotions.map(promotion => {

                for (let c = 0; c < product.promotions.length; c++) {
                    for (let d = 0; d < product.promotions[c].looks.length; d++) {
                        if (product.promotions[c].looks[d] === 'TRIPLE LOOK') {
                            this.tripleLook = product.promotions[c].looks[d];
                            this.priceTriple = product.promotions[c].price
                        }
                    }
                }

            })
            console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${this.tripleLook} ${this.priceTriple}`)
            decoration()
        });
    }

    const isFullLook = new Set(categories).size == 4;
    if (isFullLook) {
        decoration()
        console.log('Sua promoção é a FULL LOOK.')
        decoration()
        nProducts.forEach(product => {
            console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`)

            product.promotions.map(promotion => {

                for (let e = 0; e < product.promotions.length; e++) {
                    for (let f = 0; f < product.promotions[e].looks.length; f++) {
                        if (product.promotions[e].looks[f] === 'FULL LOOK') {
                            this.fullLook = product.promotions[e].looks[f];
                            this.priceFull = product.promotions[e].price
                        }
                    }
                }

            })
            console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${this.fullLook} ${this.priceFull}`)
            decoration()
        });
    }
}

function optionSelected(option) {
    nProducts = []

    if (option == '1') {

        //search product
        decoration()
        let searchProduct = prompt('Digite o nome do produto: ').toUpperCase();
        decoration()

        return products.filter((product) => {
            if (product.name === searchProduct) {
                decoration()
                console.log(product)
                decoration()
            }
        })

    } else if (option == '2') {

        //add product and calculate total price
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
    const result = optionSelected(option);
    console.log(result)
}
