/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
*/


function handValue (hand) {
  let acePlayed = false;
  let handTotal = 0;
  for (var i = 0; i < hand.length; i++) {
    if(hand[i] <= 10){
      handTotal += parseInt(hand[i]);
    } else if((hand[i] === "K") || (hand[i] === "Q") || (hand[i] === "J")){
        handTotal += 10;
    } else if(handTotal <= 10){
        acePlayed = true;
        handTotal += 11;
    } else {
        acePlayed = true;
        handTotal += 1;
    }
    if((acePlayed = true) && (handTotal > 21)){
      handTotal -= 10;
    }
  }
  return handTotal;
}



// }

// handValue( [ "2", "2", "8" ] ) === 12;
// handValue( [ "2", "2", "K" ] ) === 14;
// handValue( [ "2", "Q" ] ) === 12;
// handValue( [ "7", "J" ] ) === 17;
// handValue( [ "7", "A" ] ) === 18;
// handValue( [ "8", "J", "A" ] ) === 19;
// handValue( [ "8", "A", "J" ] ) === 19;
// handValue( [ "8", "7", "A", "A" ] ) === 17;
// handValue( [ "K", "A" ] ) === 21;
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
