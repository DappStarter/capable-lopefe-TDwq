require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note random unlock grace creek equal gesture'; 
let testAccounts = [
"0x14fb2896d6042a60760a3f7f08803cb3ada3cd925fae4d7f63c06d63d8abd4ca",
"0x5bd933dfb504c0a0de0557c1959e443c3e5853f19877c3e042d65797c9025dfe",
"0xba3de64bed962acbbeb8c2dcf785d83fde369320c101476686bd64ddee5ae60d",
"0xb7c36133239f276a56a8ce8b4abff7ae589698aaed2fa0744780d90ae9fcb4ed",
"0x5f4b1f30fd3d9b4a592bd472ddfa732ff7221b726781eb2f2832a51b853a929c",
"0xda595fb727685ebc9b3257860347e4cb48b4f998c015f4a5a84a3608deae9d91",
"0x171713d24177c76b0270b16de146442ce500db9a8bbc839326bdce679f4e57df",
"0x6c062cfc3fa6fe196116161d8e8d552d0ba4713666ca1e3247500ed95699809e",
"0x35a64323a0cc477c829b15a4863ab3434d068e4081053d762ac9813810360f48",
"0x85297739e68461e2b736e6bb8ea0b9ed727d025ac3ff2f8bd50c3b0bb73d26ef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

