const hamburger = {
	name: "Cheese Burger",
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);


/*Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/


/* Sono stati creati 9 oggetti in memoria perchè structureClone non dublica solo l'oggeto in se ma anche tutti gli oggetti annidati quindi 3 di hamburger 3 di secondburger e altri 3 di thirdburger*/