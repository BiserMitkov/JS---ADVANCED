function solve() {

   let addButtonElement = Array.from(document.querySelectorAll('.add-product'));
   let checkoutButton = document.querySelector('button.checkout');
   let outputElement = document.getElementsByTagName('textarea')[0];
   let finalSum = 0;
   let products = new Set();
   for(el of addButtonElement) {
      let productName = '';
      let price = '';
      el.addEventListener('click', (e) => {
         if (e.target) {
            let info = Array.from(e.target.parentElement.parentElement.children);
            let counter = 0;
            for (let el of info) {
               counter++;
               if(counter == 4) {
                  price = el.textContent;
                  finalSum += Number(price);
               }

               if (counter == 2) {
                  productName = el.children[0].textContent;
                  products.add(productName);
               }
            }
         }
         outputElement.textContent += `Added ${productName} for ${Number(price).toFixed(2)} to the cart.\n`;
      })
   }   

   checkoutButton.addEventListener('click', (e) => {
      if (e.target) {
         outputElement.textContent += `You bought ${Array.from(products).join(', ')} for ${finalSum.toFixed(2)}.`;
         for (let button of addButtonElement) {
            button.disabled = true;
            e.target.disabled = true;
         }
      }
   })

}