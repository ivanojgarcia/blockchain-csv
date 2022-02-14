import fs from "fs";
import { writeToStream } from "@fast-csv/format";
import { parse } from "fast-csv";

class BlockChainCsv {
  static write(filestream, rows, options) {
    return new Promise((res, rej) => {
      writeToStream(filestream, rows, options)
        .on("error", (err) => rej(err))
        .on("finish", () => res());
    });
  }

  constructor(opts) {
    this.headers = opts.headers;
    this.path = opts.path;
    this.writeOpts = { headers: this.headers, includeEndRowDelimiter: true };
  }

  create(rows) {
    return BlockChainCsv.write(fs.createWriteStream(this.path), rows, {
      ...this.writeOpts,
    });
  }

  append(rows) {
    return BlockChainCsv.write(
      fs.createWriteStream(this.path, { flags: "a" }),
      rows,
      {
        ...this.writeOpts,
        // dont write the headers when appending
        writeHeaders: false,
      }
    );
  }

  read() {
    let rowsBlock = [];
    if (!fs.existsSync(this.path)) return [];
    return new Promise((res, rej) => {
      fs.createReadStream(this.path)
        .pipe(parse({ headers: true }))
        .on("error", (error) => rej(error.message))
        .on("data", (row) => {
          rowsBlock.push(row);
        })
        .on("end", () => {
          res(rowsBlock);
        });
    });
  }
}

export default BlockChainCsv;
