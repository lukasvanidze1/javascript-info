'use strict'
/*
The more modern method str.includes(substr, pos) returns true/false,
depending on whether str contains substr within.

It’s the right choice if we need to test for the match,
but don’t need its position:
*/

function checkSpam(str) {
    let lowStr = str.toLowerCase();
  
    return lowStr.includes('viagra') || lowStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

/*
We have a cost in the form "$120".
That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str)
that would extract the numeric value from such string and return it.
 */

 let price = "$120";

 function extractCurrencyValue(delFirst) {
    return +delFirst.slice(1);
  }

alert (extractCurrencyValue(price));