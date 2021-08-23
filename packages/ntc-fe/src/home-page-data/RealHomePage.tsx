import React from 'react';
import Head from 'next/head';
import { SectionHeader } from 'src/components/SectionHeader';
import { SectionContainer } from 'src/components/SectionContainer';
import { PinnedSlider } from 'src/components/PinnedSlider';
import { NoisyImage } from 'src/NoisyImage';
import { quickBio } from './quick-bio';
import { pinnedContent } from './pinned-content';
import SiteItems from './site-items-data';
import { NFTAudioPlayer } from './NFTAudioPlayer';

export default function RealHomePage() {
  return (
    <div>
      <Head>
        <title>Nêmô</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-sm px-2 sm:px-0 m-auto">
        <div className="flex flex-row mb-2">
          <div className="w-1/2">
            <div className="flex flex-col py-4">
              <span className="block font-bold text-xl">
                It's me Nêmô, your boi! 🌱🌿🌼🍂🌱
              </span>
              <span className="block text-sm">{quickBio}</span>
            </div>
            <SectionContainer>
              <div className="text-3xl">
                <a className="mx-5" href="/read2">
                  🔖
                </a>
                <a
                  className="mx-5"
                  target="_blank"
                  href="https://github.com/coolcorexix/nemothecollector"
                >
                  ⚙️
                </a>
              </div>
            </SectionContainer>

            <SectionContainer>
              <SectionHeader>Pinned:</SectionHeader>
              <div className="mb-1">{pinnedContent.caption}</div>
              <PinnedSlider listImgSrc={pinnedContent.images} />
            </SectionContainer>
          </div>
          <div className="w-1/2 p-4 flex flex-col self-center">
            <div className="mb-2">
              <NFTAudioPlayer />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between ">
          <SectionContainer>
            <SectionHeader>Platforms:</SectionHeader>
            {Object.keys(SiteItems).map((si) => {
              return (
                <div key={si} className="text-md">
                  <span className="font-bold">
                    {SiteItems[si].display}:&nbsp;
                  </span>
                  <a
                    className="text-blue-800 hover:underline"
                    href={SiteItems[si].link}
                  >
                    {SiteItems[si].detail}
                  </a>
                </div>
              );
            })}
          </SectionContainer>
          <NoisyImage imgUrl="https://i.imgur.com/p75lwaN.png" />
        </div>
      </main>
    </div>
  );
}
