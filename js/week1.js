/* This is a note in JavaScript. This file is externally connected to the HTML*/

/* EXAMPLE 2 Write a story*/

function loadStory(){
    var storyName = document.getElementById("name_input").value
    var storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_editor").value = storyHTML
}
function saveStory(){
    var storyName = document.getElementById("name_input").value
    var storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName,storyHTML)
}
function displayStory(){
    var storyHTML = document.getElementById("story_editor").value
    document.getElementById("story_display").innerHTML = storyHTML
}

/* EXAMPLE 3 Odd or Even Number*/

function checkNumber(){
    var numberAsText = document.getElementById("number_input").value
    var aNumber = parseInt(numberAsText)
    if(numberAsText != "" && !isNaN(aNumber)){
        var remainder = Math.abs(aNumber % 2)
        if(aNumber != 0 && remainder == 0){
      document.getElementById("result_display").innerHTML = 
          aNumber + " is even."
      }
       else if(aNumber != 0 && remainder == 1){
          document.getElementById("result_display").innerHTML = 
              aNumber + " is odd."
      }
       else{
          document.getElementById("result_display").innerHTML = 
              "0 is neither even nor odd."
      }
  }
  else{
      document.getElementById("result_display").innerHTML = "Please enter a number."
  }
}

/* EXAMPLE 4 - Group List Odd & Even*/

function checkNumbers(){

    var someNumbers = [25, 11, -2, 14, "what?? This isn't a number!", -1, -10]
    for(var i = 0; i < 7; i++){
        var numberAsText = someNumbers[i]
          var aNumber = parseInt(numberAsText)
          if(numberAsText != "" && !isNaN(aNumber)){
              var remainder = Math.abs(aNumber % 2)
              if(aNumber != 0 && remainder == 0){
            document.getElementById("result_display").innerHTML += "<p>"+
                aNumber + " is even.</p>"
            }
             else if(aNumber != 0 && remainder == 1){
                document.getElementById("result_display").innerHTML += "<p>"+ 
                    aNumber + " is odd.</p>"
            }
             else{
                document.getElementById("result_display").innerHTML += "<p>"+ 
                    "0 is neither even nor odd.</p>"
            }
        }
        else{
            document.getElementById("result_display").innerHTML += "<p>Oops. Found something that wasn't a number in position " + i + ".</p>"
        }
    }
  }


  /* EXAMPLE 5 Take Notes*/

  function saveNote(){
    var currentDateAndTime = new Date()
    /* Hey page, create a new date and time stamp and put it in the currentDateAndTime variable.*/
    var aNoteDescription = document.getElementById("description_input").value
    var aNoteText = document.getElementById("note_editor").value
    var aCompleteNote = currentDateAndTime.toLocaleString() + "--" + aNoteDescription 
    aCompleteNote += "<p>" + aNoteText + "</p>"
    /*Hey browser, make some text that is a starting paragraph
tag, append to that little bit of text whatever you find in the
aNoteText variable, then also append an ending paragraph tag.
Then take that whole piece of text, append it to what is in the
aCompleteNote variable and put everything back in the aComplete
Note variable. */

  var storedNotesString = localStorage.getItem("all_notes")
  /*Hey, local storage, get the stuff that was stored with the key ‘all_notes’ and put it in the storedNotesString variable.*/
  var allNotes = JSON.parse(storedNotesString)
  if(allNotes == null){
      allNotes = []
  }
  allNotes.push(aCompleteNote)
  var allNotesString = JSON.stringify(allNotes)
  localStorage.setItem("all_notes",allNotesString)
  showAllNotes()
  document.getElementById("description_input").value = null
  document.getElementById("note_editor").value = null
}

function showAllNotes(){
  var storedNotesString = localStorage.getItem("all_notes")
  allNotes = JSON.parse(storedNotesString)
  if (allNotes != null){
        var noteDisplayer = document.getElementById("all_notes_display")
        noteDisplayer.innerHTML = null
        var numberOfNotes = allNotes.length
        for (var i = 0; i < allNotes.length; i++) {
            var aNote = allNotes[i]
            noteDisplayer.innerHTML += "<hr><p>"+ aNote +"</p>"
        }
    }
}

 /* EXAMPLE 6 Clothing Customers*/

function addAndSaveCustomer(){
    var aName = document.getElementById("name_input").value
    var aGender = document.getElementById("gender_input").value
    var anInseam = document.getElementById("inseam_input").value * 1
    var aWaist = document.getElementById("waist_input"). value * 1
    var aClothingCustomer = {
        "name":aName,
        "gender":aGender,
        "inseam":anInseam,
        "waist":aWaist
    }
    var allCustomers = null
  var storedCustomersString = localStorage["all_customers"]
  if(storedCustomersString == null){
      allCustomers = []
  }
  else{
      allCustomers = JSON.parse(storedCustomersString)
  }
  allCustomers.push(aClothingCustomer)
  var allCusomersString = JSON.stringify(allCustomers)
  localStorage["all_customers"] = allCusomersString
  showAllCustomers()

  document.getElementById("name_input").value = null
  document.getElementById("gender_input").value  = null
  document.getElementById("inseam_input").value = null
  document.getElementById("wasit_input").value = null
}
function showAllCustomers(){
    var storedCustomersString = localStorage["all_customers"]
    /*Hey localStorage, create a key called ‘all_customers’
and associate the string in the allCustomersString variable with
that key.*/
  if(storedCustomersString != null){
      var allCustomers = JSON.parse(storedCustomersString)
      var customerDisplayer = document.getElementById("all_customers_display")
        customerDisplayer.innerHTML = null
        var numberOfCustomers = allCustomers.length
        for (var i = 0; i < allCustomers.length; i++) {
            var aClothingCustomer = allCustomers[i]
            customerDisplayer.innerHTML += "<hr><p>Customer: "+ aClothingCustomer["name"] +"</p>"+"<p>Gender: "+ aClothingCustomer["gender"] +"</p>"+"<p>Inseam: "+ aClothingCustomer["inseam"] +"</p>"+"<p>Waist: "+ aClothingCustomer["waist"] +"</p>"
        }
  }
}
