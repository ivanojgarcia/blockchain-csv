import express from "express";
import { initRoutes } from "../routes/index.routes";
import mineSchema from "../validators/mine.validators";
import Blockchain, { blockchainPath } from "../blockchain";
import BlockChainCsv from "../blockchain/modules/blockchainCsv";

const blockchain = new Blockchain();
const blockChainCsv = new BlockChainCsv({
  path: blockchainPath,
  headers: ["previousHash", "hash", "message", "nonce"],
});

// Application Intance
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/blocks", async (req, res) => {
  const blocks = await blockChainCsv.read();
  if (blocks.length === 0) blockChainCsv.create(blockchain.blocks);
  else blockchain.blocks = blocks;
  res.json(blockchain.blocks);
});

app.post("/mine", async (req, res) => {
  const { body } = req;
  const { error } = mineSchema(body);
  if (error)
    return res.status(400).json({ status: "error", message: error.message });
  const block = blockchain.addBlock(body.message);
  const blocks = await blockChainCsv.read();
  if (blocks.length > 0) {
    blockChainCsv.append([block]);
  } else {
    blockChainCsv.create(blockchain.blocks);
  }
  res.json({
    blocks: blockchain.blocks.length,
    block,
  });
});

// Group Routes
initRoutes(app);

export default app;
