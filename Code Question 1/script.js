const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?



/*Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?


Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

/* Viene stampato 2 volte Double Cheese Burger e nella memoria è stato creato solo un oggetto e le due variabili puntano a quell'unico oggetto salvato in memoria*/