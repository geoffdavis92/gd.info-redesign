// Code that shows the Phone field on ABOUT

function showPhone(){
  var screenSize = window.innerWidth;

  if(screenSize <= 400){
    console.log("The screen size is " + screenSize + ". The phone field will show up now.");
    var getPhone = document.getElementById("phone");
    var phoneTxt = document.write("<span id=\"glyph\">e</span><button href=\"callto:1-815-355-0158\" alt=\"Call me on my cell\">Call me!</button>");
   getPhone.appendChild(phoneTxt);
  }
else{
  console.log(screenSize);
}
}
