
// ==UserScript==
// @name         supreme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.supremenewyork.com/checkout
// @grant        none
// ==/UserScript==

(function() {

var yourCCnumber = "XXXX YYYY ZZZZ SSSS", //keep this format
YOURMONTH = "09",
YOURYEAR = "2021",
CCV = "123";


$(".icheckbox_minimal").click();
$("#orcer").val(CCV); 
document.getElementById("credit_card_year").value=YOURYEAR;
document.getElementById("credit_card_month").value=YOURMONTH; 
document.getElementById("nnaerb").value = yourCCnumber;
})();
