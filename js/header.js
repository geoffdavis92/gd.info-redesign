// ALSAC Folder - Header JavaScript

// ADD:

// About
// Internship
// Portfolio
// Resum&acutee;

var cHA = document.createElement("a");
var cHead = document.createElement("header");
var cNav = document.createElement("nav");

function createH(){
  document.body.cHead;
  document.body.appendChild(cHead);
  var cH1 = document.createElement("h1");
  cHead.appendChild(cH1);
  var cH1Text = document.createTextNode("Geoff Davis");
  cH1.appendChild(cH1Text);

  //Create Nav Ul
  cHead.appendChild(cNav);
  var nUl = document.createElement("ul");
  cNav.appendChild(nUl);
  nUl.setAttribute("id","navList");

  //Create Li
  var nUlLi1 = document.createElement("li");
  nUl.appendChild(nUlLi1);
  var nUlLi2 = document.createElement("li");
  nUl.appendChild(nUlLi2);
  var nUlLi3 = document.createElement("li");
  nUl.appendChild(nUlLi3);
  var nUlLi4 = document.createElement("li");
  nUl.appendChild(nUlLi4);

  // Create and Link Anchors
  var nUlLiA1 = document.createElement("a");
  nUlLi1.appendChild(nUlLiA1);
  nUlLiA1.setAttribute("href","index.html"); //main index
  nUlLiA1.setAttribute("id","a1");
  var nUlLiA2 = document.createElement("a");
  nUlLi2.appendChild(nUlLiA2);
  nUlLiA2.setAttribute("href","about.html"); //about page
  nUlLiA2.setAttribute("id","a2");
  var nUlLiA3 = document.createElement("a");
  nUlLi3.appendChild(nUlLiA3);
  nUlLiA3.setAttribute("href","/alsac/"); //internship index
  nUlLiA3.setAttribute("id","a3");
  var nUlLiA4 = document.createElement("a");
  nUlLi4.appendChild(nUlLiA4);
  nUlLiA4.setAttribute("href","/portfolio/"); //portfolio index

  // Create Anchor Text
  var a1Text = document.createTextNode("Home");
  nUlLiA1.appendChild(a1Text);
  var a2Text = document.createTextNode("About");
  nUlLiA2.appendChild(a2Text);
  var a3Text = document.createTextNode("Internship");
  nUlLiA3.appendChild(a3Text);
  var a4Text = document.createTextNode("Portfolio");
  nULiA4.appendChild(a4Text);

  function styleNav(){
    // cNav = nav element
    // nUl = ul element

      cNav.style.color = "white";
      cNav.style.fontWeight = "medium";
    }

  function styleH(){
    cHead.style.fontFamily = "Helvetica, monospace";
    cHead.style.color = "#ffffff";
    cHead.style.width = "80%";
    cHead.style.marginLeft = "10%";
    cHead.style.marginRight = "10%";
    cHead.style.marginBottom = "2.5%";
    cHead.style.backgroundColor = "#9D2042";
    cHead.style.textAlign = "center";
    cHead.style.paddingTop = ".25%";
    cHead.style.borderRadius = "25px";
    }

  styleH();
  styleNav();
/* END of HEADER creation */ }
