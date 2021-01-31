<h1 align="center">IMAGE REPOSITORY 2.O</h1>

## Brief Description

Welcome to Image Repository!

A place to add, delete and classify images into groups using OCR and Image Recognition!  
| <img src="https://lh3.googleusercontent.com/VEnnK2SyklusfxZ3dIYjlQH3xSwK2BFSJ69TFQ9g8HjM6m3CouRlTia5FW3z3GS0x83WC9TylZCaA9Jf_2kmr7mXxI9_HYLZTFy_bg" width="400" /> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="500" /> | <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" width="500"> | <img src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png" width="500"> |
|---|---|---|---|



## Features

-The user can create an account to store their images/files!
-The frontend of web-app is responsive!
-The images chosen by a user are uploaded to Firebase Storage/ Google Cloud Platform storage buckets.
-User's account is authenticated using Firebase!
-The data collected from the above two steps is uploaded to Firestore database (NoSQL).
-To search an image type a search term in the search box. (multiple queries, should be comma separated, eg: "cat, grass" with no trailing commas).
<!--
- The images chosen by a user are uploaded to Firebase Storage/ Google Cloud Platform storage buckets.(To choose an image, hover to the cloud button at the bottom right position)
- The Image is passed through [TesseractJS](https://tesseract.projectnaptha.com/) to identify characters!(OCR)
- The Image is then passed through [TensorflowJS's MobileNet Image Classification model](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) to get labels related to the image.
- The data collected from the above two steps is uploaded to Firestore database(NoSQL).
- To search image labels, type a search term in the search box.(multiple queries, should be comma separated, eg: "cat, grass" with no trailing commas)
- A list of identified labels appears on the left sidebar, which on clicking, shows the images corresponding to the clicked label!
- The images can also searched on the basis of another chosen image, to those the image query, click on the camera button next to the search bar!
- The images can be deleted from the library by clicking the `Delete` button corresponding to an image.
- Information about images can be retreived by clicking the `Details` button corresponding to an image.
-->

## Tech Stack and concepts used

<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> 
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Firebase" src="https://img.shields.io/badge/firebase%20-%23039BE5.svg?&style=for-the-badge&logo=firebase"/>





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




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
