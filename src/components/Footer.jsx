function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>ABNET</span> L.L.C
              </li>
              <li>
                Your Trusted Travel Companion. Where Every Journey Counts.
              </li>
              <li>
                <a href="tel:+1 (844) 999-0873">
                  <i className="fa-solid fa-phone"></i> &nbsp; (844) 999-0873
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                  admin@abnetllc.com "
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; admin@abnetllc.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">About</a>
              </li>
              <li>
                <a href="#home">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
