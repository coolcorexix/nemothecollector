import Head from 'next/head';
import SiteItems from '../src/home-page-data/site-items-data';
import { SectionHeader} from 'src/components/SectionHeader';
import { SectionContainer } from 'src/components/SectionContainer';
import { PinnedSlider } from 'src/components/PinnedSlider';
import {quickBio} from 'src/home-page-data/quick-bio';
import {pinnedContent} from 'src/home-page-data/pinned-content';
import { NoisyImage } from 'src/NoisyImage';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Nêmô</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-screen-sm px-2 sm:px-0 m-auto'>
        <div className='flex flex-col py-4'>
          <span className='block font-bold text-xl'>
            It's me  Nêmô, your boi! 🌱🌿🌸
          </span>
          <span className='block text-sm'>
            {quickBio}
          </span>
        </div>
        <SectionContainer>
          <div className='text-3xl'>
            <a className='mx-5' href='/read2'>
              🔖
            </a>
          </div>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>
            Pinned:
          </SectionHeader>
          <div className='mb-1'>
            {pinnedContent.caption}
          </div>
          <PinnedSlider
            listImgSrc={pinnedContent.images}
          />
        </SectionContainer>
        <div className='flex flex-col sm:flex-row justify-between '>        
        <SectionContainer>
          <SectionHeader>
            Platforms:
          </SectionHeader>
          {
            Object.keys(SiteItems).map(si => {
              return <div key={si} className='text-md'>
                <span className='font-bold'>
                  {SiteItems[si].display}:&nbsp;
                </span>
                <a
                  className='text-blue-800 hover:underline' 
                  href={SiteItems[si].link}
                >
                  {SiteItems[si].detail}
                </a>
              </div>
            })
          }
          </SectionContainer>
          <NoisyImage
            imgUrl='https://i.imgur.com/p75lwaN.png'
          />

        </div>
      </main>
    </div>
  )
}
