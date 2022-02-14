import Block, { DIFICULTY } from "../block";

describe("Block Class", () => {
  let previousBlock;
  let hash;
  let message;
  let nonce;

  beforeEach(() => {
    previousBlock = Block.genesis;
    message = "T3stBl0ck";
    hash = "H4sh1ng";
    nonce = 128;
  });

  it(" Create an instance with parameters", () => {
    const block = new Block(previousBlock.hash, hash, message, nonce);
    expect(block.hash).toEqual(hash);
    expect(block.previousHash).toEqual(previousBlock.hash);
    expect(block.message).toEqual(message);
    expect(block.nonce).toEqual(nonce);
  });

  it(" Using the static function mine()", () => {
    const block = Block.mine(previousBlock, message);
    expect(block.hash.length).toEqual(64);
    expect(block.hash.substring(0, DIFICULTY)).toEqual("0".repeat(DIFICULTY));
    expect(block.previousHash).toEqual(previousBlock.hash);
    expect(block.nonce).not.toEqual(0);
    expect(block.message).toEqual(message);
  });

  it("Using the static function hash()", () => {
    hash = Block.hash(previousBlock.hash, message, nonce);
    const hashOutput =
      "5697928d4648df4126e2b669f4293a3bcadc20dbf6a04411ee49967c122791ac";
    expect(hash).toEqual(hashOutput);
  });

  it("Using method toString()", () => {
    const block = Block.mine(previousBlock, message);
    expect(typeof block.toString()).toEqual("string");
  });
});
