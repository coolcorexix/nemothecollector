import Head from 'next/head';
import React, { useRef, useState } from 'react';
import { NoisyImagePageWrapper } from 'src/NoisyImage/NoisyImage.styled';
import { blue, darkerBlue, lighterRoseGold } from 'src/theme/colors';

function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.volume = 0.3;
      el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/ambient.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Mute ambient sound' : 'Play ambient sound'}
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 1000,
          border: '1px dashed white',
          background: 'transparent',
          color: 'white',
          padding: '0.4rem 0.6rem',
          cursor: 'pointer',
          fontSize: '1.2rem',
        }}
      >
        {playing ? '🔊' : '🔈'}
      </button>
    </>
  );
}

const githubLinks = [
  'https://github.com/coolcorexix/freedom-on-demand',
  'https://github.com/coolcorexix/ding',
  'https://github.com/coolcorexix/jsx-viewer-extension',
  'https://github.com/coolcorexix/mjolnir',
  'https://github.com/coolcorexix/claude-grep',
];
const reviewLinks = [
  'https://marketplace.visualstudio.com/items?itemName=nemothecollector.jsx-breadcrumbs&ssr=false#review-details',
  'https://chrome.google.com/webstore/detail/freeze-dom/onekmnelbichmlnmkecckkjjljifhefg',
];
const soLinks = [
  'https://stackoverflow.com/a/75374621/9814737',
  'https://stackoverflow.com/a/77028347/9814737',
];

const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: 'claude-grep',
        codeRepository: 'https://github.com/coolcorexix/claude-grep',
        url: 'https://claude-grep.vercel.app',
        description:
          'A CLI to search your AI coding sessions by content across Claude Code, OpenCode and Hermes — resume or fork any past conversation with one keypress.',
        author: { '@type': 'Person', name: 'coolcorexix' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'SoftwareSourceCode',
        name: 'Mjolnir',
        codeRepository: 'https://github.com/coolcorexix/mjolnir',
        description:
          'MacOS app to open any window anywhen instead of finding them. Get notified when the LLM finishes or gets blocked, visually or with sound.',
        operatingSystem: 'macOS',
        author: { '@type': 'Person', name: 'coolcorexix' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'SoftwareSourceCode',
        name: 'Freeze DOM',
        codeRepository: 'https://github.com/coolcorexix/jsx-viewer-extension',
        url: 'https://chrome.google.com/webstore/detail/freeze-dom/onekmnelbichmlnmkecckkjjljifhefg',
        description:
          'A Chrome Extension to freeze the DOM instantly for debugging purposes.',
        author: { '@type': 'Person', name: 'coolcorexix' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'SoftwareSourceCode',
        name: 'Ding',
        codeRepository: 'https://github.com/coolcorexix/ding',
        description:
          'A terminal command that brings you back to your work when the command you are waiting for is done. With an elegant "ding!" sound.',
        author: { '@type': 'Person', name: 'coolcorexix' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'SoftwareSourceCode',
        name: 'React Breadcrumbs',
        codeRepository: 'https://github.com/coolcorexix/freedom-on-demand',
        url: 'https://marketplace.visualstudio.com/items?itemName=nemothecollector.jsx-breadcrumbs',
        description:
          'A VSCode extension to get navigatable outlines of ReactJS components.',
        author: { '@type': 'Person', name: 'coolcorexix' },
      },
    },
  ],
};

function RepoSlug({ url }) {
  return (
    <div
      className="text-sm"
      style={{ fontFamily: 'monospace', opacity: 0.75, marginTop: '0.25rem' }}
    >
      <a href={url} target="_blank">
        {url.replace('https://', '')}
      </a>
    </div>
  );
}

function ActionBar({ githubLink, reviewLink = '', soLink = '' }) {
  return (
    <>
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
            href={githubLink}
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
      <Head>
        <title>
          claude-grep, Mjolnir, Freeze DOM, Ding & React Breadcrumbs —
          open-source tools by coolcorexix (Nêmô)
        </title>
        <meta
          name="description"
          content="Free open-source developer tools by coolcorexix (Nêmô): coolcorexix/claude-grep — search and fork AI coding sessions across Claude Code, OpenCode and Hermes; coolcorexix/mjolnir — macOS window switcher with LLM notifications; Freeze DOM, Ding and React Breadcrumbs."
        />
        <link rel="canonical" href="https://nemothecollector.dev/products" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
        />
      </Head>
      <AmbientSound />
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
                    href="https://claude-grep.vercel.app"
                  >
                    [claude-grep 🔍]
                  </a>{' '}
                  - A CLI to search your AI coding sessions by content across
                  Claude Code, OpenCode and Hermes — resume or fork any past
                  conversation with one keypress.
                  <RepoSlug url={githubLinks[4]} />
                  <ActionBar githubLink={githubLinks[4]} />
                </li>
                <li>
                  *&nbsp;
                  <a
                    target="_blank"
                    style={{
                      color: darkerBlue,
                      backgroundColor: 'white',
                    }}
                    href="https://github.com/coolcorexix/mjolnir"
                  >
                    [Mjolnir 🔨]
                  </a>{' '}
                  - MacOS app to open any window anywhen instead of finding them. Get notified when the LLM finishes / gets blocked visually or with sound.
                  <RepoSlug url={githubLinks[3]} />
                  <ActionBar githubLink={githubLinks[3]} />
                </li>
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
                  <RepoSlug url={githubLinks[2]} />
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
                  <RepoSlug url={githubLinks[1]} />
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
                  <RepoSlug url={githubLinks[0]} />
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
                  href="https://www.threads.com/@nemothecollector"
                  target="_blank"
                  style={{
                    backgroundColor: lighterRoseGold,
                    padding: `0.2rem 0.5rem`,
                    color: darkerBlue,
                  }}
                >
                  my Thread
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
