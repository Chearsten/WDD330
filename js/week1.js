/* This is a note in JavaScript. This file is externally connected to the HTML*/

function loadStory(){
    var storyName = document.getElementById("name_input").value 
    var storyHTML = localStorage.getitem(storyName) 
    document.getElementById("story_editor").value=storyHTML
}
function saveStory(){
    var storyName=document.getElementById("name_input").value 
    var storyHTML=document.getElementById("story_editor").value
    localStorage.setItem(storyName,storyHTML)
}
function displayStory(){
    var storyHTML=document.getElementById("story_editor").value
    document.getElementById("story_display").innerHTML=storyHTML
}
