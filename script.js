var featured = document.getElementById("featured");

var sticky_box = document.getElementById("sticky-box");
var sticky_pos = sticky_box.offsetTop;

var projects_container = document.getElementById("projects")

window.onscroll = function() {
  make_sticky();
}

function make_sticky(){
  if (window.pageYOffset >= sticky_pos) {
    sticky_box.classList.add("sticky");
  } else {
    sticky_box.classList.remove("sticky");
  }
}

function show_projects(){
  console.log("called");
  featured.style.display="none";
  projects_container.classList.remove("hidden");
}
