import Block from "../block";

/**
 * @params blockchain
 */

export default (blockchain) => {
  const [genesisBlock, ...blocks] = blockchain;
  if (JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis))
    throw Error("Invalid Genesis Block");

  for (let i = 0; i < blocks.length; i++) {
    const { previousHash, hash, message, nonce } = blocks[i];
    const previousBlock = blockchain[i];

    if (previousHash !== previousBlock.hash)
      throw Error("Invalid previous hash.");
    if (hash !== Block.hash(previousHash, message, nonce))
      throw Error("Invalid hash.");
  }

  return true;
};
