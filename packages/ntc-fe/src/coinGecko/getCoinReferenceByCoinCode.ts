import { coinGeckoReference } from './coinGeckoReference';
import { ICoinReference } from './ICoinReference.model';

export function getCoinReferenceByCode(coinCode: string): ICoinReference {
  return coinGeckoReference.find((c) => c.code === coinCode);
}
