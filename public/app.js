// 1. Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!

function newCat(name, food){

  var newCat = document.createElement("ul");
  newCat.classList.add("cat");
  var newName = document.createElement("li");
  newName.innerHTML = "Name: " + name;
  var newFavFood = document.createElement("li");
  newFavFood.innerHTML = "Favourite food: " + food;
  newCat.appendChild(newName);
  newCat.appendChild(newFavFood);
  var newPic = document.createElement("img");
  newPic.src = "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg";
  newPic.width = 500;
  newCat.appendChild(newPic);
  var cats = document.getElementById("cats");
  cats.appendChild(newCat);

}

window.onload = function(){
  newCat("Cataract", "Sardinotas")

}