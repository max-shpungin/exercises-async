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

  const resp = await fetch(`${BASE_API}/${number}/trivia?json`)

  const trivia = await resp.json();

  console.log(trivia);
}

// Have a “race”: make a new function, showNumberRace, that asks for trivia about four
//different numbers (using four separate requests), but, as soon as one request returns,
// log the piece of trivia for the winning number to the console.


/**
 * asks for trivia about four
//different numbers (using four separate requests), but, as soon as one request returns,
// log the piece of trivia for the winning number to the console.
 */
async function showNumberRace() {

  const r1 = fetch(`${BASE_API}/random/trivia?json`);
  const r2 = fetch(`${BASE_API}/random/trivia?json`);
  const r3 = fetch(`${BASE_API}/random/trivia?json`);
  const r4 = fetch(`${BASE_API}/random/trivia?json`);

  const response = await Promise.race([r1,r2,r3,r4]);

  const answer = await response.json();

  console.log(answer.text);
}

// showNumberRace();


/**Get all: make a new function, showNumberAll.
 * that asks for trivia about about different numbers.
 *  Make all of the requests at the same time,
 * but handle them once all requests are completed. */

async function showNumberAll() {

  const p1 = fetch(`${BASE_API}/random/trivia?json`);
  const p2 = fetch(`${BASE_API}/random/trivia?json`);
  const p3 = fetch(`${BASE_API}/random/trivia?json`);
  const p4 = fetch(`${BASE_API}/WRONG`);

  const settledPromises = await Promise.allSettled([p1,p2,p3,p4]);

  // console.log(settledPromises);
  // return settledPromises;

  for (promise of settledPromises){
    console.log(await promise.value.json())
  }

}

async function resolvePromise(promise){
  return await promise
}

showNumberAll();


