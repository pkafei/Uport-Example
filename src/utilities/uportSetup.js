import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect('uPort Demo', {
  clientId: '2odmXpvCKBHfEytoJq2rsEx3BAaiqRbThZd',
  network: 'rinkeby',
  signer: SimpleSigner('ec9b8854ab0042f646bd9f96e9a7646c55cc258f420c8c0f29253e698100d1c7')
})

const web3 = uport.getWeb3()
export { web3, uport }
