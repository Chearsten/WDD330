/* This is a note in JavaScript. This file is externally connected to the HTML*/
/* EXAMPLE 1 Rainbow Page */
const btn = document.getElementById('button');
/*Use the document.getElementById function to find the HTML element with the ID of btn. This is then assigned to the btn variable.*/
const rainbow = ['mistyrose','peachpuff','lemonchiffon','honeydew','lightcyan','lavender','lavenderblush'];
/*Create an array containing a list of strings of different colors is then assigned to the rainbow variable.*/
function change() {      
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
/*Create a function called change. Selecting the background color of the body element & the built-in Math object randomly choosing a color from the array.*/
btn.addEventListener('click', change);
/*create an event handler, which checks for when the button is clicked on. When this happens it calls the change function*/


/* EXAMPLE 2 
Main Quiz JS and CSS QuizStyles file*/



/* EXAMPLE 3 */



/* EXAMPLE 4 */




/* EXAMPLE 5 */



/* EXAMPLE 6 */

