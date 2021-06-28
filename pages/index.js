import Head from 'next/head'
import Image from 'next/image'
import heroImg from '../public/img/hero.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AWS User Group Punjab</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Image src={heroImg} alt="AWS User Group Punjab" />
        <h1 className={styles.title}>
          Welcome to <span>AWS User Group Punjab</span>
        </h1>

        <p className={styles.description}>
          A place where all AWS enthusiasists meet, learn and share!
        </p>

        <div>
          Our first meet up will take place on 31st July, 2021 - Saturday at 11:00 am IST.
        </div>

        <div>More details will be added soon.</div>
      </main>
    </div>
  )
}
