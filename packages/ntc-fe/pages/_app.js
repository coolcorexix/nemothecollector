import { GoogleAnalytics } from '@next/third-parties/google';
import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import './FolderTree.scss';
import './a-piece-of-art/animation.css';
import './svg-playground/cube-style.scss';

function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') {
    return null;
  }
  return (
    <>
      <GoogleAnalytics gaId="G-8S8745E8GZ" />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
