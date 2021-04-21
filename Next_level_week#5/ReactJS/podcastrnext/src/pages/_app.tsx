import { Header } from '../conponents/Header'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import { Player } from '../conponents/Player';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
      <Player/>
    </div>
  );
}

export default MyApp
