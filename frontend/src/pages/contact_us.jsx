import React from "react";
import Head from "../components/Head";
import FormButton from "../components/form_button";

const ContactUs = () => {
  return (
    <>
      <Head title="Contact Us" cssFile="contact_us.css" />
      <main>
        <FormButton/>
         {/* title head - start */}
         <div className="head-container">
          <div className="dark-background">
            <div className="top-banner">
              <i>
                <img src="src/assets/images/contact_us/phone.png" />
              </i>
              <span className="joinUs-text-style">Call us</span>
            </div>
            <h1 className="section-heading">Join us!</h1>
            <h1 className="Below-section-heading blue-text">Our Talentron</h1>
            <p className="section-paragraph">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </p>
          </div>
        </div>

        {/* title head - End */}

        {/* Email Ids - start */}

        <div className="container text-center  my-5">
          <div className="row mt-4 justify-content-center">
            {/* Box 1 */}
            <div className="col-md-3 col-lg-3 d-flex justify-content-center">
              <div className="Contact-Email-custom-card-1">
                <div className="icon-circle-1">
                  <i>
                    <img
                      src="src/assets/images/about_us_img/mdi_head-lightbulb.png"
                      alt="Head-lightbulb"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle">Job Seekers</p>
                <p className="Contact-Email-text">
                    Job@talentron.com
                </p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="col-md-3 col-lg-3 d-flex justify-content-center">
              <div className="Contact-Email-custom-card-2">
                <div className="icon-circle-2">
                  <i>
                    <img
                      src="src/assets/images/about_us_img/healthicons_i-training-class.png"
                      alt="training-class"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle">Training Request</p>
                <p className="Contact-Email-text">
                    Training@talentron.com
                </p>
              </div>
            </div>
            {/* Box 3 */}
            <div className="col-md-3 col-lg-3 d-flex justify-content-center">
              <div className="Contact-Email-custom-card-3">
                <div className="icon-circle-3">
                  <i>
                    <img
                      src="src/assets/images/about_us_img/game-icons_anvil-impact.png"
                      alt="anvil-impact"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle">Training Partner</p>
                <p className="Contact-Email-text">
                Partner@talentron.com
                </p>
              </div>
            </div>
            {/* Box 4 */}
            <div className="col-md-3 col-lg-3 d-flex justify-content-center">
              <div className="Contact-Email-custom-card-4">
                <div className="icon-circle-4">
                  <i>
                    <img
                      src="src/assets/images/about_us_img/vaadin_handshake.png"
                      alt="handshake"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle">Hiring Request</p>
                <p className="Contact-Email-text">
                    hiring@talentron.com
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Email Ids - End */}

      </main>
    </>
  );
};

export default ContactUs;