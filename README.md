# Blockchain CSV

The following project seeks to show how a blockchain is built by inserting each of the blocks in a CSV file.

The idea is that each one of the blocks is validated, before its insertion (mining) and that they comply with the necessary parameters for this purpose.

For this we create a file with which you can obtain and mine the blocks

The project creates a CSV file that contains or simulates a blockchain that, starting from a genesis block, allows the creation of blocks to store messages.

For the creation of the hash we use Proof of Work (PoW) as a consensus protocol.

The technologies used to develop it were:

- NodeJS
- ExpressJS

## The enpoints are:

- [GET] `<HOST>/blocks` to get the blocks of the blockchain.
- [POST] `<HOST>/mine` to add blocks into the blockchain (mine).

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.
  
```shell
  $ sudo apt install nodejs
  $ sudo apt install npm
```

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

  ```shell
    $ node --version
    v12.22.9

    $ npm --version
    8.4.1
```
If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

`$ npm install npm -g`

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

  `$ npm install -g yarn`

---

## Install

  ```shell 
    $ git clone https://github.com/ivanojgarcia/blockchain-csv.git
    $ cd blockchain-csv
    $ yarn install
  ```

## Configure app and aditional scripts

The project has the environment variables associated with each environment, which are segmented into .env files depending on the environment we have:

- `.env` for production
- `env.dev` for development
- `.env.test` for testing

There are in turn different scripts that improve the understanding and standard of the code among those we have:

- `$ yarn lint` With this we evaluate and solve linting problems
- `$ yarn format` With this script we format the code en base a los estandares de prettier
- `$ yarn prettier:check` With this script we can take the warning or bad formatted code by files

## Running the Unit Test

As good practices, it is suggested that each critical or logical method carry its corresponding unit test, for this some tests were added that can evaluate the different critical cases of functionality

For that we must execute the next script `yarn test`
## Running the project

- `$ yarn start` to production
- `$ yarn start:dev` to dev or local stage
- `$ yarn start:test` to testing stage


## Simple build for production

`$ yarn build`
