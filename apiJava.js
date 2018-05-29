  var randomImage = document.querySelector('.random-image');
  console.log("randomImage:", randomImage);

  fetch('https://source.unsplash.com/collections/582659:')
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

  //while loop to get different pictures
  do{

  }
  while (i < 1000);

  .catch(function(err){
    console.log(err);
  })

  //tilted scroll
  $(".main").tiltedpage_scroll({
    sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
    angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
    opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
    scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
    outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
  });

