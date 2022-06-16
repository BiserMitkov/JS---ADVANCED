function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchingElement = document.getElementById('searchField');
      let usersInfoElement = document.querySelectorAll('tbody tr td');

      for (let personInfo of usersInfoElement) {

         if (personInfo.textContent.includes(searchingElement.value)) {
            personInfo.parentElement.classList.add('select');
            
         }
        
      }
      searchingElement.value = '';
      
   }
}