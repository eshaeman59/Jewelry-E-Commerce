import "./Hero.css";
import heroImage from "../assets/images/hero-jewelry.jpg"
function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* Hero Content */}
        <div className="hero-content">

          <p className="hero-subtitle">
            MODERN JEWELRY
          </p>

          <h1>
            Jewelry that
            <span> speaks for you.</span>
          </h1>

          <p className="hero-description">
            Discover timeless pieces designed to add
            effortless elegance to every moment.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Shop Collection
            </button>

            <button className="secondary-btn">
              Explore Pieces
            </button>
          </div>

        </div>


        {/* Hero Image */}
        <div className="hero-image-wrapper">

          <div className="hero-image">
            <img
              src={heroImage}
              alt="Elegant jewelry collection"
            />
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;