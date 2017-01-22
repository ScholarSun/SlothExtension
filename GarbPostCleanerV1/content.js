// content.js
// alert("Hello from your Chrome extension!")
getpost();
smash();
var scroll = _.debounce(getpost, 300);
document.addEventListener("scroll", scroll);

function getpost(){
  var suck = [];

  var conten = document.getElementsByTagName("P");
  var divs = document.getElementsByClassName('_5pbx');

  var div;
  var i = divs.length;

  while (i--) {
    div = divs[i];
    div.parentNode.removeChild(div);
    var node = document.createElement("P");                 // Create a <li> node
    var textnode = document.createTextNode("Water bruh yo");         // Create a text node
    node.appendChild(textnode);
    console.log(node.appendChild(textnode));
    //div.parentNode.appendChild(node);                              // Append the text to <li>
    //document.getElementByClassName("_5pbx").appendChild(node);

  }

  /*for (var i=0, max=conten.length; i < max; i++) {
    console.log(conten.item(i));
    if(_.contains(suck,conten)===false){
      suck.push(conten);
    }
  }*/
  console.log("BREAK HERE");
  for(var i=0, max=suck.length; i < max; i++){
  console.log(suck[i]);
  }
}

function smash(){
  alert("Hello from your Chrome extension!")
  var posts = document.getElementsByClassName("uiStreamMessage");
  alert(posts);
  for(var i=0; i<posts.length; i++){
    if(posts[i].innerHTML.indexOf("orange") != -1){
      posts[i].parentNode.removeChild(posts[i])};
    }
  }

  function replace(){

  }
