
function filter(post, blacklist) {
//dictionary of sloth facts
var dict = [
  "1: There are two types of sloths: the two-toed sloth and the three-toed sloth",
"2: Sloths are closely related to anteaters and armadillos", "3: Sloths move slow enough for algae and various creatures to live in their fur, turning them into mini-ecosystems"
];

var message_number = Math.floor(Math.random() * (dict.length));

var n = post.includes(blacklist);
if (n===true) {
	return dict[message_number];
}else{
return post;
}
}

var ay = "i eat bean";
var lmao = "bean";
process.stdout.write(filter(ay, lmao));
