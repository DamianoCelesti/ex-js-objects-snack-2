const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};



/*Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?*/


/*il metodo migliore per clonare chef è lo spread operator, perchè l'oggetto non contiene strutture annidate e mantiene le funzioni a differenza di altri metodi 

il metodo migliore per copiare restaurant è usare structuredclone perchè puoi copiare strutture annidate e oggetti come date*/