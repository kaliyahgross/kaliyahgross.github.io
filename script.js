/* .js files add interaction to your website */

var factList = [
  "Almost half of U.S. states has no wage law, making the minimum wage $7.25/hr",/*0*/
  "The legal minimum wage law in the U.S. was last raised on July 24, 2009 to $7.25/hr",/*1*/
  "Despite the minimum wage law of $7.25/hr for U.S, states, the minimum wage in Wyoming and Georgia is $5.15/hr",/*2*/
  "The District of Columbia is the only place in America with a minimum wage that reaches $15/hr"];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
