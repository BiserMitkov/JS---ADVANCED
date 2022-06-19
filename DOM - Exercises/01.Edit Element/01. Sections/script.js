function create(words) {

   let contentDivElement = document.getElementById('content');
   
   for (let word of words) {
      let createP = document.createElement('p');
      createP.textContent = word;
      createP.style.display = 'none';
      let createDiv = document.createElement('div');
      createDiv.appendChild(createP);
      contentDivElement.appendChild(createDiv);
   }

   let allChildrenOfDivContent = Array.from(contentDivElement.children);

   for (let el of allChildrenOfDivContent) {
      el.addEventListener('click', (e) => {
         if (e.target) {
            e.target.children[0].style.display = 'block';
            
         }
      })
   }

   

}