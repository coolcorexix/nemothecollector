import React from 'react';
import { TypeCoinCode } from 'src/coinGecko/TCoinCode.type';
import { formatToVndDisplay } from 'src/locales/formatToVndDisplay';

interface IProps {
  logoSrcUrl: string;
  isFirstLine: boolean;
  coinCode: TypeCoinCode;
  have: number;
  worth: number;
}

export function CoinOverviewRow(props: IProps) {
  return (
    <div className="flex flex-row items-center justify-between py-2">
      <img
        style={{
          width: 26,
          height: 26,
        }}
        src={props.logoSrcUrl}
      />
      <div className="w-1/5">
        <span>{props.isFirstLine ? 'currently have' : '_______'}</span>
      </div>
      <div className="w-1/5">
        <span>
          {props.have.toFixed(4)}&nbsp;{props.coinCode}
        </span>
      </div>
      <div className="w-1/5">
        {' '}
        <span>{props.isFirstLine ? 'which is worth' : '_______'}</span>
      </div>
      <div className="w-1/5 flex flex-row justify-end">
        {' '}
        <span>{formatToVndDisplay(props.worth)}</span>
      </div>
    </div>
  );
}
