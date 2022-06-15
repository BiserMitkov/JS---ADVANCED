function search() {
   let searchingElement = document.getElementById('searchText');
   let townsElement = document.querySelectorAll('#towns li');
   let resultElement = document.getElementById('result');
   let counter = 0;
   for (let town of townsElement) {
      
      if (town.textContent.includes(searchingElement.value)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         counter++;
      }
   }

   resultElement.textContent = `${counter} matches found`;

}
