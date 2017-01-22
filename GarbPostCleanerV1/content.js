// content.js
<<<<<<< HEAD
// alert("Hello from your Chrome extension!")
=======
smash();

function smash(){
  alert("Hello from your Chrome extension!")
  var posts = document.getElementsByClassName("uiStreamMessage");
  alert(posts);
  for(var i=0; i<posts.length; i++){
    if(posts[i].innerHTML.indexOf("orange") != -1){
      posts[i].parentNode.removeChild(posts[i])};
    }
  }
>>>>>>> 50d42bb4e3dad0c7587fce7d93b4a357b3299b7e
