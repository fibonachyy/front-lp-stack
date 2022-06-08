// 4 - Rinkeby
export const contractAddresses = {
  erc20: {
    4: '0x003B992a34D8b5a64CFf5Ea110d8158C4d075c70',
  },
  farm: {
    4: '0xEB1A9E02b28D14626F1928e946a1727Bdf18809B',
  },
  weth: {
    4: '0x2fcc4dba284dcf665091718e4d0dab53a416dfe7',
  },
}

export const supportedPools = [
  {
    id: 'ltov1',
    version: 'V1',
    name: 'LTO ERC-20',
    pid: 0,
    lpAddresses: {
      4: '0x8cB08787a8e176cCcB29C95DacBdb05eBEd7ED72',
    },
    tokenAddresses: { ...contractAddresses.erc20 },
    symbol: 'yesp-ETH LP',
    tokenSymbol: 'yespLp',
    icon: '',
    pool: '100%',
  },
]
