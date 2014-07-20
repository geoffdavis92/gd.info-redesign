// Adds profile.ico to page

//<link href="img/profile.ico" rel="icon">
function profileICO(){
  var cLink = document.createElement("link");
  document.head.appendChild(cLink);
  cLink.setAttribute("href", "../img/profile.ico");
  cLink.setAttribute( "rel", "icon");
}

profileICO();
