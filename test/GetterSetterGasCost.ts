import { expect} from 'chai';
import { ethers } from 'hardhat';
import { Contract } from 'ethers';

describe("GetterSetterGasCost", function() {

  let contract: Contract;

  beforeEach( async () => {

    const GetterSetterFactory = await ethers.getContractFactory("GetterSetterGasCost");
    contract = await GetterSetterFactory.deploy();
    await contract.deployed();

  });

  it("should read public var", async () => {
    contract.doWorkAndReadPublic();
  });

  it("should read private var", async () => {
    contract.doWorkAndReadPrivate();
  });

  it("should work public var", async () => {

    expect(await contract.publicVar()).to.equal(0);
    contract.workPublicVar();
    expect(await contract.publicVar()).to.equal(1);

  });


  it("should work private var", async () => {

    expect(await contract.privateVar()).to.equal(0);
    contract.workPrivateVar();
    expect(await contract.privateVar()).to.equal(1);

  });

});
