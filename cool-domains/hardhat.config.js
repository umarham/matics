require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

 module.exports = {
  solidity: "0.8.10",
  networks: {
		mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/RxhvX8Q8uXePh2LjFYRRQT-vR2zXW7j5",
      accounts: ["caaade16055208e251882eebac45a2bea5642c6dba4b6ca39bf910a8fadfbd3b"],
		}
  }
};
