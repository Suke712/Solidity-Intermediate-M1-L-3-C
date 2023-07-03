const hre = require("hardhat");

async function main() { 
    const EventTest = await hre.ethers.getContractFactory("MyToken");
    const eventTest = await EventTest.deploy();
  
    await eventTest.deployed();
  
    eventTest.on("Mint", (owner, value) => {
      console.log(`New mint: ${owner} ${value} SBZ`);
    })
  
    eventTest.on("Burn", (owner, value) => {
      console.log(`New burn: ${owner} ${value} SBZ`);
      
    })
  
    eventTest.on("Transfer", (from, to, value) => {
      console.log(`New transfer: ${from} ${to} ${value} SBZ`);
    })

    eventTest.on("Balance", (owner, value) => {
        console.log(`Balance of:  ${owner} is ${value}`);
    })

    console.log(
      `Contract deployed to ${eventTest.address}`
    );
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  