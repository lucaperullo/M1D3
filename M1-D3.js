/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/
const positiveNumbers = ["1", "2", "3", "4", "5"]
console.log(positiveNumbers)
/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
/* WRITE YOUR CODE HERE */
const objectMySelf = {
    nome: "Luca",
    cognome: "Perullo",
    email: "lucaperullo@outlook.it",
    age: "20"
}
console.log(objectMySelf)
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
const havingDriverLicense = 0;

const DriverLicense = havingDriverLicense > 1 ? "driverLicensed" : "notLicensed:C";

console.log(DriverLicense)

//2nd try

const objectMySelf0 = {
    name: "Luca",
    surame: "Perullo",
    email: "lucaperullo@outlook.it",
    age: "20"
}
objectMySelf0.driverLicensed = false;


console.log(objectMySelf0)

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Remove from the previously created object the age
//* WRITE YOUR CODE HERE */
const objectMySelf2 = {
    name: "Luca",
    surame: "Perullo",
    email: "lucaperullo@outlook.it",
    age: "20"
}
objectMySelf0.driverLicensed = false;
delete objectMySelf2.age

console.log(objectMySelf2)
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/
const objectUnknown = {
    name: "Giangiacomo",
    surname: "Allocca",
    email: "giangiallocc@test.com"
}
console.log(objectUnknown)
console.log(objectUnknown.email !== objectMySelf.email)

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
let totalShoppingCart = 100;
if (totalShoppingCart > 50) {
    console.log("Free shipping")
} else {
    console.log("+10€ Shipping", totalShoppingCart);
    console.log("the total is", totalShoppingCart + 10, "€");
}
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a "20"% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
let totalShoppingCart0 = totalShoppingCart * 0.80;
console.log("20% discount", totalShoppingCart0, "$");

if (totalShoppingCart0 > 50) {
    console.log("Free shipping")
} else {
    console.log("+$10 Shipping", totalShoppingCart0);
    console.log("the total is", totalShoppingCart0 + 10, "$");
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
const car0 = {
    brand: "Fiat",
    model: "Grande Punto",
    licensePlate: "MO:122SM",
}
const car1 = Object.assign({}, car0);
car1.licensePlate = "RE:5OS252";
const car2 = Object.assign({}, car0);
car2.licensePlate = "GE:GH3252";
const car3 = Object.assign({}, car0);
car3.licensePlate = "RO:43JG52";
const car4 = Object.assign({}, car0);
car4.licensePlate = "MI:67FD22";
const car5 = Object.assign({}, car0);
car5.licensePlate = "NA:5SM812";

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/
console.log("                       *****Cars For Rent!******")
let carsForRent = [car0, car1, car2, car3, car4, car5]
console.log(carsForRent);
console.log("                       *****Cars For Rent!******")


/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);

/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
/* WRITE YOUR CODE HERE */
delete car4.model;
console.log(car4);



/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
/* WRITE YOUR CODE HERE */
console.log("                           ******CARS FOR SALE!!!******")
const carsForSale = [car0, car5, car4]

const totalCars = carsForRent.length + carsForSale.length;

console.log(totalCars);



/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/
/* WRITE YOUR CODE HERE */
for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i])
}
/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/