import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },

  {
    label: 'Exchange',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://kingdefi.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://kingdefi.finance/#/pool',
      },
    ],
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },

  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },

  {
    label: 'Github',
    icon: 'AuditIcon',
    href: 'https://github.com/kingdefi1/',
  },
]
export const socials = [
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/comming_soon/',
  },
]

export const MENU_HEIGHT = 64
export const MENU_ENTRY_HEIGHT = 24
export const SIDEBAR_WIDTH_FULL = 240
export const SIDEBAR_WIDTH_REDUCED = 56
export default config
