(function() {
  'use strict';

   //Set stylesheet
  var sunAdded = false;
  var s = document.createElement('style');
  s.type = "text/css";
  s.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(s);

  var myDoc = document;
  window.setInterval(function(){
      var bla = myDoc.querySelectorAll('.TD');
     if(myDoc.querySelectorAll('.TD').length > 0 && myDoc.querySelectorAll('.sunshine').length == 0 && myDoc.querySelectorAll('.Cp').length > 0){
         var div = myDoc.createElement("div");
         div.setAttribute('class', 'sunshine');
         myDoc.querySelector(".AO div div").appendChild(div);
     }
      if(myDoc.querySelectorAll('.TD').length == 0 && myDoc.querySelectorAll('.sunshine').length > 0 && myDoc.querySelectorAll('.Cp').length > 0){
          console.log( myDoc.querySelectorAll('.TD').length);
          var elements = myDoc.getElementsByClassName('sunshine');
          while(elements.length > 0){
              elements[0].parentNode.removeChild(elements[0]);
          }
     }
}, 500);
})();