const cars = [
	{
		make: 'BMW',
		carmodel: 'Serie 3',
		year: 2012,
		price: 30000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Audi', 
		carmodel: 'A4', 
		year: 2018, 
		price: 40000, 
		doors: 4, 
		color: 'Black', 
		transmission: 'automatic' 
	},
	{
		make: 'Ford',
		carmodel: 'Mustang',
		year: 2015,
		price: 20000,
		doors: 2,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Audi', 
		carmodel: 'A6', 
		year: 2010, 
		price: 35000, 
		doors: 4, 
		color: 'Black', 
		transmission: 'automatic' },
	{
		make: 'BMW',
		carmodel: 'Serie 5',
		year: 2016,
		price: 70000,
		doors: 4,
		color: 'Red',
		transmission: 'automatic'
	},
	{
		make: 'Mercedes Benz',
		carmodel: 'Clase C',
		year: 2015,
		price: 25000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{
		make: 'Chevrolet',
		carmodel: 'Camaro',
		year: 2018,
		price: 60000,
		doors: 2,
		color: 'Red',
		transmission: 'manual'
	},
	{ 
		make: 'Ford', 
		carmodel: 'Mustang', 
		year: 2019, 
		price: 80000, 
		doors: 2, 
		color: 'Red', 
		transmission: 'manual' },
	{
		make: 'Dodge',
		carmodel: 'Challenger',
		year: 2017,
		price: 40000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Audi', 
		carmodel: 'A3', 
		year: 2017, 
		price: 55000, 
		doors: 2, 
		color: 'Black', 
		transmission: 'manual' 
	},
	{
		make: 'Dodge',
		carmodel: 'Challenger',
		year: 2012,
		price: 25000,
		doors: 2,
		color: 'Red',
		transmission: 'manual'
	},
	{
		make: 'Mercedes Benz',
		carmodel: 'Clase C',
		year: 2018,
		price: 45000,
		doors: 4,
		color: 'Blue',
		transmission: 'automatic'
	},
	{
		make: 'BMW',
		carmodel: 'Serie 5',
		year: 2019,
		price: 90000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Ford',
		carmodel: 'Mustang',
		year: 2017,
		price: 60000,
		doors: 2,
		color: 'Black',
		transmission: 'manual' 
	},
	{
		make: 'Dodge',
		carmodel: 'Challenger',
		year: 2015,
		price: 35000,
		doors: 2,
		color: 'Blue',
		transmission: 'automatic'
	},
	{
		make: 'BMW',
		carmodel: 'Serie 3',
		year: 2018,
		price: 50000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{
		make: 'BMW',
		carmodel: 'Serie 5',
		year: 2017,
		price: 80000,
		doors: 4,
		color: 'Black',
		transmission: 'automatic'
	},
	{
		make: 'Mercedes Benz',
		carmodel: 'Clase C',
		year: 2018,
		price: 40000,
		doors: 4,
		color: 'White',
		transmission: 'automatic'
	},
	{ 
		make: 'Audi', 
		carmodel: 'A4', 
		year: 2016, 
		price: 30000, 
		doors: 4, 
		color: 'Blue', 
		transmission: 'automatic'
	}
];

// The old way!
// for(let i = 0; i < cars.length; i++){
// 	console.log(cars[i]);
// }

// Filter black cars
// let result = [];
// for(let i = 0; i < cars.length; i++){
// 	if(cars[i].color === 'Black'){
// 		result.push(cars[i]);
// 	}
// }
// console.log(result);


// forEach
// cars.forEach(car => console.log(car));

// Map
// cars.map(car => {
// 	console.log(car)
// });

// Map creates a new array

// let result = cars.map(car => car);
// console.log(result);

// The difference: Map Creates a new array!

// let result = cars.map(car => car);
// console.log(result);

// let result2 = cars.forEach(car => car);
// console.log(result2);

// Extract any element with map
// let result = cars.map(car => {
// 	if(car.color === 'Black'){
// 		return car;
// 	}
// });
// console.log(result);

// FILTER
// let result = cars.filter(car => car.make !== 'BMW');
// let result = cars.filter(car => car.make === 'BMW');
// let result = cars.filter(car => car.color === 'Red');
// let result = cars.filter(car => car.doors === 2);
// let result = cars.filter(car => car.year >= 2015);
// let result = cars.filter(car => car.year <= 2015);
// let result = cars.filter(car => car.year >= 2015 && car.make === 'BMW');
// let result = cars.filter(car => car.price >= 50000 && car.price <= 60000);
// console.log(result);

// FIND
// let result = cars.find(car => car.make === 'BMW');
// let result = cars.find(car => car.carmodel === 'Mustang');
// let result = cars.find(car => car.year >= 2015);
// let result = cars.find(car => car.year >= 2015 && car.make === 'BMW');

// console.log(result);


// REDUCE
// Output one single value
// let result = cars.reduce((total, car) => total + car.price, 0  );

// const numbers = [1,2,3];
// let result = numbers.reduce((total, number) => total + number, 0);


// SOME
// RETURNS TRUE OR FALSE!!
// let result = cars.some(car => car.make === 'BMW');
// let result = cars.some(car => car.make === 'Ferrari');
let result = cars.some(car => car.make > 100000);

console.log(result);