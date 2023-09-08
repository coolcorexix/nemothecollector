import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { NoisyImage } from 'src/NoisyImage';
import { PinnedSlider } from 'src/components/PinnedSlider';
import { SectionContainer } from 'src/components/SectionContainer';
import { SectionHeader } from 'src/components/SectionHeader';
import Hole from './Hole';
import LightSwitch from './LightSwitch';
import { NFTAudioPlayer } from './NFTAudioPlayer';
import { pinnedContent } from './pinned-content';
import { quickBio } from './quick-bio';
import SiteItems from './site-items-data';

export default function RealHomePage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleReCaptchaVerify = useCallback(
    async (actionName: string) => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }
      executeRecaptcha(actionName);

      const token = await executeRecaptcha('yourAction');
      // Do whatever you want with the token
    },
    [executeRecaptcha]
  );

  useEffect(() => {
    console.log('recaptcha loaded');
    handleReCaptchaVerify('access_page');
  }, [handleReCaptchaVerify]);

  return (
    <div>
      <Head>
        <title>Nêmô</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-sm px-2 sm:px-0 m-auto">
        <div className="flex flex-row py-4 justify-between">
          <div>
            <div className="mb-4">
              <span className="block font-bold text-xl">
                It's me Nêmô, your boi! 🌱🌿🌼🍂🌱🌿
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
          </div>

          <LightSwitch />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <div className="w-full">
            <SectionContainer>
              <SectionHeader>Pinned:</SectionHeader>
              <div className="mb-1">{pinnedContent.caption}</div>
              <PinnedSlider listImgSrc={pinnedContent.images} />
            </SectionContainer>
          </div>
          <div className="w-full flex flex-col self-center sm:p-4">
            <div className="mb-2">
              <NFTAudioPlayer />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between ">
          <SectionContainer>
            <SectionHeader>Platforms:</SectionHeader>
            {Object.keys(SiteItems).map((si) => {
              return (
                <div key={si} className="text-md">
                  <span className="font-bold">
                    {SiteItems[si].display}:&nbsp;
                  </span>
                  <a
                    target="_blank"
                    className="text-blue-800 hover:underline"
                    href={SiteItems[si].link}
                  >
                    {SiteItems[si].detail}
                  </a>
                </div>
              );
            })}
          </SectionContainer>
          <div className="w-32 max-w-sm flex mb-32 flex-row justify-end sm:w-full">
            <NoisyImage imgUrl="https://i.imgur.com/p75lwaN.png" />
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Hole />
        </div>
      </main>
    </div>
  );
}
