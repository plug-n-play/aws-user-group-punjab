import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <main className={styles.container}>
      <Head>
        <title>AWS User Group Punjab</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className={styles.content}>
        <h2>Upcoming Meetups:</h2>

        <ol>
          <li>
            <h3>Agenda: Static Web Apps with AWS Amplify</h3>
            <p>
              Our first meet up will take place on 31st July, 2021 - Saturday at 11:00 am IST.
            </p>

            <p>
              Register <a href="https://docs.google.com/forms/d/e/1FAIpQLScD7Kb3gTqV6M-983cApuCtI3zvKJodhiql_Z_Lq4TfKvNU9w/viewform" target="_blank">here</a>
            </p>
          </li>

          <li>
            <h3>Agenda: Creating REST APIs with AWS Amplify</h3>
            <p>
              Our second meet up will take place on 14th Aug, 2021 - Saturday at 11:00 am IST.
            </p>

            <p>
              Register <a href="https://docs.google.com/forms/d/1WIlUXtEF0nJbQeEXAOeKocR2FoRYYuFh-YS2bW-5BB4" target="_blank">here</a>
            </p>
          </li>
        </ol>

        <p><a href="https://join.slack.com/t/aws-user-group-punjab/shared_invite/zt-sb9mehdf-oBnMehf5J0GhVhlr2RB3hg">Join our Slack Channel</a></p>
      </section>

      <footer>
        <a href='/about'>About Us</a>
      </footer>
    </main>
    </>
  )
}
