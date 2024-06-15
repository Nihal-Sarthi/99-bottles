// Create a function which when called, prints the lyrics of the song.

let count = 99;

function lyrics() {
  while (count >= 0) {
    if (count === 2) {
      console.log(`${count} bottles of beer on the wall, ${count} bottles of beer.
Take one down and pass it around, ${count - 1} bottle of beer on the wall.`);
      count--;
    } else if (count === 1) {
      console.log(`${count} bottle of beer on the wall, ${count} bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.`);
      count--;
    } else if (count === 0) {
      console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
      count--;
    } else {
      console.log(`${count} bottles of beer on the wall, ${count} bottles of beer.
Take one down and pass it around, ${count - 1} bottles of beer on the wall.`);
      count--;
    }
  }
}
