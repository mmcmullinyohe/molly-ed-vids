import './Home.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Molly from '../assets/Molly.jpg'
import wave from '../assets/wave.svg'

const Home = () => {
  return (
    <div className="page">
      <Nav />

      <main className="home-main">
        <section className="intro">
          {/* Centered heading */}
          <h1 className="intro__heading">123, Learn!</h1>

          {/* Row: tagline + image */}
          <div className="intro__row">
            <p className="intro__tagline">
              Individual tutoring from the comfort of your own home!
            </p>

            <div className="intro__img">
              <img src={Molly} alt="Molly" />
            </div>
          </div>
        </section>

        {/* Wave */}
        <div className="wave-banner">
          <img src={wave} alt="decorative wave" className="wave-banner-wave" />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
