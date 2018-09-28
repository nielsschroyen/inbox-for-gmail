(function() {
  'use strict';

   //Set stylesheet
  var style = document.createElement('style');
  style.type = "text/css";
  style.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(style);

  //Show sun if no messages are present otherwise hide it
  window.setInterval(()=>showHideSunshine(), 500);

  function showHideSunshine(){
    if(!inboxLoaded())
        return;

    if(emptyEmailBoxShown() && !sunshineShown()){
        showSunshine();
    }
    
    if(!emptyEmailBoxShown() && sunshineShown()){
        hideSunshine()
    }
  }

  var emptyEmailBoxShown = () => document.querySelectorAll('.TD').length > 0;
  var sunshineShown = () => document.querySelectorAll('.sunshine').length > 0;
  var inboxLoaded = () => document.querySelectorAll('.Cp').length > 0;

  function showSunshine(){
    var div = document.createElement("div");
    div.setAttribute('class', 'sunshine');
    document.querySelector(".AO div div").appendChild(div);
  }

  function hideSunshine(){
    var elements = document.querySelectorAll('.sunshine');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }
})();