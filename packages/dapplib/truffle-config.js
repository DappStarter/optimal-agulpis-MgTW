require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth machine upgrade hockey local fresh giant'; 
let testAccounts = [
"0xb8d992c632c9cc74b2e9f0d85311b1f3d87a8b2088309760e15c96c97a1977bc",
"0x21634be0f9826a9a8be7287abff9327f21bdf3982a775d47128f584b208ec19e",
"0x9b11d9f559ca8815d1f1ff3411d459ca10a5060e02c1c983225fc871f25d2ae9",
"0xd7a30db9cac0dc4853838308cb100ac407d7c5023c0b00755b65c7fdf291f1e1",
"0xf3c1b632374e9f55b7a12b3a79d2ab0ed3b8dd85c51974d69cbb05af56c3eb30",
"0x784ad5d4b7aa59f2ad7191c91107022a739bebd9b78a243ea07c0183f890e707",
"0xeb8734b5c3a5adffe92d67ea7589320d15d9a189b56295c8adfc49bcd2cf4227",
"0x3d37566c80816d07b53ae95ff236c440abaa25f265dd433d013f8fc6d0b4ad3c",
"0xa9cdf12fb4a086622646eef0d4b02ba094e72b641f3478e58a7500c1a30537f2",
"0x62cac28728e8e647935ecd679ae9bb88c94f95692be509bde528439b68d63ee4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


