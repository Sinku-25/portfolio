import React from 'react';

export const Portfolio = () => {
  return (
    <>
      <div className="portfolio p-5 text-danger bg-light">
        <div className="container text-center">
          <h2 className="p-5">Portfolio</h2>
          <div className="row row-cols-1 row-cols-md-3 g-5">
            <div className="col">
              <div className="card h-100 shadow">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="fs-5">Project 1</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="fs-5">Project 2</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="fs-5">Project 3</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="fs-5">Project 4</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="fs-5">Project 5</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="fs-5">Project 6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
