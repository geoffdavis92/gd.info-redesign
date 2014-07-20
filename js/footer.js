//ALSAC Folder Footer JavaScript

var cFoot = document.createElement("footer");
var cFL = document.createElement("div");
var cFA = document.createElement("a");


function createF(){
  document.body.cFoot;
  document.body.appendChild(cFoot);

  document.body.cFL;
  cFoot.appendChild(cFL);

  document.body.cFA;
  cFoot.appendChild(cFA).setAttribute("href","../");
  var footLink = document.createTextNode("return to geoffdavis.info");
  cFA.appendChild(footLink);

    function styleF(){
      cFoot.style.width = "100%";
      cFoot.style.textAlign = "center";
      cFL.style.width = "80%";
      cFL.style.height = "2px";
      cFL.style.backgroundColor = "#ddd";
      //cFL.style.borderRadius = "10px";
      cFL.style.marginLeft = "10.1%";
      cFL.style.marginTop = ".75%";
      cFL.style.marginBottom = ".25%";
    //  cFA.style.color = "#bbb";
//      cFoot.style.marginLeft = "0%";
    }
    styleF();
}
