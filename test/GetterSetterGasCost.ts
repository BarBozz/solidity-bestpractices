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

  it("should read and emit public var", async () => {
    contract.emitPublicVar();
  });

  it("should read and emit private var", async () => {
    contract.emitPrivateVar();
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
