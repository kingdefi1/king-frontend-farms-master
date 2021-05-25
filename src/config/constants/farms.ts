import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'KING-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x96a4e7a290396c2399b1062088c43bd19203b327', // to-do may-20
    },
    tokenSymbol: 'KING',
    tokenAddresses: {
      97: '',
      56: '0xc5B00BF8aD958CBC46586b25C071acfa7D1a7F50',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 10,
    lpSymbol: 'KING-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2625682C233d66e10eeF8153A3194a66F8d2Fa0E', // to-do may-20
    },
    tokenSymbol: 'KING',
    tokenAddresses: {
      97: '',
      56: '0xc5B00BF8aD958CBC46586b25C071acfa7D1a7F50',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
