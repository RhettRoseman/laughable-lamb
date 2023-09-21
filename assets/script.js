const tableBody = document.getElementById('repo-table');
const fetchButton = document.getElementById('fetch-button');

// function getApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     const requestUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);

//         for (let i = 0; i < data.length; i++) {
//           const createTableRow = document.createElement('tr');
//           const tableData = document.createElement('td');
//           const link = document.createElement('a');

//           link.textContent = data[i].html_url;
//           link.href = data[i].html_url;

//           tableData.appendChild(link);
//           createTableRow.appendChild(tableData);
//           tableBody.appendChild(createTableRow);
//         }
//       });
// }

// getApi();

// fetchButton.addEventListener('click', getApi);

const form = document.querySelector('form');

const submitButton = document.querySelector('#submitBtn');
const userSkinTone = document.querySelector('#userTone');
const makeupForm = document.querySelector('#userMakeup');
const resetButton = document.querySelector('#resetBtn');

const umakeupForm = document.getElementById("userMakeup");
const skinToneInput = document.getElementById("userSkinTone");
const lipstickInput = document.getElementById("userLipstick");
const eyeshadowInput = document.getElementById("userEyeshadow");
const mascaraInput = document.getElementById("userMascara");
const makeupSubmit = document.getElementById("submitBtn");
const userList = document.getElementById("userList");

let userStorage = localStorage.getItem("userList")
  ? JSON.parse(localStorage.getItem("userList"))
  : [];

umakeupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userStorage.push(skinToneInput.value);
  userStorage.push(lipstickInput.value);
  userStorage.push(eyeshadowInput.value);
  userStorage.push(mascaraInput.value);
  localStorage.setItem("userList", JSON.stringify(userStorage));
  listBuilder(skinToneInput.value);
  listBuilder(lipstickInput.value);
  listBuilder(eyeshadowInput.value);
  listBuilder(mascaraInput.value);
});

const listBuilder = (text) => {
  const item = document.createElement("li");
  item.innerHTML = text;
  userList.appendChild(item);
};

const getChoices = JSON.parse(localStorage.getItem("userList"));
getChoices.forEach((item) => {
  listBuilder(item);
});

resetButton.addEventListener('click', function(){
  localStorage.clear();
  window.location.reload();
});