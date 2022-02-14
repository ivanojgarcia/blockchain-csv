import Blockchain from "../../blockchain";
import validate from "../validate";

describe("Validate Method", () => {
  let blockchain;
  beforeEach(() => {
    blockchain = new Blockchain();
  });

  it("Validate a valid chain", () => {
    blockchain.addBlock("Message-1");
    blockchain.addBlock("Message-2");

    expect(validate(blockchain.blocks)).toBe(true);
  });

  it("Invalid a chain with a corrupt genesis block", () => {
    blockchain.blocks[0] = "bad-message";

    expect(() => {
      validate(blockchain.blocks);
    }).toThrowError("Invalid Genesis Block");
  });

  it("Invalid a chain with a corrupt previuos hash", () => {
    blockchain.addBlock("message-1");
    blockchain.blocks[1].previousHash = "badPreviousHash";

    expect(() => {
      validate(blockchain.blocks);
    }).toThrowError("Invalid previous hash.");
  });

  it("Invalid a chain with a corrupt hash", () => {
    blockchain.addBlock("message-1");
    blockchain.blocks[1].hash = "badHash";

    expect(() => {
      validate(blockchain.blocks);
    }).toThrowError("Invalid hash.");
  });
});
