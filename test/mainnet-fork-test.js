

const IERC20 = artifacts.require('IERC20');
const { DAI, DAI_WHALE } = require('../config/config.js');

contract('IERC20', ([alice, bob, admin]) => {

  let token;
  beforeEach(async () => {
    console.log('dai', DAI);
    token = await IERC20.at(DAI);
  });

  it('token detail', async () => {
    const bal = await token.balanceOf(DAI_WHALE);
    console.log('bal', bal.toString());
  });

  it.only('transfer token', async () => {
    const whaleBalBefore = await token.balanceOf(DAI_WHALE);
    console.log('whaleBalBefore', whaleBalBefore.toString());

    await token.transfer(alice, whaleBalBefore, { from: DAI_WHALE });

    const whaleBalAfter = await token.balanceOf(DAI_WHALE);
    console.log('whaleBalAfter', whaleBalAfter.toString());

    const aliceTokenBal = await token.balanceOf(alice);
    console.log('aliceTokenBal', aliceTokenBal.toString());
  });

});