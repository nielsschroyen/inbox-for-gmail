(function() {
  'use strict';

   //Set stylesheet
  var s = document.createElement('style');
  s.type = "text/css";
  s.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(s);

  //Show sun if no messages are present otherwise hide it
  var myDoc = document;
  window.setInterval(function(){
     if(myDoc.querySelectorAll('.TD').length > 0 && myDoc.querySelectorAll('.sunshine').length == 0 && myDoc.querySelectorAll('.Cp').length > 0){
         var div = myDoc.createElement("div");
         div.setAttribute('class', 'sunshine');
         myDoc.querySelector(".AO div div").appendChild(div);
     }
      if(myDoc.querySelectorAll('.TD').length == 0 && myDoc.querySelectorAll('.sunshine').length > 0 && myDoc.querySelectorAll('.Cp').length > 0){
          var elements = myDoc.querySelectorAll('.sunshine');
          while(elements.length > 0){
              elements[0].parentNode.removeChild(elements[0]);
          }
     }
}, 500);

    
})();