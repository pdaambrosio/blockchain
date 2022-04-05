# blockchain
Learning a little about blockchain


Difficulty test result (check nonce numbers).:

```javascript
BlockChain {
  blocks: [
    Block {
      index: 0,
      timestamp: 2022-04-05T01:50:38.016Z,
      data: 'Genesis Block',
      previousHash: null,
      nonce: 1,
      hash: 'f5f2e4c2b4fe77e81af325a342006de5b07069d6683933b14a4407f7942b78e3'
    },
    Block {
      index: 1,
      timestamp: 2022-04-05T01:50:38.018Z,
      data: [Object],
      previousHash: 'f5f2e4c2b4fe77e81af325a342006de5b07069d6683933b14a4407f7942b78e3',
      nonce: 267724,
      hash: '000004472147790df7d31c78302819080bfbc403b7f2642bd819cee31a36eb34'
    },
    Block {
      index: 2,
      timestamp: 2022-04-05T01:50:41.893Z,
      data: [Object],
      previousHash: '000004472147790df7d31c78302819080bfbc403b7f2642bd819cee31a36eb34',
      nonce: 99124,
      hash: '00000e45947376de1648dafa630ef85a2226d1bae7ee22049f5950543db33dda'
    }
  ],
  nextIndex: 3
}
true
```