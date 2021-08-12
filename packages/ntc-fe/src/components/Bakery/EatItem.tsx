import React from 'react';
import { IEatItem } from './models/IEatItem.model';

function EatItem(props: IEatItem) {
  return (
    <div className="w-5/12 text-lg mr-2">
      <img className="object-contain mb-1" src={props.imageUri} />
      <div className="font-bold text-2xl">{props.name}</div>
      <div className="italic">chứa {props.ingredient}</div>
      {props.stockStatus === 'IN STOCK' && (
        <>
          <div>Ra lò ngày {props.productionDate}</div>
          <span>
            Dùng trước ngày{' '}
            <span className="bg-yellow-300">{props.bestBefore}</span>
          </span>
          <div>{props.price}</div>
        </>
      )}
      {props.stockStatus === 'SOLD OUT' && (
        <>
          <div>
            Đã <span className="bg-red-500 text-white">bán hết</span> 😢
          </div>
        </>
      )}
    </div>
  );
}

export default EatItem;
