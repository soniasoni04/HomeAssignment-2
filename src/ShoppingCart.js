class ShoppingCart {
    
   constructor(){
           this.cart=[]
       }
       getItems() {
           return this.cart
        }
      addItem(itemName, quantity, price){

            let list = {
               name: itemName,
               quantity: quantity,
               pricePerUnit: price
            }
            return this.cart.push(list)
        } 
      clear(){
         return this.cart=[]
         sum = 0
      }
      total(){
           return this.cart.reduce((sum, currentValue) => {
                     sum = sum + (currentValue.quantity * currentValue.pricePerUnit)
                     return sum
                     },0)
     }
   }

module.exports = ShoppingCart