const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?



/*Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/


/* Viene stampato 2 volte "Salad" 
   l’array ingredients non viene duplicato ma viene condiviso tra hamburger e secondBurger 
   In memoria vengono creati 3 oggetti, l’oggetto hamburger, l’array ingredients, il nuovo oggetto secondBurger. 
*/