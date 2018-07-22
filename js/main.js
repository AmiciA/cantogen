// VARIABLES
var nameFormat;
var nameGender;
var nameGenderReset;
var nameAmount;

var firstFemaleAmt = firsts[0].length; 
var firstMaleAmt   = firsts[1].length;
var engFemaleAmt   = engs[0].length;
var engMaleAmt     = engs[1].length;
var lastAmt        = lasts.length;

var resultsString;


// BUILD NAMES
function getRandomInt(max) { return Math.floor(Math.random() * Math.floor(max)); }

function getEngName(g) {
  if      (g == 'f') { return engs[0][getRandomInt(engFemaleAmt)]; }
  else if (g == 'm') { return engs[1][getRandomInt(engMaleAmt)]; }
}
function getFirstName(g) {
  if      (g == 'f') { return firsts[0][getRandomInt(firstFemaleAmt)]; }
  else if (g == 'm') { return firsts[1][getRandomInt(firstMaleAmt)]; }
}
function getLastName() {
  return lasts[getRandomInt(lastAmt)];
}


// HANDLE INPUT
document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById("btn_submit").onclick = function () {
    nameGender = document.querySelector('input[name = "gender"]:checked').value; 
    nameFormat = document.querySelector('input[name = "format"]:checked').value;
    nameAmount = document.querySelector('input[type = "number"]').value;
    
    document.getElementById("txt_results").innerHTML = '';
    
    for (var i=0; i < nameAmount; i++) {
      if (nameGender == 'x') {
        nameGender = 'f';
        if (getRandomInt(2) == 1) { nameGender = 'm'; }
        nameGenderReset = true;
      }

      if      (nameFormat == 'en') { resultsString = getEngName(nameGender) + " " + getLastName(); }
      else if (nameFormat == 'zh') { resultsString = getLastName() + " " + getFirstName(nameGender); }
      else if (nameFormat == 'bo') { resultsString = getEngName(nameGender) + " " + getLastName() + " " + getFirstName(nameGender); }
    
      document.getElementById("txt_results").innerHTML += resultsString + '<br>';
      document.getElementById("disclaimer").style.display = "inline";
    
      if (nameGenderReset == true) { nameGender = 'x' }
    }
    
    nameGenderReset = false;
  }
});
 