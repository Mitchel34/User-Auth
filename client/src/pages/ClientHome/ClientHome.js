import React, { Component } from 'react';
import '../../pages/ClientHome/style.css';

class ClientHome extends Component {
  state = {}
  render() {
    return (
      <div className="welcome container">
        <div className="row">
        <br />
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
        <h1 className=" welcomeText display-3 text-white font-weight-bold">Welcome Back, dude! </h1>
        </div>
        <div className="col-sm-2"> </div>
        </div>
        <br />
        <br />
        <div className="row">
        <div className="col">
        <div className="card shadow-lg p-3 mb-5 rounded">
          <div className="card-body">
            <h1 className="card-title"><i class="fas fa-user-edit"></i></h1>
            <h5 className="card-subtitle mb-2 text-muted">Account Info</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        <div className="col">
        <div className="card shadow-sm p-3 mb-5 rounded">
          <div className="card-body">
            <h1 className="card-title"><i class="fas fa-calendar-plus"></i></h1>
            <h5 className="card-subtitle mb-2 text-muted">Scheduling</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        <div className="col">
        <div className="card shadow-sm p-3 mb-5 rounded view overlay">
          <div className="card-body">
            <h1 className="card-title"><i class="fas fa-calendar-check"></i></h1>
            <h5 className="card-subtitle mb-2 text-muted">Completed</h5><div class="mask flex-center rgba-green-strong">
        <p class="white-text">Strong overlay</p>
    </div>
          </div>
        </div>
        </div>
        <div className="col">
        <div className="card shadow-sm p-3 mb-5 rounded">
          <div className="card-body">
            <h1 className="card-title"><i class="fas fa-calendar-day"></i></h1>
            <h5 className="card-subtitle mb-2 text-muted">Upcoming</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ClientHome;
