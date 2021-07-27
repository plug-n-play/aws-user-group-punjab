import Head from 'next/head'
import Image from 'next/image'
import Banner from '../public/img/aws-promotion-card.png'
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
            <Image src={Banner} alt="AWS User Group Punjab" />
            <p>
              AWS offers a complete suite of services and infrastructure which can be overwhelming to beginners. Let's start our Journey at AWS User Group Punjab, by looking at the simplest possible use case on AWS, and learn how to deploy Static Web Apps using AWS.
            </p>
            <p>
              Our first meet up will take place on 31st July, 2021 - Saturday at 11:00 am IST.
            </p>

            <p>
              Register <a href="https://www.commudle.com/communities/aws-user-group-punjab/events/static-web-apps-with-aws-amplify" target="_blank">here</a>
            </p>
          </li>

          <li>
            <h3>Agenda: Creating REST APIs with AWS Amplify</h3>
            <p>
              Our second meet up will take place on 28th Aug, 2021 - Saturday at 6:00 pm IST.
            </p>

            <p>
              More details to be added. Registration link coming soon.
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
