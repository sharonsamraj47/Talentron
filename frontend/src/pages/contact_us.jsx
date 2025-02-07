import React from "react";
import Head from "../components/Head";
import FormButton from "../components/form_button";

const ContactUs = () => {
  const desktopGoogleMapsLink =
  "https://maps.app.goo.gl/9gehWzGgcoHsXXWq5";
const mobileGoogleMapsLink = "geo:13.012370792090744, 80.20324905973378?q=Tamarai+Tech+Park";

// Check if the user is on a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const handleMapClick = () => {
  const linkToOpen = isMobile ? mobileGoogleMapsLink : desktopGoogleMapsLink;
  window.open(linkToOpen, "_blank");
};
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
<div className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center">
  <div className="Contact-Email-custom-card-1 d-flex flex-column">
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
    <div className="d-flex align-items-center justify-content-between w-100">
      <p className="Contact-Email-text">Job@talentron.com</p>
      <i className="arrow-icon">&#8594;</i>
    </div>
  </div>
</div>

            {/* Box 2 */}
            <div className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center">
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
                <div className="d-flex align-items-center justify-content-between w-100">
      <p className="Contact-Email-text">Training@talentron.com</p>
      <i className="arrow-icon">&#8594;</i>
    </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center">
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
                <div className="d-flex align-items-center justify-content-between w-100">
      <p className="Contact-Email-text">Partner@talentron.com</p>
      <i className="arrow-icon">&#8594;</i>
    </div>
              </div>
            </div>
            {/* Box 4 */}
            <div className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center">
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
                <div className="d-flex align-items-center justify-content-between w-100">
      <p className="Contact-Email-text">hiring@talentron.com</p>
      <i className="arrow-icon">&#8594;</i>
    </div>
              </div>
            </div>
          </div>
        </div>


        {/* Email Ids - End */}
        {/* Our location - start */}

        <div className="container text-center my-5">
          <h2 className="headline">Our Location</h2>
          <p className="subtitle">Connecting Hub</p>
          <div
        className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
        onClick={handleMapClick}
        style={{ cursor: "pointer" }}
      >
        <iframe
          title="Ta"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.369057669881!2d80.20067107484209!3d13.01215418730697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526738baf4e665%3A0x379142ef5437823b!2sTamarai%20Tech%20Park!5e0!3m2!1sen!2sin!4v1738916991529!5m2!1sen!2sin"
          width="100%"
          height="321px"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
        ></iframe>
      </div>
        </div>

        {/* Our location - end */}

      </main>
    </>
  );
};

export default ContactUs;