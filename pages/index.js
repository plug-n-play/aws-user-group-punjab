import Head from 'next/head'
import Image from 'next/image'
import Banner31072021 from '../public/img/promos/31072021.png'

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
            <h3>Deploy Static Web Apps with Amazon S3 & Amazon Cloudfront.</h3>
            <iframe width="100%" height="360" src="https://www.youtube.com/embed/U0QUsjvgOug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>
              Long gone are the days when Static web apps meant a collection of web-pages with just static content. Single page applications offer a powerful strategy to deploy web apps which are way more than just static content. In this meetup, we will explore how Amazon S3 offers a way to effortlessly host static web apps. Further, we will see how Amazon Cloudfront securely delivers content with low latency and high transfer speeds.
            </p>
            <p>
              When: 4th Dec, 2021, Saturday 11:30 am - 1:00 pm IST.
            </p>

            <p>
              <a href="https://commudle.com/communities/aws-user-group-punjab/events/deploy-static-web-apps-with-amazon-s3-amazon-cloudfront" target="_blank">Register</a>
            </p>
          </li>
        </ol>

      </section>

      <section>

        <h2>Past Meetups:</h2>

        <ol>
          <li>
            <h3>Static Web Apps with AWS Amplify</h3>
            <Image src={Banner31072021} alt="Static Web Apps with AWS Amplify" />
            <p>
              AWS offers a complete suite of services and infrastructure which can be overwhelming to beginners. Let's start our Journey at AWS User Group Punjab, by looking at the simplest possible use case on AWS, and learn how to deploy Static Web Apps using AWS.
            </p>
            <p>
              Speaker: <a href="https://www.linkedin.com/in/amandeep-singh-bajwa/" target="_blank">Amandeep Singh</a>, Independent Consultant, Organiser AWS UG Punjab
            </p>
            <p>
              When: 31st July, 2021, Saturday 11:00 am - 12:30 pm IST.
            </p>
          </li>

          <li>
            <h3>Introduction to Serverless</h3>

            <iframe width="100%" height="340" src="https://www.youtube.com/embed/GLLnd3S_tZw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <p>
              Speaker: <a href="https://www.linkedin.com/in/sanchitdilipjain/" target="_blank">Sanchit Jain</a>, Lead Architect, Quantiphi, AWS APM Ambassador
            </p>
            <p>
              When: 21st Nov, 2021, Sunday 1:30 pm - 3:00 pm IST.
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
