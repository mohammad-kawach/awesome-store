// import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vestibulum arcu at ex tincidunt, ut ullamcorper sem tincidunt.
              Mauris nec nunc sed metus malesuada lacinia a eget quam.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <h4>Contact Us</h4>
            <p>
              Email: info@example.com
              <br />
              Phone: +1 123 456 789
            </p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
