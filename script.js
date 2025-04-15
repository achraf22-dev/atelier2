// -------------------- Exercice 5 --------------------

// 1. Livres
let books = ["1984", "Le Meilleur des mondes", "Dune"];
books.push("Fahrenheit 451");
console.log("Après push:", books);
books.unshift("Foundation");
console.log("Après unshift:", books);
books.pop();
console.log("Après pop:", books);
books.shift();
console.log("Après shift:", books);

// 2. Catégories
let categories = new Set(["Fiction", "Science", "Histoire"]);
categories.add("Philosophie");
console.log("Après ajout:", Array.from(categories)); // Converts Set to array for display
categories.add("Fiction"); // pas de duplication
categories.delete("Science");
console.log("Après suppression:", Array.from(categories)); // Converts Set to array for display

// 3. Emprunts
let borrows = new Map();
borrows.set("1984", "Ali");
borrows.set("Dune", "Samira");
borrows.set("Foundation", "Karim");
console.log("Emprunts:", Array.from(borrows.entries())); // Displays Map entries in key-value pairs
borrows.delete("1984");
console.log("Après suppression:", Array.from(borrows.entries())); // Displays Map entries in key-value pairs
console.log("Dune emprunté?", borrows.has("Dune"));