import logo from "../assets/logo.png";
import "./Footer.css";
import { FaArrowRight } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"


function Footer() {
  return (
    <div className="footer-container" style={{ width: "100vw" }}>
      <footer className="footer-main py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <img src={logo} alt="" style={{ width: "160px" }} />
            <div className='about-company'>
              Zidio: Innovating IT for business success.
              Excellence and integrity drive our cutting-edge services and
              consulting, tailored for today's digital landscape.
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Useful Links</h4>
              </div>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                  <FaArrowRight color="#A69EA5" size={10}></FaArrowRight>
                    <a href="#">
                       About
                    </a>
                  </li>
                  <li>
                  <FaArrowRight color="#A69EA5" size={10}></FaArrowRight>
                    <a href="#">
                      Our Team
                    </a>
                  </li>
                  <li>
                  <FaArrowRight color="#A69EA5" size={10}></FaArrowRight>
                    <a href="#">
                      Pricing Plan
                    </a>
                  </li>
                  <li>
                  <FaArrowRight color="#A69EA5" size={10}></FaArrowRight>
                    <a href="#">
                     Contact Us
                    </a>
                  </li>
                  <li>
                  <FaArrowRight color="#A69EA5" size={10}></FaArrowRight>
                    <a href="#">
                    Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Our Services</h4>
              </div>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                  <FaArrowRight color="#A69EA5" size={10}></FaArrowRight>
                    <a href="#">
                       Web App. Development
                    </a>
                  </li>
                  <li>
                  <FaArrowRight color="#A69EA5" size={10}></FaArrowRight>
                    <a href="#">
                      FrontEnd Development
                    </a>
                  </li>
                  <li>
                  <FaArrowRight color="#A69EA5" size={10}></FaArrowRight>
                    <a href="#">
                      JavaScript Development
                    </a>
                  </li>
                  <li>
                  <FaArrowRight color="#A69EA5" size={10}></FaArrowRight>
                    <a href="#">
                     UI/UX Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5 className="text-white">Subscribe to our newsletter</h5>
              <p className="text-white">
                Monthly digest of what's new and exciting from us.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="newsletter-input form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="licence">© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
          <li className="ms-3">
              <a className="link-body-emphasis" href="#">
              <FaLinkedin color="#A69EA5" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
              <FaSquareTwitter color="#A69EA5" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaInstagramSquare color="#A69EA5" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
              <FaFacebook color="#A69EA5" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
