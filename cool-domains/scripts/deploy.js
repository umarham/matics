const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("mars");
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
    // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of Mars lol
      let txn = await domainContract.register("Umar",  {value: hre.ethers.utils.parseEther('0.3')});
      await txn.wait();
    console.log("Minted domain Umar.mars");
  
    txn = await domainContract.setRecord("Umar", "Am I a Umar or a mars??");
    await txn.wait();
    console.log("Set record for Umar.mars");
  
    const address = await domainContract.getAddress("umar");
    console.log("Owner of domain Umar:", address);
  
    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();