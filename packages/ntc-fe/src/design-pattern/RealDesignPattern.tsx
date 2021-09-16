import React, { useState } from 'react';
import { SingletonChildView } from './singletonChildView';

function RealDesignPattern(props) {
  const [danhsachlop, setDanhsachlop] = useState(null);
  return (
    <div className="block p-4">
      <div>
        <button
          className="bg-gray-400 p-2 mb-2"
          onClick={() => {
            setDanhsachlop(SingletonChildView.getChildComponent());
          }}
        >
          Hien thi danh sach lop
        </button>
      </div>
      {!!danhsachlop && (
        <div className="flex border-2 w-1/2 justify-between flex-row p-2">
          {danhsachlop}

          <button
            onClick={() => {
              SingletonChildView.closeChildComponent();
              setDanhsachlop(null);
            }}
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

export default RealDesignPattern;
