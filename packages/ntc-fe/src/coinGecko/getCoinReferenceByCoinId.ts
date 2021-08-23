import { coinGeckoReference } from './coinGeckoReference';

export function getCoinReferenceByCoinId(coinId: string): {
  code: string;
  coinId: string;
} {
  return coinGeckoReference.find((c) => c.coinId === coinId);
}
