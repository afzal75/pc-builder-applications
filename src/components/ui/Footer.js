import React from "react";

const Footer = () => {
  return (
    <div className="bg-violet-950 text-white py-7 px-2">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div>
          <p>Company</p>
          <p>Our goal</p>
          <p>What's next</p>
          <p>Success</p>
        </div>
        <div>
          <p>EMI Terms</p>
          <p>Privacy Policy</p>
          <p>Star Point Policy</p>
          <p>Brands</p>
        </div>
        <div>
          <p>About Us</p>
          <p>Terms and Conditions</p>
          <p>Blog</p>
          <p>Online Service Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;