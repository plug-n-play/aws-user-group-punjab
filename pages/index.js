import Head from 'next/head'
import Image from 'next/image'
import Banner from '../public/img/aws-promotion-card.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>AWS User Group Punjab</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section>

        <h2>About Us</h2>
        <p>
          Amazon Web Services(AWS) is a comprehensive, continuously evolving cloud computing platform provided by Amazon that includes a mixture of infrastructure as a service (IaaS, platform as a service (PaaS) and packaged software as a service (SaaS) offerings. AWS services can offer an organization tools such as compute power, database storage and content delivery services.
        </p>

        <p>
          AWS User Group Punjab is a group of individuals who are passionate about learning and sharing different aspects of AWS with the community.
        </p>

        <p>Due to Covid 19 pandemic, all meetups are currently held online.</p>

        <p>
          Connect with us on <a href="https://www.commudle.com/communities/aws-user-group-punjab/" target="_blank">Commudle</a> and other <a href="#footer">Social platforms</a> to stay updated on upcoming content and events.
        </p>

      </section>

      <section>

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
              Our second meet up will take place on Saturday, 28th Aug, 2021.
            </p>

            <p>
              More details to be added. Registration link coming soon.
            </p>
          </li>
        </ol>

      </section>

      <style jsx>{`
        section {
          margin-bottom: 50px;
        }
        ol {
					padding-left: 20px;
        }
      `}</style>
    </>
  )
}
