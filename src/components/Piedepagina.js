import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">

          <div className="ml-auto col-lg-4 col-md-5">
            <p className="copyright-text">Copyright &copy; 2024 Umsa Gymso Fitness Collpani.</p>
          </div>

          <div className="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12">
            <p className="mr-4">
              <i className="fa fa-envelope-o mr-1"></i>
              <a href="#">web2@empresa.com</a>
            </p>

            <p><i className="fa fa-phone mr-1"></i>71915374</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;