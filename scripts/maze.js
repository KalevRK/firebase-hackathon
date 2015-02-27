var myFirebaseRef = new Firebase("https://resplendent-torch-4021.firebaseio.com/");

// Kalev
// - Check for moves from firebase app
// - Add proposed moves to firebase app data structure
// - Add vote count to moves
// - Check for move with highest vote count
// - Allow users to submit and vote on moves

// data structure for proposed player moves
var movesArray = [];

// set the firebase data store to the proposed player moves
myFirebaseRef.set(movesArray);

// when the user enters a new move
// push it to the proposed player moves
// set the firebase data store to the proposed player moves

$('#moveInput').keypress(function (e) {
    if (e.keyCode === 13) {
        var move = $('#moveInput').val();
        // push new move to movesArray
        movesArray.push(move);
        // update firebase data store
        myFirebaseRef.set(movesArray);

    }
})

// whenever the firebase data store value changes
// update our array of moves
myFirebaseRef.on('value', function(data) {
  console.log("Firebase movesArray: " + data.val());
  if (data.val() !== null) {
    movesArray = data.val();
  }
  console.log('proposed move: ' + movesArray[0]);
  movesArray = movesArray.slice(1);
  console.log("updated movesArray: " + movesArray);
});