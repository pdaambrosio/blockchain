const sha256 = require("crypto-js/sha256");

module.exports = class Block {
  constructor(index = 0, previousHash = null, data = "Genesis Block") {
    this.index = index;
    this.timestamp = new Date();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.generateHash();
  }

  generateHash() {
    return sha256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
};
