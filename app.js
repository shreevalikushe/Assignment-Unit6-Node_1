const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var books = [
  "Harry Potter and the half blood prince",
  "Adam and Eve",
  "Lord of the rings",
  "Famous 5",
];

console.log("Enter 1, 2 or 3 : ");

let exit = false;

interface.on("line", (input) => {
  if (Number.parseInt(input) === 1) {
    books.forEach((book) => {
      console.log(book);
    });
  } else if (Number.parseInt(input) === 2) {
    interface.question("Enter the name of the Book to add : ", (input1) => {
      console.log("Book Added : ", input1);
      books.push(input1);
    });
  } else if (Number.parseInt(input) === 3) {
    interface.question(
      "Are you sure you want to quit - press Y to quit ? ",
      (input2) => {
        if (input2 === "Y" || input2 === "y") {
          console.log("Bye Bye");
          exit = true;
        }
      }
    );
  } else {
    console.log(
      "You have selected an invalid entry so please press 1, 2 or 3."
    );
  }
  if (exit) {
    console.log("Exit");
    interface.removeAllListeners();
    interface.once("close", () => {
      console.log("Close");
    });
  }
});
