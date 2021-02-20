class VigenereCipheringMachine {
  constructor(direction) {
    this.isReverse = direction === false;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyIndex = 0;
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (!letter.match("[A-Z]")) {
        result += letter;
        continue;
      }

      if (keyIndex > key.length - 1) {
        keyIndex = 0;
      }

      const cipherLetter = key[keyIndex];
      const cipherIndex = this.alphabet.indexOf(cipherLetter);
      const cipherString = this.alphabet.slice(cipherIndex) + this.alphabet.slice(0, cipherIndex);

      const letterOriginIndex = this.alphabet.indexOf(letter);
      const encryptedLetter = cipherString[letterOriginIndex];

      result += encryptedLetter;

      keyIndex++;
    }

    return this.isReverse ? result.split('').reverse().join('') : result;
  }

  decrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyIndex = 0;
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (!letter.match("[A-Z]")) {
        result += letter;
        continue;
      }

      if (keyIndex > key.length - 1) {
        keyIndex = 0;
      }

      const cipherLetter = key[keyIndex];
      const cipherIndex = this.alphabet.indexOf(cipherLetter);
      const cipherString = this.alphabet.slice(cipherIndex) + this.alphabet.slice(0, cipherIndex);

      const letterOriginIndex = cipherString.indexOf(letter);
      const decryptedLetter = this.alphabet[letterOriginIndex];

      result += decryptedLetter;

      keyIndex++;
    }

    return this.isReverse ? result.split('').reverse().join('') : result;
  }
}

module.exports = VigenereCipheringMachine;
