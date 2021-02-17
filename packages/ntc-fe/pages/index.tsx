import Head from 'next/head';
import SiteItems from '../src/home-page-data/site-items-data';
import { SectionHeader} from 'src/components/SectionHeader';
import { SectionContainer } from 'src/components/SectionContainer';
import { PinnedSlider } from 'src/components/PinnedSlider';


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
            been collecting moments and feels of contribution lately
          </span>
        </div>

        <SectionContainer>
          <SectionHeader>
            Pinned:
          </SectionHeader>
          <div className='mb-1'>
            I am at Qui Nhơn for Tết 2021, constantly sending out kèo đi chơi haha
          </div>
          <PinnedSlider
            listImgSrc={[
              'https://i.imgur.com/3EKxmSs.jpg',
              'https://i.imgur.com/CjIqrpM.jpg',
              'https://i.imgur.com/c7Q0aZ6.jpeg',
            ]}
          />

        </SectionContainer>
        <div>
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
        </div>
        <div>

        </div>
        


        {/* <div className='flex w-full'>
          <ClickableItemBox className='w-1/4 mb-4'>
            <a href="/search" >
              <h3>Bookmarks &rarr;</h3>
              <p>I save all my good read here and hastily tagging them 🤓</p>
            </a>
          </ClickableItemBox>
          <ClickableItemBox className='w-1/4 mb-4'>
            <a href="/svg-playground" >
              <h3 className='font-bold'>SVG Playground &rarr;</h3>
              <p>Some of my work on SVG and CSS to avoid cost using paid app 😢</p>
            </a>
          </ClickableItemBox>
        </div> */}


        {/* 
          

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"

          >
            <h3>Source code &rarr;</h3>
            <p>See which trash can be recycled, which can be better trash</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"

          >
            <h3><code >ping me</code> &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  )
}
