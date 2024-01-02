// "use strict";

// Write a function, showNumberTrivia, that makes a request to the Numbers API
//(http://numbersapi.com) to get trivia about your favorite number.
//Make sure you get back JSON — you may need to look at the documentation of the
//API to see how to do this: Details.) Log the piece of trivia to the console.

const BASE_API = "http://numbersapi.com";

/** Make request to numbers API about fav number
 *  Logs trivia to the console
*/
async function showNumberTrivia() {

  const number = prompt();

  const resp = await fetch(`${BASE_API}/${number}/trivia`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json"
    }
  });

  // const resp = await fetch("http://numbersapi.com/45/trivia");

  const trivia = await resp.json();

  console.log(trivia);
}