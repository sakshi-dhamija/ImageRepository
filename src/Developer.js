import React from "react";

function Developer() {
  return (
    <div className="container-fluid bg-success services  pb-5">
      <div className="row pb-5 text-center">
        <div className=" col-lg-12 d-flex flex-column justify-content-center align-items-center">
          <a id="team">
            <h1 className="pt-3">Meet Developers Behind The Idea</h1>
          </a>
        </div>
      </div>
      <div className="row  d-flex justify-content-center align-items-center text-center">
        <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5 py-5">
          <span className="p-4">
            <i className="fas fa-tshirt"></i>
          </span>
          <img
            className="card__image"
            src="https://us.123rf.com/450wm/lembergvector/lembergvector1512/lembergvector151200067/49923679-stock-vector-man-software-engineer-concept-with-design-optimization-responsive-and-developer-solutions.jpg?ver=6"
          />
          <h1 className="p-4">Ashok Arora</h1>
          <p className="p-4">Designation</p>
        </div>
        <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5 py-5">
          <span className="p-4">
            <i class="fas fa-tshirt"></i>
          </span>
          <img
            className="card__image"
            src="https://us.123rf.com/450wm/lembergvector/lembergvector1512/lembergvector151200067/49923679-stock-vector-man-software-engineer-concept-with-design-optimization-responsive-and-developer-solutions.jpg?ver=6"
          />
          <h1 className="p-4">Sakshi Dhamija</h1>
          <p className="p-4">designation</p>
        </div>
        <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5 py-5">
          <span className="p-4">
            <i class="fas fa-tshirt"></i>
          </span>
          <img
            className="card__image"
            src="https://us.123rf.com/450wm/lembergvector/lembergvector1512/lembergvector151200067/49923679-stock-vector-man-software-engineer-concept-with-design-optimization-responsive-and-developer-solutions.jpg?ver=6"
          />
          <h1 className="p-4">Raunak kumar</h1>
          <p className="p-4">designation</p>
        </div>
      </div>
    </div>
  );
}

export default Developer;
