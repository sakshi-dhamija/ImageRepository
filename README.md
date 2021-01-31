<h1 align="center">IMAGE REPOSITORY 2.O</h1>

## Brief Description

Welcome to Image Repository!

A place to add, delete and classify images into groups using OCR and Image Recognition!  
| <img src="https://lh3.googleusercontent.com/VEnnK2SyklusfxZ3dIYjlQH3xSwK2BFSJ69TFQ9g8HjM6m3CouRlTia5FW3z3GS0x83WC9TylZCaA9Jf_2kmr7mXxI9_HYLZTFy_bg" width="400" /> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="500" /> | <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" width="500"> | <img src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png" width="500"> |
|---|---|---|---|

### Screenshots!

1.
2.

## Features

- The user can create an account to store their images and classify them.
- The images chosen by a user are uploaded to Firebase Storage/ Google Cloud Platform storage buckets.
- The Image is passed through [TesseractJS](https://tesseract.projectnaptha.com/) to identify characters using OCR!
- The Image is then passed through [Google Cloud Vision API](https://cloud.google.com/vision) to get labels related to the image.
- The data collected from the above two steps is uploaded to Firestore database (NoSQL).
- To search image labels, type a search term in the search box. (multiple queries, should be comma separated, eg: "cat, grass" with no trailing commas)
- A list of identified labels appears on the left sidebar, which on clicking, shows the images corresponding to the clicked label!
- The images can also searched on the basis of another chosen image, to those the image query, click on the camera button next to the search bar!
- The images can be deleted from the library by clicking the `Delete` button corresponding to an image.
- Information about images can be retreived by clicking the `Details` button corresponding to an image.

## Tech Stack and concepts used

<li>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> 
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Firebase" src="https://img.shields.io/badge/firebase%20-%23039BE5.svg?&style=for-the-badge&logo=firebase"/>

</li>

## Use the production version

The production version is hosted at https://imagre-repo.web.app/#

## Use the development version

- Make sure that the latest version of Node and NPM are installed!
- Clone this project!
- Install the necessary NPM dependencies using `npm install`.
- [Create](https://firebase.google.com/docs/web/setup) a Firebase project and integrate the App with the Firebase project!
- Place the Firebase config in ImageRepository/FirebaseConfig.js in the following format!

```js
var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

export default firebaseConfig;
```

- To start the project, use `npm start`.
