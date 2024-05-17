





// W-1-3. product_survey.js // 

// W-1-4. product_survey.js // 

// W-1-5. product_survey.js // 


// W-2-1. restaurant_menu.js // 
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// With .map()
breakfastMenuItemsHTML

// With .forEach()
mainCourseItem

// With for loop
dessertItem


// W-2. Array methods

products = [
	{name: 'Laptop', price: 3000},
	{name: 'Phone_2000', price: 2000},
	{name: 'Phone_1000', price: 1000},
	{name: 'Phone_800', price: 800},
	{name: 'Phone_700', price: 700},
	{name: 'Phone_500', price: 500},
	{name: 'Phone_300', price: 300},
];

function filterProductByPriceRange(products, minPrice, maxPrice){
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}

minPrice = 400;
maxPrice = 1000;

const filteredProducts = filterProductByPriceRange(products, minPrice, maxPrice);

let forEachArray = '';
filteredProducts.forEach((products) => {
    // forEachArray += `Product: ${products.name}, Price: $${products.price}`
    console.log(`Product: ${products.name}, Price: $${products.price}`);
});
// console.log(forEachArray);

const map_array = filteredProducts.map((products) => `Product: ${products.name}, Price: $${products.price}`).join(' ');
console.log(map_array);

// for
// filteredProducts


// .reduce() 
// const totalValue = filteredProducts.reduce((total, product) => {return total += product.price}, 0);
// total is an accumulator
const totalValue = filteredProducts.reduce((total, product) => total += product.price, 0);
console.log(totalValue);


const employees_arr = {};

// 1
const employee = employees_arr.find((e) => e.id === 2);

// 2
// const employee = employees_arr.find(function(e) {
//     return e.id === 2;
// });

// 3
// function findEmployee(emp, emp_id){
//     for(let i = 0; i <= length(employees_arr); i++){
//         if (emp['id'][i] === emp_id) {
//             return emp[i];
//         }
//     }
// }
// const employee = findEmployee(2);


// W-2-2. employee details

const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

// Create the following functions:
//	- displayEmployees(): Display all employees with their details
// 	- calculateTotalSalaries(): Calculate the total salary of employees
// 	- displayHREmployees(): Find HR employees and display them with their details
// 	- findEmployeeById(): Find an employee with the employee id 





