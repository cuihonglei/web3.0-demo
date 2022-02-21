require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TQV632J7ybocCsBVzasOouI8q6G-SSz6',
      accounts: ['ac2d036298c4d19baec090d281380762f76dc371f4877333387be1fa7205cc68']
    }
  }
}