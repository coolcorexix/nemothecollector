import { GoogleAnalytics } from '@next/third-parties/google';
import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import './FolderTree.scss';
import './a-piece-of-art/animation.css';
import './svg-playground/cube-style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaId="G-K5Z613E4Q8" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
