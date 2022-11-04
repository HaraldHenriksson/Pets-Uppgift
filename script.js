/**
 * DOM - Document Object Model - Petslist
 *
 * TODO:
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet:
 *
 * NAME is a SPECIES of AGE year(s) old.
 * His owner is OWNER and his favorite hobbies is to HOBBIES.
 */

// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	}
];


const petsList = document.querySelector('#petslist')
let ownerCheck ="";

pets.forEach(pet => {

	if(pet.owner){
		ownerCheck = pet.owner.name
	} else {
		ownerCheck = "N/A"
	}

	petsList.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} years old <br> His owner is ${ownerCheck} and his favorite hobbies is to ${pet.hobbies.join(', ')} </li>`
});

for (let i = 0; i < pets.length; i++){
	const pet = pets[i];
	console.log(pet);
}
