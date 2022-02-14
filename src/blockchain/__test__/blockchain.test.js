import Block from "../block";
import Blockchain from "../blockchain";

describe("Blockchain Class", () => {
  let blockchain;
  let blockchain2;

  beforeEach(() => {
    blockchain = new Blockchain();
    blockchain2 = new Blockchain();
  });

  it("Has a genesis Blockchain", () => {
    const [genesisBlock] = blockchain.blocks;
    expect(genesisBlock).toEqual(Block.genesis);
    expect(blockchain.blocks.length).toEqual(1);
  });

  it("Using the method addBlock()", () => {
    const message = "M3ss4g3";
    blockchain.addBlock(message);

    const [, lastBlock] = blockchain.blocks;
    expect(lastBlock.message).toEqual(message);
    expect(blockchain.blocks.length).toEqual(2);
  });

  it("Using the method replace() with a valid chain", () => {
    blockchain2.addBlock("message-1");
    blockchain.replace(blockchain2.blocks);

    expect(blockchain.blocks).toEqual(blockchain2.blocks);
  });

  it("Using the method replace(), does not replace the chain", () => {
    blockchain.addBlock("message-1");

    expect(() => {
      blockchain.replace(blockchain2.blocks);
    }).toThrowError("Received chain is not longer than current chain");
  });

  it("Using the method replace(), not replace the chain", () => {
    blockchain2.addBlock("message-1");
    blockchain2.blocks[1].message = "message-1-hack";

    expect(() => {
      blockchain.replace(blockchain2.blocks);
    }).toThrowError("Received chain is invalid");
  });
});
