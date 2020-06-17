const products = require('./products.json');
console.log(products)
console.log(JSON.stringify(products))

const isDoubleLook = new Set(categories).size == 2;
if(isDoubleLook) {
   decoration()
   console.log('Sua promoção é a DOUBLE LOOK.')
   decoration()
   nProducts.forEach(product => {
       console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`)
       
       console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${product.promotions}`)

       decoration()

       product.promotions.map(promotion => {
           
           for(let i=0; i < product.promotions.length; i++){
               
               if(product.promotions[i].looks[i] === 'DOUBLE LOOK') {

                   this.doubleLook = product.promotions[i].looks[i];
                   this.priceDouble = product.promotions[i].price

               }
           }
           
       })
       console.log(this.doubleLook, this.priceDouble)
       decoration() 
   });
} 
const isTripleLook = new Set(categories).size == 3;
if(isTripleLook) {
   decoration()
   console.log('Sua promoção é a TRIPLE LOOK.')
   decoration()
   nProducts.forEach(product => {
       console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`)
       
       console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${product.promotions}`)

       decoration()

       product.promotions.map(promotion => {
           
           for(let i=0; i < product.promotions.length; i++){
               
               if(product.promotions[i].looks[i] === 'TRIPLE LOOK') {

                   this.tripleLook = product.promotions[i].looks[i];
                   this.priceTriple = product.promotions[i].price

               }
           }
           
       })
       console.log(this.tripleLook, this.priceTriple)
       decoration() 
   });
} 

const isFullLook = new Set(categories).size == 4;
if(isFullLook) {
   decoration()
   console.log('Sua promoção é a FULL LOOK.')
   decoration()
   nProducts.forEach(product => {
       console.log(`Valor de ${product.name} sem promoção: ${product.regularPrice}`)
       
       console.log(`Valor de ${product.name} de acordo com a promoção aplicada: ${product.promotions}`)

       decoration()

        product.promotions.map(promotion => {
           
           for(let i=0; i < product.promotions.length; i++){
               
               if(product.promotions[i].looks[i] === 'FULL LOOK') {

                   this.fullLook = product.promotions[i].looks[i];
                   this.priceFull = product.promotions[i].price

               }
           }
           
       })
       console.log(this.fullLook, this.priceFull)
       decoration() 
   }); 
}