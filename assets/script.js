function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  fetch(requestUrl)
    .then(function (response) { //first response 
      return response.json();


    })
    .then(function (data) { //2nd  data
      console.log(data)
      // Loop over the data to generate a table, each table row will have a link to the repo url. 
      //display a maximum of 10 products
      for (var i = 0; i < 10; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var tableBody= document.createElement('div');
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        // this section needs makeup api documentation (html)url)
        var productLink = data[i].product_link;
        link.textContent = data[i].product_link;
        link.href = data[i].product_link;
        console.log(data[i].product_link);

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
        //console.log(fetchButton)


        var testImageLink = data[i].image_link;
        var testDiv = document.querySelector('#testDiv');
        testDiv.textContent.innerHTML="<img src=/"+ testImageLink;




      }
   });
}

var testDiv2 = document.querySelector('#testDiv2');
// testDiv2.textContent.innerHTML=<img src="api_featured_image>";
//testDiv.textContent=
  getApi();
  
  // fetchButton.addEventListener('click', getApi);

  
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
let userList = document.getElementById("userList");


// reset button      div.innerhtml="";



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

  localStorage.setItem("userList", JSON.stringify(userStorage));
  listBuilder(skinToneInput.value);
  listBuilder(lipstickInput.value);
  listBuilder(eyeshadowInput.value);
  listBuilder(mascaraInput.value);
  listBuilder(featuresInput.value);

  displayMakeupItems();

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
// localStorage.clear();
// window.location.reload();
userList.innerHTML="";

});


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


//**********@MEB
//**********Table for makeup api fetch call */ */
//********* */
//Try Links
//A. http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
//B. http://makeup-api.herokuapp.com/api/v1/products.json (CORS error received in console)
// 1. GET request using fetch()

function displayMakeupItems(){
fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  // Convert data to JSON
  .then((response) => response.json())
  .then((json) => {
    
  // 2. Create a vars for HTML table headers
    let li = `<tr><th>Image</th><th>Product Name</th><th>Price</th> <th>Price</th><th>Website</th></tr>`;

    // 3. Loop through each data and add a table row
    json.forEach((product) => {
      li += `<tr>
        <td><img src="${product.image_link}"></td>
        <td>${product.name} </td>
        <td>${product.price}</td>
       
       
      </tr>`;
    });

    // 4. display results in makeup table html
    document.getElementById("makeupTable").innerHTML = li;
  });

// main.js

// 5. POST data w/fetch()
fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline", {
  // 6. post method type
  method: "POST",

  // 7. object data using local storage and stringify
    body: JSON.stringify({
   // title: "f",
    //body: "",
    //productId: 1
  }),

  // 8. Adding headers to the request
  headers: {
    "Content-type": "application/json; "
  }
})
  // 9. Converting to JSON
  .then((response) => response.json())

  // 10. Displaying results to console
  .then((json) => console.log(json));

}

  //**********@MEB
//**********Table for makeup api fetch call */ */
//********* */






  //**********@MEB
//**********display makeup suggestion using weather api */ */
//********* */
// 1. fetch call for weather app api


// 2. display weather data from fetch call 


// 3. if/else conditions (rain, no rain, humidity --- 2 or 3 suggestions)
// ex:   if weather is rainy -- wear makeup a










  //**********@MEB
//**********display makeup suggestion using weather api  */ */
//********* */