const { expect } = require("chai");
const { ethers } = require("hardhat");

// function dateinSec(time) {
//   const dateInSecs = block.timeStamp() + time;
//   return dateInSecs;
// }

describe("CroudFundingg", function () {
  let croudfunding, owner, attacker, addr2;

  beforeEach(async () => {
    [owner, attacker, addr2] = await ethers.getSigners();
    const CroudFundingg = await ethers.getContractFactory("CroudFunding");
    croudfunding = await CroudFundingg.deploy(
      "10000",
      "3600",
      "description",
      "image"
    );
    await croudfunding.deployed();
  });

  //   it("Should have correct croudfunding Deatils", async function () {
  //     // expect(await croudfunding.target()).to.equal("1000");
  //     expect(await croudfunding.deadline()).to.equal("3600");
  //     expect(await croudfunding.description()).to.equal("description");
  //     expect(await croudfunding.image()).to.equal("image");
  //   });

  it("Should have correct croudfunding owner", async function () {
    const croudfundingOwner = await croudfunding.admin();
    expect(croudfundingOwner).to.equal(owner.address);
  });

  it("Should Check for Min Value", async () => {
    try {
      await croudfunding.connect(addr2).SendEthers({ value: 10 });
    } catch (e) {
      expect(e.reason === "Please send Min. 100wei");
    }
  });

  it("Should accept fund", async () => {
    await croudfunding.connect(addr2).SendEthers({ value: 1000 });
    const balanceofContract = await croudfunding.raisedAmount();
    expect(balanceofContract).to.equal(1000);
  });

  it("Should Give Error if Owner try to donate in their own campaign", async () => {
    try {
      await croudfunding.connect(owner).SendEthers({ value: 200 });
    } catch (e) {
      expect(e.reason === "You are an admin you cannot be Contribute");
    }
  });

  it("should show how much fund user invested", async () => {
    await croudfunding.connect(addr2).SendEthers({ value: 1000 });
    const getbalance = await croudfunding.connect(owner).getBalance();
    expect(getbalance).to.equal(1000);
  });

  it("should have correct transaction details", async () => {
    await croudfunding.connect(addr2).SendEthers({ value: 180 });
    await croudfunding.connect(attacker).SendEthers({ value: 101 });
    const transaction = await croudfunding.NoOfCountributers();
    expect(transaction).to.equal(2);
  });

  it("Check for contributer or not", async () => {
    try {
      await croudfunding.connect(addr2).SendEthers({ value: 1000 });
      await croudfunding.Contributers(attacker.address).to.equal(0);
    } catch (e) {
      expect(e.reason === "You have'n contributed any amount");
    }
  });

  it("Demand Refund is not possible if deadline is not crossed", async () => {
    try {
      await croudfunding.refund({ from: attacker });
    } catch (e) {
      expect(e.reason === "You are nor Elagible for the refund");
    }
  });

  it("should tranfer funds from croudfunding to owner", async () => {
    await croudfunding.connect(attacker).SendEthers({ value: 8000 });
    await croudfunding.connect(addr2).SendEthers({ value: 3000 });
    await croudfunding.connect(owner).GetDonation();

    expect(await croudfunding.raisedAmount()).to.equal(0);
  });
});
