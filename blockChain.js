const Block = require("./block");

module.exports = class BlockChain {
  constructor() {
    this.blocks = [new Block()];
    this.nextIndex = 1;
  }

  getLastHash() {
    return this.blocks[this.blocks.length - 1].hash;
  }

  addBlock(data) {
    const lastHash = this.getLastHash();
    const block = new Block(this.nextIndex, lastHash, data);
    this.blocks.push(block);
    this.nextIndex++;
  }

  isValid() {
    for (let i = 1; i < this.blocks.length; i++) {
      const currentBlock = this.blocks[i];
      const previousBlock = this.blocks[i - 1];

      if (currentBlock.hash !== currentBlock.generateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
};
