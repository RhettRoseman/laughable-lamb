//Created by MB 

var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  
    fetch(requestUrl)
      .then(function (response) { //first response 
        return response.json();
      })
      .then(function (data) { //2nd  data
        console.log(data)
        // Loop over the data to generate a table, each table row will have a link to the repo url
        for (var i = 0; i < data.length; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createTableRow = document;
          var tableData = document.createElement('td');
          var link = document.createElement('a');
  
          // Setting the text of link and the href of the link
          link.textContent = data[i].html_url;
          link.href = data[i].html_url;
  
          // Appending the link to the tabledata and then appending the tabledata to the tablerow
          // The tablerow then gets appended to the tablebody
          tableData.appendChild(link);
          createTableRow.appendChild(tableData);
          tableBody.appendChild(createTableRow);
          console.log(fetchButton)
        }
     });
  }

  getApi();
  
  fetchButton.addEventListener('click', getApi);

  
  const form = document.querySelector('form');
  // form.submit();

  //Matt js
  var submitButton = document.querySelector('#submitBtn');
var userSkinTone = document.querySelector('#userTone');
var makeupForm = document.querySelector('#userMakeup');
var resetButton = document.querySelector('#resetBtn');


const umakeupForm = document.getElementById("userMakeup");
const skinToneInput = document.getElementById("userSkinTone");
const lipstickInput = document.getElementById("userLipstick");
const eyeshadowInput = document.getElementById("userEyeshadow");
const makeupSubmit = document.getElementById("submitBtn");
const userList = document.getElementById("userList");

// function saveMakeup(){
  
// var makeupUser = {
//   userTone: userTone.value
 
// };

// localStorage.setItem('makeupUser', JSON.stringify(makeupUser));
//   };

// function displayMakeup(e){
//   console.log(e.target);
// e.preventDefault();
// console.log(e);
// var userSelect =JSON.parse(localStorage.getItem("makeupUser"));
// console.log(userSelect.userTone);
// }

// console.log(userSelect);



//submitButton.addEventListener("click", displayMakeup);//{
//   e.preventDefault();
//   saveMakeup();
//   displayMakeup();
// });

let userStorage = localStorage.getItem("userList")
  ? JSON.parse(localStorage.getItem("userList"))
  : [];
//results page MB
umakeupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userStorage.push(skinToneInput.value);
  userStorage.push(lipstickInput.value);
  userStorage.push(eyeshadowInput.value);

  //notesStorage.push(noteInput.value);
  localStorage.setItem("userList", JSON.stringify(userStorage));
  listBuilder(skinToneInput.value);
  listBuilder(lipstickInput.value);
  listBuilder(eyeshadowInput.value);
  //noteInput.value = "";
});

const listBuilder = (text) => {
  const item = document.createElement("li");
  item.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
  userList.appendChild(item);
};
//commented 

// resetButton.addEventListener('click', 
// notes.innerHTML="";
// localStorage.clear();


resetButton.addEventListener('click', function(){
localStorage.clear();
window.location.reload();
});


// localStorage.setItem("makeupUser", JSON.stringify(makeupUser));
// renderMessage();

// // });

// function renderMessage() {
// var user = JSON.parse(localStorage.getItem("makeupUser"));

// console.log(user);
//   // document.getElementById("test").textContent = lastCx.customer + 
//   // " received a/an "
// }


//   let userSkinTone = document.getElementById('skinTone').value;

