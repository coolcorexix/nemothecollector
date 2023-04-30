import React from 'react';
import { NoisyImage } from 'src/NoisyImage';

export function NFTAudioPlayer() {
  return (
    <div
      style={{
        border: '1px solid #000',
      }}
      className="flex flex-row p-2 items-center sm:items-start sm:flex-col"
    >
      <div className="flex justify-center items-center w-1/3 mr-2 mb-2 sm:mr-0 sm:w-full">
        <NoisyImage imgUrl="https://i.imgur.com/xX8xTga.jpg" />
      </div>
      <div className="w-2/3 mb-1 sm:w-full">
        <div className="mb-1">
          <span className="text-lg font-bold">[Original] Something new</span>
          <br />
          <span>
            Served by&nbsp;
            <a
              className="text-blue-500"
              href="https://bafybeihii7bf736sytzzmgiujlkxaxvx7zo2nwywdit3dwiq7q2wbw354q.ipfs.dweb.link/"
            >
              IPFS
            </a>
          </span>
        </div>
        <audio className="w-full" controls>
          <source
            type="audio/mpeg"
            src="https://api.web3.storage/car/bafybeihii7bf736sytzzmgiujlkxaxvx7zo2nwywdit3dwiq7q2wbw354q"
          />
        </audio>
      </div>
    </div>
  );
}
