function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurantsInput = JSON.parse(document.querySelector("#inputs textarea").value);

      let restaurants = [];

      for (let i = 0; i < restaurantsInput.length; i++) {
         let [name, employees] = restaurantsInput[i].split(" - ");

         let currRestaurantIndex = restaurants.findIndex(r => r.name === name);

         employees = employees
            .split(", ")
            .map(e => {
               let [name, salary] = e.split(" ");

               return {
                  name,
                  salary: Number(salary)
               }
            });

         if (currRestaurantIndex == -1) {
            let restaurant = {
               id: i + 1,
               name,
               employees
            }; 

            restaurants.push(restaurant);

            continue;
         } 
         
         employees.forEach(e => {
            restaurants[currRestaurantIndex].employees.push(e);
         });
      }

      let getAvgSalary = r => {
         let salarySum = 0;

         for (const employee of r.employees) {
            salarySum += employee.salary;
         }

         return salarySum / r.employees.length;;
      };

      let getLargestSalary = r => {
         let largestSalary = Number.MIN_VALUE;

         r.employees.forEach(e => {
            if (e.salary > largestSalary) {
               largestSalary = e.salary;
            }
         })  
         
         return largestSalary;
      }

      restaurants.forEach(r => {
         r["averageSalary"] = getAvgSalary(r);
         r["largestSalary"] = getLargestSalary(r);
      });

      let bestRestaurant = restaurants.sort((a, b) => {
         return b.averageSalary - a.averageSalary || a.id - b.id;
      })[0];

      bestRestaurant.employees.sort((a, b) => b.salary - a.salary);

      let bestRestaurantElement = document.querySelector("#bestRestaurant p");
      let bestEmployeesElement = document.querySelector("#workers p");

      bestRestaurantElement.textContent = 
         `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.largestSalary.toFixed(2)}`; 

      bestEmployeesElement.textContent = "";

      bestRestaurant.employees.forEach(e => {
         bestEmployeesElement.textContent += `Name: ${e.name} With Salary: ${e.salary} `;
      });

      bestEmployeesElement.textContent = bestEmployeesElement.textContent.trimEnd();
   }
}