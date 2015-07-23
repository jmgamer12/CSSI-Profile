/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var div = document.getElementById('content');
var div1 = document.getElementById('short_Bio');
var div2 = document.getElementById('Interests');
var div3 = document.getElementById('Contact');
var div4 = document.getElementsByClassName('social_Media');


function goGetLunch (name) {
    alert("You, " + name);
    alert("Close Computer");
    alert("Standup");
    alert("Walk out the door & go get lunch");

};

//goGetLunch("Jeremy")

function askForName() {
    var myName;
    var myName = prompt("What is your name?");
    goGetLunch(myName);
};
function eatLunch() {
    var eatingP = $(".eating");
    eatingP.text("omonomonom");
    };

var button = document.getElementById('hideshow'); // Assumes element with id='button'

function show() {
    var div = document.getElementById('content');
    if (div.style.display !== "none") {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
function showHide() {
var div1 = document.getElementById('short_Bio');
if (div1.style.display !== "none") {
    div1.style.display = 'none';
}
else {
    div1.style.display = 'block';
    }
 };
function showHide2() {
var div2 = document.getElementById('Interests');
if (div2.style.display !== "none") {
  div2.style.display = 'none';
}
else {
  div2.style.display = 'block';
  }
};
function showHide3() {
var div3 = document.getElementById('Contact');
if (div3.style.display !== "none") {
   div3.style.display = 'none';
}
else {
   div3.style.display = 'block';
   }
};
function showHide4() {
var div4 = document.getElementsByClassName('social_Media');
if (div4.style.display !== "none") {
    div4.style.display = 'none';
}
else {
    div4.style.display = 'block';
    }
};
function hideText() {
  var text = document.getElementsByClassName('eating');
  if (div.style.display == 'block' || div1.style.display == 'block' || div2.style.display == 'block' || div3.style.display == 'block' || div4.style.display == 'block') {
    text.style.display = 'none';
  } else {
    text.style.display = 'block';
  }
};
