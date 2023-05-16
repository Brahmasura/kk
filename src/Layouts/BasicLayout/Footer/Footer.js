import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      {/* top footer container */}
      <footer className={`container-fluid ${styles.footerContainer}`} id={'Footer'}>
        {/* the footer-content-container */}
        <div className={`${styles.footerContent} `}>
          <div className={'row'}>
            <div className={`col-12 col-sm-12 col-md-12 col-lg-2 d-flex justify-content-start align-items-center ${styles.logoColumn}`}>
              {/* <img src={logo} alt="logo" /> */}
            </div>
            <div className={`col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-start align-items-center ${styles.linkColumn}`}>
              <ul>
                <li
                  className={`mx-2`}
                ><a style={{ color: '#ffffff', textDecoration: 'none' }}>
                    Home
                  </a></li>
                <li
                  className={'mx-2'}
                ><a style={{ color: '#ffffff', textDecoration: 'none' }} href="#product_section">
                    EV Chargers
                  </a></li>
                <li
                  className={'mx-2'}
                ><a style={{ color: '#ffffff', textDecoration: 'none' }} href="#product_section">
                    Li Ion Solution
                  </a></li>
                <li
                  className={'mx-2'}
                ><a style={{ color: '#ffffff', textDecoration: 'none' }} href="#navigation_section">
                    kk Grid
                  </a></li>
              </ul>
            </div>

            <div className={`col-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center align-items-center ${styles.iconColumn}`}>
              {/* <a href="https://apps.apple.com/us/app/kk-ev/id6445814482"  target="_blank"><img className={`mx-2 ${styles.firstFooterIcon}`} src={apple} alt="apple logo" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.statiq.nle.kk" target="_blank"> <img className="mx-2" src={google} alt="google logo" /></a> */}
            </div>
          </div>
          {/* <div className={`d-flex footer-end justify-content-between mt-5 ${styles.footerEnd}`}>
            <div classname=" ">
              <p>
                2023 ©kk All rights reserved.
              </p>
            </div>
            <div className="footer-email">
              <p>
                Contact us: kk.com
              </p>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;