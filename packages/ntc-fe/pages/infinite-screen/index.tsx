import dynamic from 'next/dynamic';

// This page reads window dimensions during initial render, so it can only
// render on the client. Everything else on the site stays server-rendered.
const InfiniteScreenPage = dynamic(
  () => import('src/infinite-screen/InfiniteScreenPage'),
  { ssr: false },
);

export default InfiniteScreenPage;
