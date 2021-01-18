import Head from 'next/head'
import { SearchBar } from 'src/components/SearchBar';
const styles = require('../styles/Home.module.css');

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nêmô</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchBar />
        <span className='block mt-1'>
          It is not much but it's mine
        </span>
        <h1 className={styles.title}>
          Welcome to Nêmô
        </h1>

        <p className={styles.description}>
          It could be good to know what I know
        </p>

        <div className={styles.grid}>
          <a href="/search" className={styles.card}>
            <h3>Bookmarks &rarr;</h3>
            <p>I save all my good read here and hastily tagging them 🤓</p>
          </a>

          <a href="/svg-playground" className={styles.card}>
            <h3>SVG Playground &rarr;</h3>
            <p>Some of my work on SVG and CSS to avoid cost using paid app 😢</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Source code &rarr;</h3>
            <p>See which trash can be recycled, which can be better trash</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3><code className={styles.code}>ping me</code> &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
