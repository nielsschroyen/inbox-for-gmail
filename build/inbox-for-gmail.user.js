"use strict";

// ==UserScript==
// @name        Inbox for Gmail
// @namespace   https://github.com/nielsschroyen/inbox-for-gmail
// @description Make Gmail look like Google Inbox.
// @author      Niels Schroyen
// @copyright   2018+, Niels Schroyen (https://github.com/nielsschroyen/inbox-for-gmail)
// @license     MIT; https://raw.githubusercontent.com/nielsschroyen/inbox-for-gmail/master/LICENSE
// @version     1.0.0
// @icon        https://github.com/nielsschroyen/inbox-for-gmail/master/icon.png
// @homepageURL https://github.com/nielsschroyen/inbox-for-gmail
// @supportURL  https://github.com/nielsschroyen/inbox-for-gmail
// @include     https://mail.google.com/mail/* 
// @grant       none
// ==/UserScript==

var styleSheet = "" +
//Hide Communication
".akc.aZ6.nH.oy8Mbf.nn.aCl {" +
    "display:none;" +
"}" +
//Hide Footer
".aeG {" +
  "display:none;" +
"}   " +

//Hide Sidebar
".nH.bAw.nn {" +
  "display:none;" +
"}" +

//No gray color for read messages
"tr.yO {" +
  "background-color:#ffffff;" +
"}" +

//Gray color for unread messages
"tr.zE {" +
  "background-color:rgba(242,245,245,0.8);" +
"}" +

//More spacing in messages
"tr.zA {" +
  "padding-top:20px;" +
  "padding-bottom:20px;" +
"}" +

//Blue Header
".gb_de {" +
  "background-color:#4285f4!important;" +
"}" +

//White icons
".gb_Ta svg {" +
  "color:white!important;" +
  "opacity:1!important;" +
"}" +

//Transparent header button
".gb_Ra {" +
  "background:transparent!important;" +
  "border-width:0!important;" +
"}" +

//White search placeholder
".gb_bf::-webkit-input-placeholder {" +
  "color: white!important;" +
"}" +

//White search text
"input.gb_bf {" +
  "color: white;" +
"}" +

//Shadow on header
".gb_de {" +
  "box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);" +
"}" +

//Smaller width inbox
".nH.bkK.nn {" +
  "width: 1404px!important;" +
  "margin-left: auto;" +
  "margin-right: auto;" +
"}" +


".aeJ {" +
  "overflow-y: inherit!important;" +
"}" +

".no {" +
  "overflow:auto;" +
"}" +

".nH.bkK.nn {" +
  "overflow: initial!important;" +
"}" +

".TD { " +
  "display: none;" +
"}" +

//Hide gmail text from logo
".gb_Wa {" +
   "width: 45px !important;" +
   "object-fit: cover;" +
   "object-position: left;" +
   "margin-left: 15px;" +
  "}" +

//Remove company image
".gb_Wa.gb_Va {" +
  "display:none;" +
"}" +

//Sun logo
".sunshine { " +
  "background-color: #7baaf7;" +
  "margin-top: 16px;" +
  "margin-left: auto;  " +
  "margin-right: auto; " +
  "border-radius: 50%; " +
  "box-shadow: inset 0 0 2px rgba(0,0,0,.12), inset 0 2px 4px rgba(0,0,0,.24);" +
  "height: 720px; " +
  "overflow: hidden;" +
  "width: 720px;" +
  "background-position: center;" +
  "background-repeat: no-repeat;" +
  "background-image: url(https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/zero/2x/ic_zero_inbox_2x.png);" +
 "	opacity: 1;" +
 "	animation-name: fadeInOpacity;" +
 "	animation-iteration-count: 1;" +
 "	animation-timing-function: ease-in;" +
 "	animation-duration: 2s;" +
"}" +

"@keyframes fadeInOpacity {" +
  "0% {" +
  "	opacity: 0;" +
  "}" +
  "100% {" +
 "	opacity: 1;" +
 "}" +
"}" +
"";
(function() {  'use strict';   //Set stylesheet  var sunAdded = false;  var s = document.createElement('style');  s.type = "text/css";  s.innerHTML = styleSheet;  (document.head || document.documentElement).appendChild(s);  var myDoc = document;  window.setInterval(function(){      var bla = myDoc.querySelectorAll('.TD');     if(myDoc.querySelectorAll('.TD').length > 0 && myDoc.querySelectorAll('.sunshine').length == 0 && myDoc.querySelectorAll('.Cp').length > 0){         var div = myDoc.createElement("div");         div.setAttribute('class', 'sunshine');         myDoc.querySelector(".AO div div").appendChild(div);     }      if(myDoc.querySelectorAll('.TD').length == 0 && myDoc.querySelectorAll('.sunshine').length > 0 && myDoc.querySelectorAll('.Cp').length > 0){          console.log( myDoc.querySelectorAll('.TD').length);          var elements = myDoc.getElementsByClassName('sunshine');          while(elements.length > 0){              elements[0].parentNode.removeChild(elements[0]);          }     }}, 500);})();