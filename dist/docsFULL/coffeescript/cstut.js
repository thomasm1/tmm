// Generated by CoffeeScript 1.12.7

/* multi-line
 comment
 */

(function() {
  var aString, areYouHappy, balance, combinedArray, csOutput, evensOnly, fName, i, j, lName, largeNumStr, largestNum, len, len1, longString, message, name, oneTo10, peopleArray, randArray, randNum, smallNumStr, smallestNum, sumOfArray, tenTo1, x;

  name = "Tom";

  message = "You are now witnessing Coffeescript compile into JS";

  csOutput = document.getElementById("csoutput");

  csOutput.innerHTML = "Hello " + name + "<br><br> Message heard loud and clear:  " + message + "<br><br>";

  areYouHappy = false;

  aString = "I'm a String";


  /*
  csOutput.insertAdjacentHTML('beforeend'), 'aString is a String<br>' if typeof aString is 'string'
   */

  largestNum = Number.MAX_VALUE;

  smallestNum = Number.MIN_VALUE;

  largeNumStr = "The largest num is " + largestNum + "<br>";

  smallNumStr = "The smallest num is " + smallestNum + "<br>";

  csOutput.insertAdjacentHTML('beforeend', largeNumStr + '<br>');

  if (typeof areYouHappy === 'boolean') {
    csOutput.insertAdjacentHTML('beforeend', 'areYouHappy is a Boolean<br>');
  }

  csOutput.insertAdjacentHTML('beforeend', "5 + 2 = " + (5 + 2) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "5 + 2 = " + (5 + 2) + "<br>");

  balance = 1563.87;

  csOutput.insertAdjacentHTML('beforeend', "Monthly Payment = " + ((balance / 12).toFixed(2)) + "<br><br>");

  randNum = 5;

  csOutput.insertAdjacentHTML('beforeend', "randNum++ = " + (randNum++) + "<br><br>");

  csOutput.insertAdjacentHTML('beforeend', "randNum-- = " + (randNum++) + "<br><br>");

  csOutput.insertAdjacentHTML('beforeend', "Math.PI = " + Math.PI + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "math.E = " + Math.E + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "abs(-8) = " + (Math.abs(-8)) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "math.E = " + (Math.cbrt(1000)) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "Math.floor(6.45) = " + (Math.floor(6.45)) + "<br>");


  /* output:
  Math.E = 2.718
  Math.PI = 3.14
  Math.abs(-8) = 8
  Math.cbrt(1000) = 10
  Math.ceil(6.45) = 7
  Math.floor(6.45) = 6
  Math.log(10) = 2.3
   */

  randNum = Math.floor(Math.random() * 100) + 1;

  fName = "Thomas";

  lName = "Maestas";

  csOutput.insertAdjacentHTML('beforeend', "Random Number = " + randNum + "<br><br>");

  csOutput.insertAdjacentHTML('beforeend', fName + " " + lName + "<br><br>");

  longString = "This is a long string that goes forever";

  csOutput.insertAdjacentHTML('beforeend', "String Length : " + longString.length + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "Index of String : " + (longString.indexOf("goes")) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "Word at 27 : " + (longString.slice(27, 31)) + "<br><br>");

  randArray = ["word", false, 1234, 1.234];

  csOutput.insertAdjacentHTML('beforeend', "Last 2 : " + randArray.slice(2, 4) + "<br>");

  oneTo10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  tenTo1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  combinedArray = oneTo10.concat(tenTo1);

  oneTo10.push.apply(oneTo10, tenTo1);

  csOutput.insertAdjacentHTML('beforeend', (oneTo10.toString()) + "<br>");

  for (i = 0, len = oneTo10.length; i < len; i++) {
    x = oneTo10[i];
    csOutput.insertAdjacentHTML('beforeend', x + "<br>");
  }

  evensOnly = oneTo10.filter(function(x) {
    return x % 2 === 0;
  });

  csOutput.insertAdjacentHTML('beforeend', (evensOnly.toString()) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "Max : " + (Math.max.apply(Math, oneTo10)) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "Min : " + (Math.min.apply(Math, oneTo10)) + "<br>");

  sumOfArray = oneTo10.reduce(function(x, y) {
    return x + y;
  });

  csOutput.insertAdjacentHTML('beforeend', "Sum : " + sumOfArray + "<br>");

  peopleArray = [
    {
      name: "Tom",
      age: 41
    }, {
      name: "Team",
      age: 40
    }
  ];

  csOutput.insertAdjacentHTML('beforeend', "people : " + peopleArray + "<br>");

  for (j = 0, len1 = oneTo10.length; j < len1; j++) {
    x = oneTo10[j];
    if (x % 2 !== 0) {
      csOutput.insertAdjacentHTML('beforeend', x + "<br>");
    }
  }

}).call(this);