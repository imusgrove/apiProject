//unsplash syntax
// ES Modules syntax
// import Unsplash from 'unsplash-js';

// require syntax
// const unsplash = require('unsplash-js').default;

//urls
const baseURL = 'https://unsplash.com/collections/582659';
const key = '40995db20b2a0fec48a757d13d9011af752931ea751de85e23f07549da9aabec';
let url;

//DOM elements-search form
const searchPhoto = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('.form');

//DOM Elemetns-navigation
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//results section
const section = document.querySelector('section');

//initial nav style
// nav.style.display = 'none';

//page display
let pageNumber = 0;
let displayNav = false;

// const unsplashPics = new Unsplash({
//   applicationId: "40995db20b2a0fec48a757d13d9011af752931ea751de85e23f07549da9aabec",
//   secret: "383659c5a0180c8de49aed967977a88af4e1ee7f4ed2f5f92f55dfae08f55b6e",
//   callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
// });

// event listeners
// searchPhoto.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);

//fetching results
function fetchResults(e){
console.log(e);
url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchPhoto.value;
}

function nextPage(){
  console.log("next button clicked");
}

function previousPage(){
  console.log("next button clicked");
}



  //tilted page scroll
  // $(".main").tiltedpage_scroll({
  //   sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
  //   angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
  //   opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
  //   scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
  //   outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
  // });

  //error handling
  // unsplash.users.profile("naoufal")
  // .catch(err => {
  //   // Your flawless error handling code
  // });

  //search photos by keyword
  // unsplash.search.photos("dogs", 1)
  // .then(toJson)
  // .then(json => {
  //   // Your code
  // });
///tutorial


