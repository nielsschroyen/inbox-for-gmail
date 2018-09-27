(function() {
  'use strict';

   //Set stylesheet
  var style = document.createElement('style');
  style.type = "text/css";
  style.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(style);

  //Show sun if no messages are present otherwise hide it
  var doc = document;
  window.setInterval(showHideSunshine, 500);

  function showHideSunshine(){
    if(emptyEmailBoxShown() && !sunshineShown() && inboxLoaded()){
        showSunshine();
    }
    
    if(!emptyEmailBoxShown() && sunshineShown() && inboxLoaded()){
        hideSunshine()
    }
  }

  function emptyEmailBoxShown(){ 
    return doc.querySelectorAll('.TD').length > 0
  }

  function sunshineShown(){ 
    return doc.querySelectorAll('.sunshine').length > 0;
  }

  function inboxLoaded(){
    doc.querySelectorAll('.Cp').length > 0
  }

  function showSunshine(){
    var div = doc.createElement("div");
    div.setAttribute('class', 'sunshine');
    doc.querySelector(".AO div div").appendChild(div);
  }

  function hideSunshine(){
    var elements = doc.querySelectorAll('.sunshine');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }
})();