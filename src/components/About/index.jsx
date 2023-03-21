import React from "react";

import "./index.css";


function About() {
  return (
    
      <main>
        <section className="banner aboutUs">
          <h1 className="heading">
            
            PMEntire Helps Redefine Your <span>Business Efficiency</span>
          </h1>
        </section>

        <section className="aboutPMEntire">
          <div className="aboutPMEntire_imageContainer">
            <img
              className="lazy-hidden"
              src="./images/about-pmentire-img.webp"
              alt="PMEntire About Us"
              width="685"
              height="620"
            />
          </div>
          <div className="aboutPMEntire_textContainer">
            <h1 className="heading">About PMEntire</h1>
            <p className="text">
              <span>
                PMEntire software empowers professional service organizations to
                reach new levels of efficiency and profitability. With over 20
                years of industry experience, our PSA tool is designed to help
                businesses overcome the challenges of the 2020s and beyond. Some
                of them include global competition, market volatility, business
                uncertainties, and more.
              </span>
              <span>
                PMEntire specializes in PSA software and it is a part of the
                Saviom group of companies. Saviom has catered to the needs of
                several Fortune 500 companies across 50+ countries. Some of our
                notable customers include Siemens, Fujitsu, DHL, Honeywell,
                Global Wind Services, Alix Partner, and many more.
              </span>
            </p>
          </div>
        </section>

        <section className="feature">
          <div className="feature_container">
            <div className="textContainer">
              <h3 className="heading">History</h3>
              <p className="text">
                <span>
                  Saviom is the brainchild of 4 passionate and visionary
                  entrepreneurs who aspired to develop a product for increasing
                  business efficiency. Starting as a bootstrapped business in
                  1999 from a Sydney suburban garage, today we are a name to
                  reckon with in resource management.
                </span>
                <span>
                  Riding on the success of our ERM solution, we were motivated
                  to come up with our next offering in the PSA space. There is
                  constant growth in this space, and we believe we can make a
                  difference in solving the pertinent challenges faced by
                  professional service organizations today.
                </span>
              </p>
            </div>
            <div className="imageContainer">
              <img
                className="imageContainer_image lazy-hidden"
                src="./images/history-about-us.webp"
                alt="history-about-us"
                width="685"
                height="621"
              />
            </div>
          </div>
          <div className="feature_container">
            <div className="imageContainer">
              <img
                className="imageContainer_image lazy-hidden"
                src="./images/Our-Innovation-about-us.webp"
                alt="Our-Innovation-about-us"
                width="685"
                height="640"
              />
            </div>
            <div className="textContainer">
              <h3 className="heading">Our Innovation</h3>
              <p className="text">
                <span>
                  At PMEntire, we constantly innovate and develop futuristic
                  solutions to help our customers achieve greater operational
                  efficiency and productivity. Besides, our intuitive solutions
                  enable businesses to forecast and be proactive. Starting as
                  pioneers in resource management, today, our products are
                  several years ahead of the market.
                </span>
                <span>
                  We foster an innovative culture wherein out-of-the-box ideas
                  are encouraged and evaluated. Our range of products is highly
                  configurable to fit every customer's unique business needs.
                  Additionally, our future releases are decided after carefully
                  understanding various client-centric challenges.
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    
  );
}

export default About;
