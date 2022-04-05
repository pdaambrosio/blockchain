const sha256 = require("crypto-js/sha256");

module.exports = class Block {
  // eslint-disable-next-line prettier/prettier
  constructor(index = 0, previousHash = null, data = "Genesis Block", _difficulty = "") {
    this.index = index;
    this.timestamp = new Date();
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;

    this.mine(_difficulty);
  }

  mine(difficulty) {
    do {
      this.nonce++;
      this.hash = this.generateHash();
    } while (!this.hash.startsWith(difficulty));
  }

  generateHash() {
    return sha256(
      this.index +
        this.previousHash +
        this.timestamp +
        this.nonce +
        JSON.stringify(this.data)
    ).toString();
  }
};
