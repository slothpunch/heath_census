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


const employees = {};

// 1
const employee = employees.find((e) => e.id === 2);

// 2
// const employee = employees.find(function(e) {
//     return e.id === 2;
// });

// 3
// function findEmployee(emp, emp_id){
//     for(let i = 0; i <= length(employees); i++){
//         if (emp['id'][i] === emp_id) {
//             return emp[i];
//         }
//     }
// }
// const employee = findEmployee(2);


