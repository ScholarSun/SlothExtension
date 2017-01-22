
function filter(post, blacklist) {
//dictionary of sloth facts
var dict = [
  "There are two types of sloths: the two-toed sloth and the three-toed sloth.",
"Sloths are closely related to anteaters and armadillos.", "Sloths move slow enough for algae and various creatures to live in their fur, turning them into mini-ecosystems."
];

var message_number = Math.floor(Math.random() * (dict.length));

if (post.includes(blacklist)) {
	return dict[message_number];
}

return post;
}

var ay = "i eat bean";
var lmao = "ass";
process.stdout.write(filter(ay, lmao));
