// content.js
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
