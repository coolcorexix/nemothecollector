import Head from 'next/head';
import React from 'react';
import { NoisyImagePageWrapper } from 'src/NoisyImage/NoisyImage.styled';
import { blue, darkerBlue, lighterRoseGold } from 'src/theme/colors';

const githubLinks = [
  'https://github.com/coolcorexix/freedom-on-demand',
  'https://github.com/coolcorexix/ding',
  'https://github.com/coolcorexix/jsx-viewer-extension',
];
const reviewLinks = [
  'https://marketplace.visualstudio.com/items?itemName=nemothecollector.jsx-breadcrumbs&ssr=false#review-details',
  'https://chrome.google.com/webstore/detail/freeze-dom/onekmnelbichmlnmkecckkjjljifhefg',
];
const soLinks = [
  'https://stackoverflow.com/a/75374621/9814737',
  'https://stackoverflow.com/a/77028347/9814737',
];

function ActionBar({ githubLink, reviewLink = '', soLink = '' }) {
  return (
    <>
      <Head>
        <title>Products' Nêmô</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex text-sm justify-end pr-12 mt-2 mb-4">
        {soLink && (
          <a
            href={soLink}
            style={{
              border: '1px dashed white',
              padding: `0.2rem 0.5rem`,
              marginRight: '0.5rem',
            }}
            target="_blank"
          >
            ⬆️
          </a>
        )}
        {reviewLink && (
          <a
            href={reviewLink}
            style={{
              border: '1px dashed white',
              padding: `0.2rem 0.5rem`,
              marginRight: '0.5rem',
            }}
            target="_blank"
          >
            ✍️
          </a>
        )}
        {githubLink && (
          <a
            href={githubLinks[1]}
            style={{
              border: '1px dashed white',
              padding: `0.2rem 0.5rem`,
            }}
            target="_blank"
          >
            ⭐️
          </a>
        )}
      </div>
    </>
  );
}

function AsAGiverPage(props) {
  return (
    <NoisyImagePageWrapper>
      <div className="background-as-a-page" />
      <div className="text-white  p-4 justify-center align-content-center relative z-10 ">
        <div className="w-full max-w-screen-sm flex flex-col m-auto">
          <span className=" text-2xl mb-4 text-center font-bold">
            Less pains, more fruits for software engineers
          </span>
          <div className="text-xl leading-relaxed">
            <div className="mb-4">
              Each app aims to solve one tiny yet annoying problem in our daily
              work:
            </div>
            <div>
              <ul>
                <li>
                  *&nbsp;
                  <a
                    target="_blank"
                    style={{
                      color: darkerBlue,
                      backgroundColor: 'white',
                    }}
                    href="https://chrome.google.com/webstore/detail/freeze-dom/onekmnelbichmlnmkecckkjjljifhefg"
                  >
                    [Freeze DOM 🥶]
                  </a>{' '}
                  - A Chrome Extension help freeze the DOM instantly for
                  debugging purpose.
                  <ActionBar
                    githubLink={githubLinks[2]}
                    reviewLink={reviewLinks[1]}
                    soLink={soLinks[1]}
                  />
                </li>
                <li>
                  <span>
                    *&nbsp;
                    <a
                      target="_blank"
                      style={{
                        color: darkerBlue,
                        backgroundColor: 'white',
                      }}
                      href="https://github.com/coolcorexix/ding"
                    >
                      [ Ding 🛎️]
                    </a>{' '}
                    - A terminal command help come back to your work when the
                    command you are waiting for is done. With an elegant "ding!"
                    sound.
                  </span>

                  <ActionBar githubLink={githubLinks[1]} />
                </li>
                <li>
                  *&nbsp;
                  <a
                    style={{
                      color: darkerBlue,
                      backgroundColor: 'white',
                    }}
                    target="_blank"
                    href="https://marketplace.visualstudio.com/items?itemName=nemothecollector.jsx-breadcrumbs&ssr=false"
                  >
                    [React Breadcrumb ⚛️🥖]
                  </a>{' '}
                  - A VSCode extension help get navigatable outlines of ReactJs.
                  <ActionBar
                    githubLink={githubLinks[0]}
                    reviewLink={reviewLinks[0]}
                    soLink={soLinks[0]}
                  />
                </li>
              </ul>
              <span>
                All products are free and open source. If you find them useful,
                please help me share them to more engineers by{' '}
                <span className="border-b border-dashed">upvote answers</span>,{' '}
                <span className="border-b border-dashed">leave reviews</span>,{' '}
                <span className="border-b border-dashed">give stars</span>
                &nbsp; or simply recommend using them to your friends.
              </span>
              <br />
              <br />
              <span>
                And pshh... if you wanna stay in touch, don't hesistate to
                follow&nbsp;
                <a
                  href="https://twitter.com/phamhuyphat"
                  target="_blank"
                  style={{
                    backgroundColor: lighterRoseGold,
                    padding: `0.2rem 0.5rem`,
                    color: darkerBlue,
                  }}
                >
                  my Twitter
                </a>{' '}
                where I tweet about my new projects and lessons learned along
                the way.
              </span>
            </div>
          </div>
        </div>
      </div>
    </NoisyImagePageWrapper>
  );
}

export default AsAGiverPage;
