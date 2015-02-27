var Firebase = require("firebase");

var myFireBaseRef = new Firebase("https://resplendent-torch-4021.firebaseio.com/");

myFirebaseRef.set({
    title: 'Hello, World!'
});