// 4 - Rinkeby
export const contractAddresses = {
  erc20: {
    4: '0x21BBDcbbf0679EB0230D1f50Bb53460ec2AE9786',
  },
  farm: {
    4: '0x0a1b05fd6250bEE2bf85C547817082E85fEe268C',
  },
  weth: {
    4: '0x2fcc4dba284dcf665091718e4d0dab53a416dfe7',
  },
}

export const supportedPools = [
  {
    id: 'ltov1',
    version: 'V1',
    name: 'YESP ERC-20',
    pid: 0,
    lpAddresses: {
      4: '0x200fD413377a2dD2F2D6Ffc4814F190AF0609F4e',
    },
    tokenAddresses: { ...contractAddresses.erc20 },
    symbol: 'yesp-ETH LP',
    tokenSymbol: 'yespLp',
    icon: '',
    pool: '100%',
  },
]
