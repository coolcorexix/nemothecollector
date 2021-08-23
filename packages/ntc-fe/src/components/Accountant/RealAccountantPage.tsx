import React from 'react';
import useSWR, { SWRResponse } from 'swr';
import { formatToVndDisplay } from 'src/locales/formatToVndDisplay';
import { IResponseLoadSheet } from 'pages/api/loadSheet';
import { CoinOverviewRow } from './CoinOverviewRow';
import { TypeCoinCode } from 'src/coinGecko/TCoinCode.model';
import { getCoinReferenceByCode } from 'src/coinGecko/getCoinReferenceByCoinCode';
import { SectionHeader } from '../SectionHeader';
import { SectionContainer } from '../SectionContainer';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function RealAccountantPage() {
  const { data, error }: SWRResponse<IResponseLoadSheet, any> = useSWR(
    '/api/loadSheet',
    fetcher
  );
  if (!data) return <div className="m-auto px-2 py-4">loading...</div>;
  return (
    <main className="max-w-screen-sm px-2 py-4 sm:px-0 m-auto">
      <span className="block font-bold text-xl">Accountant</span>
      <br />
      <SectionContainer>
        {Object.keys(data.interestedCoinOverview).map(
          (coinCode: TypeCoinCode, index) => {
            const coinReference = data.interestedCoinOverview[coinCode];
            return (
              <CoinOverviewRow
                coinCode={coinCode}
                isFirstLine={index === 0}
                have={coinReference.have}
                worth={coinReference.worth}
                logoSrcUrl={getCoinReferenceByCode(coinCode).logoSrcUrl}
                key={coinCode}
              />
            );
          }
        )}
        <div className="border-t-2 border-black my-2" />
        <div className="flex flex-row justify-between">
          <div style={{ width: 26 }} />
          <span className="w-1/5"></span>
          <span className="w-1/5">
            {Object.keys(data.interestedCoinOverview).length} tokens in portfo.
          </span>
          <span className="w-1/5">estimated total: </span>
          <span className="w-1/5 text-right">
            {formatToVndDisplay(data.coinGeckoCalculatedTotalCryptoWorth)}
          </span>
        </div>
      </SectionContainer>
    </main>
  );
}

export default RealAccountantPage;
