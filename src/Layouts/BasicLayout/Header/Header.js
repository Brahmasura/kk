import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  // for list icon clicks

  // for mobile screen check
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 576px)");

    // defining callbacks
    function handleMediaQueryChange(e) {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // checking size initially
    setIsMobile(mediaQuery.matches);

    // Clean up by removing eventListener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  const handleScroll=()=>{
    // console.log('shreyas')
    // window.document.body.scrollTop = 0; // For Safari
    // window.document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // window.scroll({
    //   top: 0, 
    //   left: 0, 
    //   behavior: 'smooth'
    // });
  }

  if (isMobile) {
    return (
      <>
        <div class={`container-fluid ${styles.headerContainer}`}>
          <nav className={`navbar navbar-expand-lg navbar-light ${styles.headerLogo}`}>
            <a className="navbar-brand " href="#home_section">
              {/* <img src={logo} alt="brand logo" /> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <li className="navbar-item">
                  <a className="nav-link" href="#home_section">
                    Home
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="nav-link" href="#product_section">
                    EV Chargers
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="nav-link" href="#product_section">
                    Li Ion Solution
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="nav-link" href="#navigation_section">
                    kk Grid
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#contact_section">
                    <button className={styles.joinUsBtn}>Get kk</button>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className="fixed-top" >
        <div className="container-fluid">
          <div
            className={`row ${styles.headerContainer} justify-content-center align-items-center`}
          >
            <div className={`col-sm-2 col-md-2 col-lg-2 d-flex justify-content-start pe-0 ${styles.headerLogo}`} >
              <a href="#home_section">
              {/* <img src={logo} alt="logo" className="img-fluid" /> */}
              </a>
            </div>
            <div className=" col-sm-8 col-md-8 d-flex justify-content-center">
              <ul className={styles.headerList}>
              <li
                    className={`nav-li`}
                  ><a className="nav-link" href="#home_section">
                      Home
                    </a></li>
                    <li
                    className={'nav-li'}
                  ><a className="nav-link" href="#product_section">
                      EV Chargers
                    </a></li>
                    <li 
                    className={'nav-li'}
                  ><a className="nav-link" href="#product_section">
                     Li Ion Solution
                    </a></li>
                    <li 
                    className={'nav-li'}
                  ><a className="nav-link" href="#navigation_section">
                      kk Grid
                    </a></li>
                
              </ul>
            </div>
            <div className="col-sm-2 col-md-2">
              <a href="#contact_section">
              <button className={styles.joinUsBtn}>Get kk</button>
              </a>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
};

export default Header;