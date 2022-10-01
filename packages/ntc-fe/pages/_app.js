import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import './svg-playground/cube-style.scss';
import './FolderTree.scss';
import './a-piece-of-art/animation.css';

function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') {
    return null;
  }
  return <Component {...pageProps} />;
}

export default MyApp;
