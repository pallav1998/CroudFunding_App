const { ethers } = require("hardhat");

//0x5FbDB2315678afecb367f032d93F642f64180aa3

async function main() {
  const CroundFund_Factory = await ethers.getContractFactory(
    "CroudFundFactory"
  );
  const CroudFund = await CroundFund_Factory.deploy();

  await CroudFund.deployed();
  console.log("Success! Contract was deployed to: ", CroudFund.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
