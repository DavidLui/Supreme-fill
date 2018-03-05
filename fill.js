
// ==UserScript==
// @name         supreme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.supremenewyork.com/checkout
// @grant        none
// ==/UserScript==

var 
YOURNAME = "order_billing_name",
YOUREMAIL = "order_email",
YOURTEL = "order_tel",
YOURADDRESS = "bo",
YOURAPT = "oba3",
YOURZIP = "10013",
YOURCITY = "New York",
YOURSTATE = "NY",
YOURCC = "XXXX YYYY ZZZZ SSSS", //keep this format
YOURMONTH = "09",
YOURYEAR = "2021",
CCV = "123";

var items = [];
items.push(["#order_billing_name", YOURNAME]);
items.push(["#order_email", YOUREMAIL]);
items.push(["#order_tel", YOURTEL]);
items.push(["#bo", YOURADDRESS]);
items.push(["#oba3", YOURAPT]);
items.push(["#order_billing_zip", YOURZIP]);
items.push(["#order_billing_city", YOURCITY]);
items.push(["#order_billing_state", YOURSTATE]);

items.push(["#credit_card_year", YOURYEAR]);
items.push(["#credit_card_month", YOURMONTH]);
items.push(["#nnaerb", YOURCC]);
items.push(["#orcer", CCV]);

setTimeout(function(){
$(".icheckbox_minimal").click();
},3230);

for (let i = 0; i < items.length; i++) {
setTimeout(
function(){
$(items[i][0]).val(items[i][1]); 


},(3000/items.length)*i);
}

