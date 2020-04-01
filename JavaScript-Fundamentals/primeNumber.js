'ise strict'

let number = 10;

nextPrime:
for (let i = 2; i <= number; i++) {

  for (let p = 2; p < i; p++) { 
    if (i % p == 0) continue nextPrime;
  }

  alert( i );
}