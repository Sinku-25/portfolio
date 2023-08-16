import React from 'react';

export const Footer = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="col-md-4 text-white">
            <p className="fs-4">Lorem ipsum dolor sit.</p>
            <p><i className="fas fa-envelope fa-lg text-white p-1"></i>ahmedyoussef@gmail.com</p>
            <p><i className="fab fa-whatsapp fa-lg text-success"></i>+200121333658</p>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <button className="btn btn-outline-light">Sign up</button>
          </div>
          <div className="col-md-4 text-center">
            <div className="text-white mb-2">All rights are reserved</div>
            <div>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-lg text-primary mx-2"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-lg text-primary mx-2"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in fa-lg text-primary mx-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
