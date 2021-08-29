

import { MenuEntry } from '@pancakeswap-libs/uikit'


const baseurl="https://candypoppins.finance";
const swap="https://paircut.candypoppins.finance";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: baseurl.concat('/'),
    calloutClass: 'menulink'
  },
  // {
  //   label: 'Swap',
  //   icon: 'SwapIcon',
  //   href: swap.concat('/#/swap'),
  //   calloutClass: 'menulink'
  // },
  // {
  //   label: 'Add Pool',
  //   icon: 'AddPoolIcon',
  //   href: swap.concat('/#/pool'),
  //   calloutClass: 'menulink'
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    calloutClass: 'menulink',
    items: [
      {
        label: 'Exchange',
        href: swap.concat('/#/swap'),
      },
      {
        label: 'Liquidity',
        href: swap.concat('/#/pool'),
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    // href: '/farms',
    href:baseurl.concat('/Farms'),
    calloutClass: 'menulink'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    // href: '/nests',
    href:baseurl.concat('/Pools'),

    calloutClass: 'menulink'
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: baseurl.concat('/comingsoon'),
    calloutClass: 'menulink comingsoon'
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: baseurl.concat('/comingsoon'),
    calloutClass: 'menulink comingsoon'
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: baseurl.concat('/comingsoon'),
    calloutClass: 'menulink comingsoon'
  },
 
  // {
  //   label: 'GBPS',
  //   icon: 'InfoIcon',
  //   href: baseurl.concat('/comingsoon'),
  //   calloutClass: 'menulink'
  // }
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   calloutClass: 'menulink',
  //   items: [     
  //     {
  //       label: 'Blog',
  //       href: baseurl,
  //     },
  //   ],
  // }, 
]

export default config
