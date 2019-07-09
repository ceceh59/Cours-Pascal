/* TABLEAU ASSOCIATIF */
var user = [];
user['nom'] = "nom du l'utilisateur";
user['age'] = 99;

console.log(user['nom']);
// tableau associatif : associer des clés à des valeurs

// déclarer un tableau de plusieurs utilisateurs
var users = [];
// ajouter un utilisateur au tableau des utilisateurs
users.push(user);

// créer un deuxième utilisateur
var user = [];
user['nom'] = "nom du l'utilisateur 2";
user['age'] = 26;
// l'ajouter également au tableau des utilisateurs
users.push(user);

console.log(users);

// récupérer le premier utilisateur en partant du tableau de tous les
// utilisateurs

console.log(users[0]);
console.log(users[0]['nom']);

// créer un troisième utilisateur
var user3 = [];
user3['nom'] = "name3";
user3['age'] = 36;
users.push(user3);

/* Exercice : 
	Gestion de produits
	- Créer un tableau avec 10 produits
	  qui ont les propriétés suivantes :
	  - nom 
	  - prix
	  - stock restant
	le 1er produit produit doit avoir le "nom1", le prix 1,
	et le stock 10
	le 2em produit doit avoir le nom "nom2", le prix 2,
	et le stock 9
	le 3em produit doit avoir le nom "nom3", le prix 3,
	et le stock 8
	
	- afficher dans la console tous les produits,
	avec un produit par ligne (soit un console.log par produit)

	- afficher pour chaque produit la mention
	"Disponible" ou "Indisponible", toujours dans un console.log

	Algo :
	- déclarer un tableau
	- faire une boucle FOR pour ajouter les 10 produits dans
	ce tableau. Chacun de ces produits est lui-même un tableau.
*/
var produits = [];

/*
var produit = [];
produit['nom'] = "nom1";
produit['prix'] = 1;
produit['stock'] = 10;
produits.push(produit);

var produit = [];
produit['nom'] = "nom2";
produit['prix'] = 2;
produit['stock'] = 9;
produits.push(produit);

var produit = [];
produit['nom'] = "nom3";
produit['prix'] = 3;
produit['stock'] = 8;
produits.push(produit);
*/

for (i=0;i<10;i++) {
	var produit = [];
	produit['nom'] = "nom" + (i + 1);
	produit['prix'] = i + 1;
	produit['stock'] = 10 - i;
	produits.push(produit);
}

console.log(produits);
/*
Pour éviter de faire 10 fois un traitement similaire
console.log(produits[0]);
console.log(produits[1]);
console.log(produits[2]);
*/

/* on utilise une boucle avec cette instruction dynamisée */
for (j=0;j<produits.length;j++) {
	console.log(produits[j]);

	if (produits[j]['stock'] > 0) {
		console.log("Disponible");
	}
	else {
		console.log("Indisponible");
	}
}