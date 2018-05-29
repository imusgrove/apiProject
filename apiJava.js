  
  var randomImage = document.querySelector('.random-image');
  console.log("randomImage:", randomImage);
//functions to get pictures
  
function newPhoto() {
fetch(`https://source.unsplash.com/random?sig=${Math.random()*1000}`)
  .then(function(response){
    if(!response.ok){
      console.log(respone);
      return new Error(response);
    }
    console.log("Response:", response);
    return response.blob();
  })
  .then(function(photoBlob){
    console.log("My Blob:", photoBlob)
    var objectURL = URL.createObjectURL(photoBlob);
    console.log("Object URL:", objectURL);
    randomImage.src = objectURL;
  })
  .catch(function(err){
    console.log(err);
  })

randomImage.addEventListener('click', newPhoto)
function newPhoto(e){

}
}
