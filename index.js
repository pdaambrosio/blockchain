const BlockChain = require("./blockChain");
const blockChain = new BlockChain();

blockChain.addBlock({ from: "a", to: "b", amount: 100 });
blockChain.addBlock({ from: "c", to: "d", amount: 100 });

console.log(blockChain);
console.log(blockChain.isValid());

blockChain.blocks[1].data = { from: "c", to: "d", amount: 200 };

console.log(blockChain);
console.log(blockChain.isValid());
