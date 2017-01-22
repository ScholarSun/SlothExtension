
function filter(post, blacklist) {
//dictionary of sloth facts
var dict = [
  "Sloth tongues can extend 10 - 12 inches out of their mouths", "There are two types of sloths: the two-toed sloth and the three-toed sloth.",
"Sloths are closely related to anteaters and armadillos.", "Sloths move slow enough for algae and various creatures to live in their fur, turning them into mini-ecosystems.", "Sloths rarely climb down from the trees they live in unless they need to take their weekly dump.", "Two-toed sloths are nocturnal while Three-toed sloths are diurnal.", "Wild sloths live for around 10 - 16 years while sloths in captivity can live up to 30 years old.", "Sloths sleep for around 10 hours a day.", "Sloths can swim.", "Some extinct varieties of sloths used to be as big as elephants."
];

var message_number = Math.floor(Math.random() * (dict.length));

if (post.includes(blacklist)) {
	return dict[message_number];
}

return post;
}

var ay = "i eat bean";
var lmao = "bean";
process.stdout.write(filter(ay, lmao));
