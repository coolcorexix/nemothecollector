import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';
import ReactGA from 'react-ga';
import '../styles/globals.css';
import './svg-playground/cube-style.scss';
import './FolderTree.scss';
import './a-piece-of-art/animation.css';

ReactGA.initialize('G-8S8745E8GZ');

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize('Your Google Analytics Tracking ID');
    // To Report Page View
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  if (typeof window === 'undefined') {
    return null;
  }
  return <Component {...pageProps} />;
}

export default MyApp;
