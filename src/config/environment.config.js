import * as dotenv from "dotenv";

const { NODE_ENV } = process.env;
let environmentFile;

switch (NODE_ENV) {
  case "production":
    environmentFile = ".env";
    break;

  case "development":
    environmentFile = ".env.dev";
    break;

  case "testing":
    environmentFile = ".env.test";
    break;

  default:
    environmentFile = ".env";
    break;
}

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: environmentFile,
  });
}
