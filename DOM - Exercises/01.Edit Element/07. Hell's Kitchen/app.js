function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputOfRestaurantsElement = document.querySelector('textarea');
      let resultForBestRestaurantElement = document.querySelector('#bestRestaurant p');
      let resultForBestWorkersElement = document.querySelector('#workers p')

      let objOfRestaurants = {};

      let arr = JSON.parse(inputOfRestaurantsElement.value);

      for (let restaurant of arr) {
         restaurant = restaurant.split(' - ');
         let restaurantName = restaurant.shift();
         let workers = restaurant.shift().split(',');

         for (let worker of workers) {
            worker = worker.trim();
            let [name, payment] = worker.split(' ');
            payment = Number(payment);

            if (!objOfRestaurants.hasOwnProperty(restaurantName)) {
               objOfRestaurants[restaurantName] = {};
               objOfRestaurants[restaurantName][name] = payment;
            } else {
               objOfRestaurants[restaurantName][name] = payment;
            }
         }
      }

      let sortedRestaurants = Object.entries(objOfRestaurants).sort((a, b) => {
         let firstPaychecks = Object.values(a[1]);
         let secPaychecks = Object.values(b[1]);

         let firstRestaurantEmployees = Object.keys(a[1]);
         let secRestaurantEmployees = Object.keys(b[1]);

         let firstResult = 0;
         let secResult = 0;
         firstPaychecks.forEach(el => firstResult += el);
         secPaychecks.forEach(el => secResult += el);
         firstResult = firstResult / firstRestaurantEmployees.length;
         secResult = secResult / secRestaurantEmployees.length;

         return secResult - firstResult;

      })

      let winnerRestaurant = sortedRestaurants.shift();
      let averageSalary = 0;
      let salaries = Object.values(winnerRestaurant[1]);
      let numberOfEmployees = Object.keys(winnerRestaurant[1]);
      salaries.forEach(el => averageSalary += el);
      averageSalary = averageSalary / numberOfEmployees.length;
      let sortedCoWorkers = Object.entries(winnerRestaurant[1]).sort((a, b) => b[1] - a[1]);


      resultForBestRestaurantElement.textContent = `Name: ${winnerRestaurant[0]} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${sortedCoWorkers[0][1].toFixed(2)}`;
      sortedCoWorkers.forEach(el => resultForBestWorkersElement.textContent += `Name: ${el[0]} With Salary: ${el[1]} `);

   }
}