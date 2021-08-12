import React from 'react';
import { retrieve } from 'src/ipfs/retrieve';
import { NoisyImage } from 'src/NoisyImage';

export function NFTAudioPlayer() {
  return (
    <div>
      <div className="mb-1">
        <div className="mb-1">
          <NoisyImage imgUrl="https://i.imgur.com/xX8xTga.jpg" />
        </div>
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

      <audio controls>
        <source
          type="audio/mpeg"
          src="https://api.web3.storage/car/bafybeihii7bf736sytzzmgiujlkxaxvx7zo2nwywdit3dwiq7q2wbw354q"
        />
      </audio>
    </div>
  );
}
