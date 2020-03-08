import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';

function Dashboard(props) {
  return (
    <div className="DASHBOARD_C container">
      <div className="card">
        <div className="card-header">
          <div className="d-inline-block">
            <h5>Title</h5>
            <span>Company</span>
          </div>
          <button type="button" className="btn btn-primary float-right">View Applications</button>
        </div>
        <div className="card-body">
          <div className="row">
            <span className="col">&#128188; Full-Time</span>
            <span className="col">&#128204; San Jose</span>
            <span className="col">$40 per hour</span>
            <span className="col">&#128337; Posted on Nov 3</span>
            <span className="col">&#128337; Deadline on Nov 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Dashboard);
