//unsplash syntax
// ES Modules syntax
import Unsplash from 'unsplash-js';

// require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
    applicationId: "40995db20b2a0fec48a757d13d9011af752931ea751de85e23f07549da9aabec",
    secret: "383659c5a0180c8de49aed967977a88af4e1ee7f4ed2f5f92f55dfae08f55b6e",
    callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
  });

  //tilted page scroll
  $(".main").tiltedpage_scroll({
    sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
    angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
    opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
    scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
    outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
  });

  //error handling
  unsplash.users.profile("naoufal")
  .catch(err => {
    // Your flawless error handling code
  });

  //search photos by keyword
  unsplash.search.photos("dogs", 1)
  .then(toJson)
  .then(json => {
    // Your code
  });



