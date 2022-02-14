import { SHA256 } from "crypto-js";
const DIFICULTY = 2;

class Block {
  constructor(previousHash, hash, message, nonce) {
    this.previousHash = previousHash;
    this.hash = hash;
    this.message = message;
    this.nonce = nonce;
  }

  static get genesis() {
    let genesisPreviousHash =
      "0000000000000000000000000000000000000000000000000000000000000000";
    let genesisMessage = "Hola Mundo";
    return new this(genesisPreviousHash, "G3n3s1s", genesisMessage, 0);
  }

  static mine(previousBlock, message) {
    const { hash: previousHash } = previousBlock;
    let hash;
    let nonce = 0;
    do {
      nonce += 1;
      hash = Block.hash(previousHash, message, nonce);
    } while (hash.substring(0, DIFICULTY) !== "0".repeat(DIFICULTY));

    return new this(previousHash, hash, message, nonce);
  }

  static hash(previousHash, message, nonce) {
    return SHA256(`${previousHash}${message}${nonce}`).toString();
  }

  toString() {
    const { previousHash, hash, message, nonce } = this;

    return `${previousHash},${hash},${message},${nonce}`;
  }
}

export { DIFICULTY };

export default Block;
