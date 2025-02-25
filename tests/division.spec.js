import { division } from "../src/division.js";

function test1() {
  const a = 42;
  const b = 6;
  const expectedResult = 7;

  const actualResult = division(a, b);

  if (actualResult === expectedResult) {
    console.log("Dzielenie działa poprawnie!")
  }
}

test1();

function test2() {
  const a = 25;
  const b = 0;
  const expectedResult = Infinity;

  const actualResult = division(a, b);

    if (actualResult === expectedResult) {
    console.log("Dzielenie przez zero działa poprawnie!")
  }
}

test2(); 