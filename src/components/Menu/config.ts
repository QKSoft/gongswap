import { MenuEntry } from '@kiwifinancebsc/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '#',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '#',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '#',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: '#',
      },
      {
        label: 'Tokens',
        // href: 'https://info.cheeseswap.app/token/0xcfdf8a80fecaeecc144fa74c0df8691bfd0e26e3',
        href: '#',
      },
      {
        label: 'Pairs',
        // href: 'https://info.cheeseswap.app/pair/0xdf8481f4ffb688d940f59f839c2613cc6c40a79e',
        href: '#',
      },
      {
        label: 'Accounts',
       // href: 'https://info.gongswap.app/accounts',
        href: '#',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: '#',
      },
      {
        label: 'Docs',
        href: '#',
      },
    ],
  },
]

export default config
