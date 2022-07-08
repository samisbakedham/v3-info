import { Token } from '@cndllabs/sdk-core'
import { CandleNetworkInfo, NetworkInfo, PolygonNetworkInfo } from 'constants/networks'
import { CNDL_ADDRESS, MATIC_ADDRESS, WETH_ADDRESSES } from '../constants'

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
}

export function serializeToken(token: Token): SerializedToken {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name,
  }
}

export function formatTokenSymbol(address: string, symbol: string, activeNetwork?: NetworkInfo) {
  // dumb catch for matic
  if (address === MATIC_ADDRESS && activeNetwork === PolygonNetworkInfo) {
    return 'MATIC'
  }

  // dumb catch for Candle
  if (address === CNDL_ADDRESS && activeNetwork === CandleNetworkInfo) {
    return 'CNDL'
  }

  if (WETH_ADDRESSES.includes(address)) {
    return 'ETH'
  }
  return symbol
}

export function formatTokenName(address: string, name: string, activeNetwork?: NetworkInfo) {
  // dumb catch for matic
  if (address === MATIC_ADDRESS && activeNetwork === PolygonNetworkInfo) {
    return 'MATIC'
  }

  // dumb catch for Candle
  if (address === CNDL_ADDRESS && activeNetwork === CandleNetworkInfo) {
    return 'CNDL'
  }

  if (WETH_ADDRESSES.includes(address)) {
    return 'Ether'
  }
  return name
}
