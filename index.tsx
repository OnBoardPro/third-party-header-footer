import { createRoot } from "react-dom/client";

import "./styles.css";

function Footer() {
  return (
    <footer id="main-footer" className="site-footer">
      <div className="brand-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-12 col-lg-2 col-xl-1 text-center text-lg-start">
              <a
                href="https://www.knighttrans.com/"
                className="custom-logo-link"
                rel="home"
                aria-current="page"
              >
                <img
                  height="70"
                  src="https://www.knighttrans.com/wp-content/uploads/2024/07/Primary-Horizontal-K-on-dark.svg"
                  className="custom-logo"
                  alt="Knight Transportation"
                  decoding="async"
                />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="container text-light">
          <div className="row align-items-start">
            <div className="col-12 col-lg-9 col-xl-9">
              <div className="footer-menu-area row align-items-start">
                <div className="menu-col col-12 col-xl-6">
                  <h3>
                    <button
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#footer-menu-area-first"
                      aria-expanded="false"
                      aria-controls="footer-menu-area-first"
                    >
                      Our Services
                    </button>
                  </h3>
                  <div
                    id="footer-menu-area-first"
                    className="is-footer-widget collapse d-lg-flex"
                  >
                    <div id="nav_menu-4" className="widget widget_nav_menu">
                      <div className="menu-our-services-col-1-container">
                        <ul id="menu-our-services-col-1" className="menu">
                          <li
                            id="menu-item-83"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-83"
                          >
                            <a href="/our-services/">Dry Van</a>
                          </li>
                          <li
                            id="menu-item-84"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-84"
                          >
                            <a href="/our-services/?services_description_tab=2#services_description">
                              Temp Controlled
                            </a>
                          </li>
                          <li
                            id="menu-item-85"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85"
                          >
                            <a href="/our-services/?services_description_tab=3#services_description">
                              Port Services
                            </a>
                          </li>
                          <li
                            id="menu-item-86"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-86"
                          >
                            <a href="/our-services/?services_description_tab=4#services_description">
                              Dedicated
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="nav_menu-5" className="widget widget_nav_menu">
                      <div className="menu-our-services-col-2-container">
                        <ul id="menu-our-services-col-2" className="menu">
                          <li
                            id="menu-item-89"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-89"
                          >
                            <a href="/our-services/?services_description_tab=6#services_description">
                              Expedited
                            </a>
                          </li>
                          <li
                            id="menu-item-87"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-87"
                          >
                            <a href="/knight-logistics/">Logistics</a>
                          </li>
                          <li
                            id="menu-item-88"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-88"
                          >
                            <a href="/our-services/?services_description_tab=7#services_description">
                              Warehousing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-col col-12 col-lg-6 col-xl-3">
                  <h3>
                    <button
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#footer-menu-area-second"
                      aria-expanded="false"
                      aria-controls="footer-menu-area-second"
                    >
                      Drivers
                    </button>
                  </h3>
                  <div
                    id="footer-menu-area-second"
                    className="is-footer-widget collapse d-lg-flex"
                  >
                    <div id="nav_menu-2" className="widget widget_nav_menu">
                      <div className="menu-drivers-container">
                        <ul id="menu-drivers" className="menu">
                          <li
                            id="menu-item-2807"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2807"
                          >
                            <a href="https://www.knighttrans.com/why-knight/">
                              Why Knight
                            </a>
                          </li>
                          <li
                            id="menu-item-47"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47"
                          >
                            <a href="/jobs/">Jobs by Service</a>
                          </li>
                          <li
                            id="menu-item-3516"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3516"
                          >
                            <a href="https://www.knighttrans.com/jobs-by-state/">
                              Jobs By State
                            </a>
                          </li>
                          <li
                            id="menu-item-48"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-48"
                          >
                            <a href="https://www.knightownerops.com/">
                              Owner Operators
                            </a>
                          </li>
                          <li
                            id="menu-item-2808"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2808"
                          >
                            <a href="https://www.knighttrans.com/training/">
                              CDL Training
                            </a>
                          </li>
                          <li
                            id="menu-item-3287"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3287"
                          >
                            <a href="/knight-life/category/trucker-lifestyle/">
                              Trucker Lifestyle
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-col col-12 col-lg-6 col-xl-3">
                  <h3>
                    <button
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#footer-menu-area-third"
                      aria-expanded="false"
                      aria-controls="footer-menu-area-third"
                    >
                      Company
                    </button>
                  </h3>
                  <div
                    id="footer-menu-area-third"
                    className="is-footer-widget collapse d-lg-flex"
                  >
                    <div id="nav_menu-3" className="widget widget_nav_menu">
                      <div className="menu-company-container">
                        <ul id="menu-company" className="menu">
                          <li
                            id="menu-item-2814"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2814"
                          >
                            <a href="https://www.knighttrans.com/shop-careers/">
                              Shop Careers
                            </a>
                          </li>
                          <li
                            id="menu-item-2813"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2813"
                          >
                            <a href="https://www.knighttrans.com/office-careers/">
                              Office Careers
                            </a>
                          </li>
                          <li
                            id="menu-item-2811"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2811"
                          >
                            <a href="/locations/">Locations</a>
                          </li>
                          <li
                            id="menu-item-2812"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2812"
                          >
                            <a href="https://www.knighttrans.com/about-us/">
                              About Knight
                            </a>
                          </li>
                          <li
                            id="menu-item-3517"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3517"
                          >
                            <a href="https://www.knighttrans.com/our-family-of-brands/">
                              Our Family of Brands
                            </a>
                          </li>
                          <li
                            id="menu-item-2936"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2936"
                          >
                            <a href="https://www.knightproshop.com/">
                              Knight Pro Shop
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-col col-12 col-lg-6 col-xl-3">
                  <h3>
                    <button
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#footer-menu-area-fourth"
                      aria-expanded="false"
                      aria-controls="footer-menu-area-fourth"
                    >
                      Carrier Partners
                    </button>
                  </h3>
                  <div
                    id="footer-menu-area-fourth"
                    className="is-footer-widget collapse d-lg-flex"
                  >
                    <div id="nav_menu-6" className="widget widget_nav_menu">
                      <div className="menu-carrier-partners-footer-container">
                        <ul id="menu-carrier-partners-footer" className="menu">
                          <li
                            id="menu-item-3023"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3023"
                          >
                            <a
                              target="_blank"
                              href="https://highway.com/onboarding/sign-up"
                            >
                              Carrier Onboarding
                            </a>
                          </li>
                          <li
                            id="menu-item-2941"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2941"
                          >
                            <a
                              target="_blank"
                              href="https://www.knighttruckandtrailer.com/"
                            >
                              Knight Truck &amp; Trailer Sales
                            </a>
                          </li>
                          <li
                            id="menu-item-2942"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2942"
                          >
                            <a target="_blank" href="https://fleetaero.com/">
                              FleetAero
                            </a>
                          </li>
                          <li
                            id="menu-item-2943"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2943"
                          >
                            <a
                              target="_blank"
                              href="https://www.amxleasing.com/"
                            >
                              AMX Leasing &amp; Logistics
                            </a>
                          </li>
                          <li
                            id="menu-item-2944"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2944"
                          >
                            <a
                              target="_blank"
                              href="https://www.irontruckservices.com/"
                            >
                              Iron Fuel Program
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-col col-12 col-lg-6 col-xl-3">
                  <h3>
                    <button
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#footer-menu-area-fifth"
                      aria-expanded="false"
                      aria-controls="footer-menu-area-fifth"
                    >
                      Quick Links
                    </button>
                  </h3>
                  <div
                    id="footer-menu-area-fifth"
                    className="is-footer-widget collapse d-lg-flex"
                  >
                    <div id="nav_menu-7" className="widget widget_nav_menu">
                      <div className="menu-quick-links-footer-container">
                        <ul id="menu-quick-links-footer" className="menu">
                          <li
                            id="menu-item-3018"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3018"
                          >
                            <a
                              target="_blank"
                              href="https://www.home.driverfacts.com/"
                            >
                              Verification – DriverFacts
                            </a>
                          </li>
                          <li
                            id="menu-item-3019"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3019"
                          >
                            <a
                              target="_blank"
                              href="https://www.cisive.com/driver-iq"
                            >
                              Verification – Driver IQ
                            </a>
                          </li>
                          <li
                            id="menu-item-3022"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3022"
                          >
                            <a
                              target="_blank"
                              href="https://theworknumber.com/"
                            >
                              Verification – Equifax
                            </a>
                          </li>
                          <li
                            id="menu-item-3021"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3021"
                          >
                            <a
                              target="_blank"
                              href="https://www.knightproshop.com/"
                            >
                              Knight Pro Shop
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="additional-menu-col col-12 col-lg-6 col-xl-6">
                  <ul
                    id="menu-additional-footer-links"
                    className="nav navbar-nav "
                  >
                    <li
                      id="menu-item-3039"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3039"
                    >
                      <a href="https://www.knighttrans.com/contact-us/">
                        Contact Us
                      </a>
                    </li>
                    <li
                      id="menu-item-3730"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3730"
                    >
                      <a href="/locations/">Terminal Directory</a>
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-xl-3">
              <div className="social-links">
                <h3>Let’s Connect!</h3>
                <ul className="social-links-group row social-media-links">
                  <li className="social-links-item col">
                    <a
                      href="https://facebook.com/driveknight"
                      className="is-link "
                      target="_blank"
                    >
                      <img
                        width="70"
                        height="70"
                        src="https://www.knighttrans.com/wp-content/uploads/2024/05/icon_fb_white.svg"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                      />
                      <span className="is-label visually-hidden">Facebook</span>
                    </a>
                  </li>
                  <li className="social-links-item col">
                    <a
                      href="https://www.youtube.com/channel/UC2POYfpIbPfu3NbxRlvLQkA"
                      className="is-link "
                      target="_blank"
                    >
                      <img
                        width="69"
                        height="70"
                        src="https://www.knighttrans.com/wp-content/uploads/2024/05/icon_youtube_white.svg"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                      />
                      <span className="is-label visually-hidden">Youtube</span>
                    </a>
                  </li>
                  <li className="social-links-item col">
                    <a
                      href="https://instagram.com/driveknight"
                      className="is-link "
                      target="_blank"
                    >
                      <img
                        width="69"
                        height="70"
                        src="https://www.knighttrans.com/wp-content/uploads/2024/05/icon_ig.svg"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                      />
                      <span className="is-label visually-hidden">
                        Instagram
                      </span>
                    </a>
                  </li>
                  <li className="social-links-item col">
                    <a
                      href="https://www.linkedin.com/company/knight-transportation"
                      className="is-link "
                      target="_blank"
                    >
                      <img
                        width="70"
                        height="70"
                        src="https://www.knighttrans.com/wp-content/uploads/2024/05/icon_linkedin_white.svg"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                      />
                      <span className="is-label visually-hidden">LinkedIn</span>
                    </a>
                  </li>
                  <li className="social-links-item col">
                    <a
                      href="http://tiktok.com/@knighttransportation"
                      className="is-link "
                      target="_blank"
                    >
                      <img
                        width="70"
                        height="70"
                        src="https://www.knighttrans.com/wp-content/uploads/2024/05/icon_tiktok.svg"
                        className="attachment-full size-full"
                        alt=""
                        decoding="async"
                      />
                      <span className="is-label visually-hidden">Tiktok</span>
                    </a>
                  </li>
                </ul>{" "}
              </div>
              <div className="cta-menu-area">
                <ul id="menu-cta-footer-menu" className="nav navbar-nav ">
                  <li
                    id="menu-item-34"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-34"
                  >
                    <a href="tel:18884564448">1-888-456-4448</a>
                  </li>
                  <li
                    id="menu-item-35"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-35"
                  >
                    <a href="https://intelliapp.driverapponline.com/c/knighttrans">
                      Apply to Drive
                    </a>
                  </li>
                </ul>{" "}
              </div>
              <div className="job-search-footer-area d-none d-lg-block">
                <div className="is-search-jobs-nationwide-wrapper form-wrapper ">
                  {" "}
                  <form id="search-jobs-nationwide-form67895e2e8c5f3">
                    <div className="row">
                      {" "}
                      <div className="col-12">
                        {" "}
                        <h3 className="is-title">Search Driving Jobs</h3>{" "}
                      </div>
                      <div className="col-12">
                        {" "}
                        <label
                          className="is-required"
                          htmlFor="search-jobs-nationwide-form67895e2e8c5f3_zip"
                        >
                          Zip Code
                        </label>
                        <input
                          className="nationwide-search-field-zip"
                          name="search-jobs-nationwide-form67895e2e8c5f3_zip"
                          pattern="[0-9]{5}"
                          placeholder="Enter Zip Code"
                          type="text"
                        />
                      </div>{" "}
                      <div className="col-12">
                        {" "}
                        <div className="button-area">
                          {" "}
                          <button
                            className="btn btn-primary d-block"
                            type="submit"
                          >
                            Search Jobs
                          </button>{" "}
                        </div>
                        <div className="error-wrapper"></div>
                      </div>{" "}
                    </div>{" "}
                  </form>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="legal-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="copy-col col-12 col-xxl-6">
              <div className="copyright-block text-light text-center text-lg-start">
                <p>©2025 Knight Transportation. All Rights Reserved.</p>
              </div>{" "}
            </div>
            <div className="copy-col col-12 col-xxl-6 text-center text-lg-start text-xxl-end">
              <ul
                id="menu-legal-menu"
                className="nav navbar-nav d-flex d-lg-inline-block "
              >
                <li
                  id="menu-item-51"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-51"
                >
                  <a href="https://privacy.knight-swift.com/">Privacy Policy</a>
                </li>
                <li
                  id="menu-item-52"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-52"
                >
                  <a href="/terms-conditions/">Terms and Conditions</a>
                </li>
                <li
                  id="menu-item-3043"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3043"
                >
                  <a target="_blank" href="/wp-content/uploads/knx-tariff.pdf">
                    Tariff
                  </a>
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <a href="/" className="brand-logo-wrapper">
              <span className="brand-logo-positive">
                <img
                  fetchPriority="high"
                  height="70"
                  src="https://www.knighttrans.com/wp-content/uploads/2024/07/Primary-Horizontal-K-on-light.svg"
                  className="attachment-full size-full"
                  alt=""
                  decoding="async"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export function loadFooter(container: HTMLDivElement) {
  const root = createRoot(container);
  root.render(<Footer />);
}

export function loadHeader(container: HTMLDivElement) {
  const root = createRoot(container);
  root.render(<Header />);
}
