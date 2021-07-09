//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract GetterSetterGasCost {

    uint256 public publicVar;
    uint256 private _privateVar;

    event SomeEvent(uint value);

    function privateVar() external view returns(uint256) {
      return _privateVar;
    }

    function workPublicVar() external {
      publicVar += 1;
    }

    function workPrivateVar() external {
      _privateVar += 1;
    }

    /* Helper methods to make differences of read visible in gas reporter */
    function emitPrivateVar() external {
      emit SomeEvent(_privateVar);
    }
    function emitPublicVar() external {
      emit SomeEvent(publicVar);
    }

}
