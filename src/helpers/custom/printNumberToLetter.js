/* eslint-disable eqeqeq */
export function printToLetter(number) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  let charIndex = number % alphabet.length;
  let quotient = number / alphabet.length;
  if (charIndex - 1 == -1) {
    charIndex = alphabet.length;
    quotient--;
  }
  result = alphabet.charAt(charIndex - 1) + result;
  if (quotient >= 1) {
    printToLetter(parseInt(quotient));
  }
  return result;
}
