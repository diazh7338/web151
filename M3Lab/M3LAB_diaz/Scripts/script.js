var insult = {};
	var randomHumanBodyParts = ["face", "ear", "toe", "mouth"];
	var randomAdjectives = ["stank", "murdering", "rotting", "vile",];
	var randomAnimals = ["Penguin's", "Polar Bear's", "Frog's", "Cockroach's","Monkey's"];
	var randomAnimalBodyParts = ["flipper", "claws", "antenna", "tail", "belly"];
	
	
	insult.randomize = function(){
	
			// Selecting a random human body part from the array:
			insult.randomHumanBodyPart = randomHumanBodyParts[Math.floor(Math.random() * 4)];
	
			// Selecting a random adjective from the array:
			insult.randomAdjective = randomAdjectives[Math.floor(Math.random() *4)];
	
			// Selecting a random animal from the array:
			insult.randomAnimal = randomAnimals [Math.floor(Math.random() *5)];
	
			// Selecting a random animal body part from the array:
			insult.randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() *5)];
			}
			
	insult.build = function(){
			insult.randomInsult = "Your " + insult.randomHumanBodyPart + " is more " + 
			insult.randomAdjective + " than a " + insult.randomAnimal + " " + insult.randomAnimalBodyPart + ".";
	}
	
	
	// Creating a sentence 
	insult.print = function(){
			
			document.write(insult.randomInsult);
			}
			
	insult.printBig = function(){
		var openTag = "<h1 style='fontSize:80;'>"
		var closeTag = "</h1>"
		document.write(openTag + insult.randomInsult + closeTag);
	}
			
			
			
	//print the roast out
	insult.randomize();
	insult.build();
	insult.print();
	insult.printBig();