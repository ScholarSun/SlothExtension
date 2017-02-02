// content.js
// alert("Hello from your Chrome extension!")
getpost();
var scroll = _.debounce(getpost, 300);
document.addEventListener("scroll", scroll);

function getpost(){
  var suck = [];
  var divs = document.getElementsByClassName('_5pbx');
  var stringchild = [];
  var numero = 0;
  //console.log(divs);
  for (var i=0, max=divs.length; i < max; i++) {
    dive = divs[i];
    //console.log(dive);
    //check if already checked
    if(_.contains(suck,dive)===false){
      //dissect element
      suck.push(dive.innerText);
      numero=numero+1;
      if((filter(dive.innerText,"profile"))!=true){
        dive.innerText=filter(dive.innerText,"profile");
      }
    }
  }
  console.log(numero);
  console.log("suck list");
  console.log(suck);
}

function filter(post, blacklist) {
  console.log(post);
  console.log(blacklist);
  //dictionary of sloth facts
  var dict = [
    "Sloth tongues can extend 10 - 12 inches out of their mouths", "There are two types of sloths: the two-toed sloth and the three-toed sloth.",
    "Sloths are closely related to anteaters and armadillos.", "Sloths move slow enough for algae and various creatures to live in their fur, turning them into mini-ecosystems.", "Sloths rarely climb down from the trees they live in unless they need to take their weekly dump.", "Two-toed sloths are nocturnal while Three-toed sloths are diurnal.", "Wild sloths live for around 10 - 16 years while sloths in captivity can live up to 30 years old.", "Sloths sleep for around 10 hours a day.", "Sloths can swim.", "Some extinct varieties of sloths used to be as big as elephants."
  ];
  // generate a random sloth fact
  var message_number = Math.floor(Math.random() * (dict.length));
  if (post.toLowerCase().includes(blacklist.toLowerCase())) {
    return dict[message_number];
  }
  return true;
}

function nodeToString ( node ) {
  var tmpNode = document.createElement( "div" );
  tmpNode.appendChild( node.cloneNode( true ) );
  var str = tmpNode.innerHTML;
  tmpNode = node = null; // prevent memory leaks in IE
  return str;
}
