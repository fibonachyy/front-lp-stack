interface Network {
  name: string
  chainId: number
  explorers: string[]
  rpc: string[]
}

class CreateRpcObject {
  chainId: string
  chainName: string
  rpcUrls: string[]
  blockExplorerUrls?: string[]
  constructor(data: Network) {
    this.chainId = '0x' + data.chainId.toString(16)
    this.chainName = data.name
    this.blockExplorerUrls = data.explorers
    this.rpcUrls = data.rpc
  }
}

export default async function changeNetwork(chainId: number): Promise<void> {
  //   const targetRpc = new CreateRpcObject(network)
  if (window.ethereum) {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x' + chainId.toString(16) }],
    })
  } else {
    console.log(
      'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html',
    )
  }
}
