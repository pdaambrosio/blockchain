const BlockChain = require("./blockChain");
const blockChain = new BlockChain();

blockChain.addBlock({ from: "a", to: "b", amount: 100 });
blockChain.addBlock({ from: "c", to: "d", amount: 100 });
console.log(blockChain);
