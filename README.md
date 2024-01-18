# Red Duck application synpress test

### Prerequisites

This project requires [Node.js](https://nodejs.org/en/) to be installed on your machine.

## How to launch tests locally

1. Export your MetaMask wallet private key and set in in `.env` file as PRIVATE_KEY (or use default one)

2. Install dependencies 

```bash
npm install
```
3. Start tests

```bash
npm run test
```

## Test results

There are 3 sets of test results:

1. Screenshots in tests/e2e/screenshots folder
2. Video in tests/e2e/videos folder
3. Json report file in tests/results folder

To generate html page report based on json report file go to tests/results folder and run command 
```bash
npx marge mochawesome.json
```

