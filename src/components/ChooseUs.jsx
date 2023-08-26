import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Experience the ABNET Advantage</h2>
                <p>
                  Experience the ABNET Advantage and transform your journey into
                  a captivating voyage that transcends mere transportation. At
                  ABNET L.L.C, we don't merely offer rides; we provide an
                  immersive travel experience that embodies luxury,
                  dependability, and unmatched value. Our unwavering commitment
                  to excellence ensures that every trip is a harmonious blend of
                  opulent comfort, unwavering reliability, and a level of
                  service that defies the conventional.
                </p>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Safe & Swift Rides</h4>
                    <p>
                      Our priority is your security. Enjoy rides that are both
                      safe and punctual, with top-notch vehicles and
                      professional drivers.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cost-Efficient Options</h4>
                    <p>
                      Value meets convenience. Explore budget-friendly choices
                      without compromising on the quality of service.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Transparent Pricing</h4>
                    <p>
                      Know what you're paying for. Our upfront pricing and
                      transparent billing ensure a straightforward and reliable
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
