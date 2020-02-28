import React from 'react';
import { connect } from 'react-redux';
import './Students.css';

function Students() {
  return (
    <div className="STUDENT container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Filters</h5>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <img className="card-img" src="http://localhost:3001/images/default_profile_image.jpg" alt="" />
              <h5 className="card-title">Ronak Shah</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Students);
