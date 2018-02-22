


(function() {

var yourCCnumber = YOURCCNUMBER,
YOURMONTH = YOURMONTHNUMBER,
YOURYEAR = YOURYEARNUMBER,
CCV = YOURCCVNUMBER;


$(".icheckbox_minimal").click();
$("#orcer").val(CCV); 
document.getElementById("credit_card_year").value=YOURYEAR;
document.getElementById("credit_card_month").value=YOURMONTH; 
document.getElementById("nnaerb").value = yourCCnumber;
})();
