import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'POPPINS-BUSD LP',
    lpAddresses: {
      97: '0x45611147c682ac797B5719842Ce7D3Fe1F9997e8',
      56: '0x049C3329caEF0D79Dd2Ec184e2ED2272aCAe7860',
    },
    tokenSymbol: 'POPPINS',
    tokenAddresses: {
      97: '0x84CfB75584ed04C3CCc124Df10A48bE2d2cD9890',
      56: '0xB30A6D126964a992e2dCD39ec17761740DBDF373',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'POPPINS-BNB LP',
    lpAddresses: {
      97: '0xa0193f6eD20cDF1F52847F58a0541CCA0b35c5CC',
      56: '0x132c096C8684378CFBCAfD6DA91A3CBc128D0018',
    },
    tokenSymbol: 'POPPINS',
    tokenAddresses: {
      97: '0x84CfB75584ed04C3CCc124Df10A48bE2d2cD9890',
      56: '0xB30A6D126964a992e2dCD39ec17761740DBDF373',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe6cAA91e79261F8a36C1C668F27cC7Bf838Ac594',
      56: '0x5Fe546cB8Bc050F25BfdA8b21d61DffC9E3d729c',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x84CfB75584ed04C3CCc124Df10A48bE2d2cD9890',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
  ,
  {
    pid: 3,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'POPPINS',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x049C3329caEF0D79Dd2Ec184e2ED2272aCAe7860', // CAKE-BUSD LP
    },
    tokenSymbol: 'POPPINS',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xB30A6D126964a992e2dCD39ec17761740DBDF373',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  
]

export default farms
