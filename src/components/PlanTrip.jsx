import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Seamless Travel Adventures</h3>
              <h2>Our Exclusive Offerings</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Secure Journeys</h3>
                <p>
                  Travel worry-free with our enhanced safety measures and
                  dedicated protocols.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>24/7 Support</h3>
                <p>
                  Need assistance anytime? Our support team is available around
                  the clock to help you.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Expert Drivers</h3>
                <p>
                  Our skilled drivers ensure a smooth and reliable journey,
                  getting you to your destination with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
