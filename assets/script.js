var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('submitBtn');

// vars for fetch display @MEB
var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');


//var fetchButton = document.getElementById('fetch-button');
function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  
    fetch(requestUrl)
      .then(function (response) { //first response 
        return response.json();

        //display the recommended makeup type based on the weather @MEB
      //   if(weatherForecast === sunny){
      //     //wear makeup type a
      //   }else if(weatherForecast === rainy){
      //     //wear makeup b
      //   } else //wear makeup c
      })
      .then(function (data) { //2nd  data
        console.log(data)
        // Loop over the data to generate a table, each table row will have a link to the repo url
        for (var i = 0; i < 10; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createTableRow = document.createElement('tr');
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
const mascaraInput = document.getElementById("userMascara");
const featuresInput = document.getElementById("userFeatures");
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

umakeupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userStorage.push(skinToneInput.value);
  userStorage.push(lipstickInput.value);
  userStorage.push(eyeshadowInput.value);
  userStorage.push(mascaraInput.value);
  userStorage.push(featuresInput.value);
  //notesStorage.push(noteInput.value);
  localStorage.setItem("userList", JSON.stringify(userStorage));
  listBuilder(skinToneInput.value);
  listBuilder(lipstickInput.value);
  listBuilder(eyeshadowInput.value);
  listBuilder(mascaraInput.value);
  listBuilder(featuresInput.value);
  //noteInput.value = "";
});

const listBuilder = (text) => {
  const item = document.createElement("li");
  item.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
  userList.appendChild(item);
};

const getChoices = JSON.parse(localStorage.getItem("userList"));
getChoices.forEach((item) => {
  listBuilder(item);
});

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



//  Handle @MEB
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  searchApi(searchInputVal, formatInputVal);
}