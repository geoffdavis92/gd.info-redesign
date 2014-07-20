// ALSAC Folder - Header JavaScript

var cHA = document.createElement("a");
var cHead = document.createElement("header");
var cNav = document.createElement("nav");

function createH(){
  document.body.cHead;
  document.body.appendChild(cHead);
  var cH1 = document.createElement("h1");
  cHead.appendChild(cH1);
  var cH1Text = document.createTextNode("Geoff Davis @ ALSAC");
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

  // Create and Link Anchors
  var nUlLiA1 = document.createElement("a");
  nUlLi1.appendChild(nUlLiA1);
  nUlLiA1.setAttribute("href","http://geoffdavis.info/alsac/index.html"); //main index
  nUlLiA1.setAttribute("id","a1");
  var nUlLiA2 = document.createElement("a");
  nUlLi2.appendChild(nUlLiA2);
  nUlLiA2.setAttribute("href","http://geoffdavis.info/alsac/intern/index.html"); //internship index
  nUlLiA2.setAttribute("id","a2");
  var nUlLiA3 = document.createElement("a");
  nUlLi3.appendChild(nUlLiA3);
  nUlLiA3.setAttribute("href","http://geoffdavis.info/alsac/projects/index.html"); //project index
  nUlLiA3.setAttribute("id","a3");

  // Create Anchor Text
  var a1Text = document.createTextNode("Home");
  nUlLiA1.appendChild(a1Text);
  var a2Text = document.createTextNode("Internship");
  nUlLiA2.appendChild(a2Text);
  var a3Text = document.createTextNode("Projects");
  nUlLiA3.appendChild(a3Text);

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
