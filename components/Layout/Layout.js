import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
			<main>{children}</main>
      <Footer />
      <style jsx>{`
      .container {
          min-height: 100vh;
          padding: 0 1rem;
          width: 90%;
          max-width: 710px;
          margin: 0 auto;
        }
      `}</style>

    </div>
  )
}
