const { products } = require('./data/products.json');
const prompt = require('prompt-sync')();

function options() {
    console.log(`
   =============================================================================
   |    1: Pesquisar produto                                                   |
   |    2: Adicionar novo produto ao carrinho e calcular total                 |
   |    3: Terminar compra                                                     |
   =============================================================================
`);
}

function decoration() {
    console.log('=====================================================');
}

function addProducts() {

    var addProduct = prompt('Digite o nome do produto: ').toUpperCase();

    return products.filter((product) => {
        if (product.name === addProduct) {
            decoration();
            console.log(product);
            decoration();
            let res = prompt(`Adicionar ${addProduct} ao carrinho? [ y/n ] `);
            decoration();
            if (res === 'y') {
                nProducts.push(product);
                console.log('Produto adicionado ao carrinho.');
                decoration();
            } else {
                console.log('Produto não adicionado ao carrinho.');
                decoration();
            }
            console.log('Por enquanto, assim está seu carrinho: ');
            console.log(nProducts);
            decoration();
            let add = prompt('Deseja adicionar novo item? [y/n] ');
            if (add === 'y') {
                addProducts();
            } else {
                console.log('Concluído.');
            }
        }
    });

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
    let price = [];
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
            });
            
            console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${this.singleLook} ${this.priceSingle}`);
            decoration();
            price.push(this.priceSingle);
            let totalSingle = price.reduce(function(total, priceSingle){return total + priceSingle;}, 0);
            console.log(`Valor total do carrinho: ${totalSingle}`);

        });
    }
    const isDoubleLook = new Set(categories).size == 2;
    if (isDoubleLook) {
        decoration();
        console.log('Sua promoção é a DOUBLE LOOK.');
        decoration();
        nProducts.forEach(product => {
            console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`);

            product.promotions.map(promotion => {

                for (let a = 0; a < product.promotions.length; a++) {
                    for (let b = 0; b < product.promotions[a].looks.length; b++) {
                        if (product.promotions[a].looks[b] === 'DOUBLE LOOK') {
                            this.doubleLook = product.promotions[a].looks[b];
                            this.priceDouble = product.promotions[a].price
                        }
                    }
                }

            });
            console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${this.doubleLook} ${this.priceDouble}`);
            decoration();
            price.push(this.priceDouble);
            let totalDouble = price.reduce(function(total, priceDouble){return total + priceDouble;}, 0);
            console.log(`Valor total do carrinho: ${totalDouble}`);
        });
    }
    const isTripleLook = new Set(categories).size == 3;
    if (isTripleLook) {
        decoration();
        console.log('Sua promoção é a TRIPLE LOOK.');
        decoration();
        nProducts.forEach(product => {
            console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`);

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
            console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${this.tripleLook} ${this.priceTriple}`);
            decoration();
            price.push(this.priceTriple);
            let totalTriple = price.reduce(function(total, priceTriple){return total + priceTriple;}, 0);
            console.log(`Valor total do carrinho: ${totalTriple}`);
        });
    }

    const isFullLook = new Set(categories).size == 4;
    if (isFullLook) {
        decoration();
        console.log('Sua promoção é a FULL LOOK.')
        decoration();
        nProducts.forEach(product => {
            console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`);

            product.promotions.map(promotion => {

                for (let e = 0; e < product.promotions.length; e++) {
                    for (let f = 0; f < product.promotions[e].looks.length; f++) {
                        if (product.promotions[e].looks[f] === 'FULL LOOK') {
                            this.fullLook = product.promotions[e].looks[f];
                            this.priceFull = product.promotions[e].price
                        }
                    }
                }

            });
            console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${this.fullLook} ${this.priceFull}`);
            decoration();
            price.push(this.priceFull);
            let totalFull = price.reduce(function(total, priceFull){return total + priceFull;}, 0);
            console.log(`Valor total do carrinho: ${totalFull}`);
        });
    }
}

function optionSelected(option) {
    nProducts = [];

    if (option == '1') {

        //search product
        decoration();
        let searchProduct = prompt('Digite o nome do produto: ').toUpperCase();
        decoration();

        return products.filter((product) => {
            if (product.name === searchProduct) {
                decoration();
                console.log(product);
                decoration();
            }
        });

    } else if (option == '2') {

        //add product and calculate total price
        addProducts();
        promotionsLook();

    } else if (option == '3') {
        console.log('Compra terminada.')
    }

}

let option;
while (option != "6") {
    options();
    option = prompt('Sua opção: ');
    const result = optionSelected(option);
    console.log(result);
}
