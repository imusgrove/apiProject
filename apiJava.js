
var randomImage = document.querySelector('.random-image');
console.log("randomImage:", randomImage);


//functions to get pictures 
function newPhoto() {
  fetch(`https://source.unsplash.com/random?sig=${Math.random() * 1000}`)
    .then(function (response) {
      if (!response.ok) {
        console.log(respone);
        return new Error(response);
      }
      console.log("Response:", response);
      return response.blob();
    })
    .then(function (photoBlob) {
      console.log("My Blob:", photoBlob)
      var objectURL = URL.createObjectURL(photoBlob);
      console.log("Object URL:", objectURL);
      randomImage.src = objectURL;
    })
    .catch(function (err) {
      console.log(err);
    })

  // button function
  // randomImage.addEventListener('click', newPhoto)
  // function newPhoto(e){

  // }
}

// crossfade
var img, i = 1;
var nImg = 1000;
div = document.getElementById('foo');
img = new Image();
div.appendChild(img);
img.src = 'https://source.unsplash.com/random?sig=${Math.random()*1000}' + i + '.jpg';
img.id = "frames";

var interval = setInterval(function () {
  i++;
  if (i > nImg) {
    i = 1;
  }

  var element = document.getElementById("frames");
  element.outerHTML = "";
  delete element;

  if (i > nImg) {
    clearInterval(interval);
  } else {
    img = new Image();
    div.appendChild(img);
    img.src = 'https://source.unsplash.com/random?sig=${Math.random()*1000}' + i + '.jpg';
    img.id = "frames";
  }
}, 3000);