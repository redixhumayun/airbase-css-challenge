import React, { Component } from 'react';
import GridContainer from './GridContainer'
import ApproverLayout from './ApproverLayout'
import './App.css';

const data = require('./request.json')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="div-row icon">
          <div style={{ width: '22.47px', height: '23.83px' }}>
            <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt={''} />
          </div>
          <div style={{ width: '65px', height: '16px', marginLeft: '8.35px' }}>
            <img src={process.env.PUBLIC_URL + '/assets/airbaselogo.svg'} alt={''} />
          </div>
        </div>
        <div className="div-row security">
          <div><img src={process.env.PUBLIC_URL + '/assets/lockicon.svg'} alt={''} /></div>
          <p>Security Message</p>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
        </div>
        <div className="data-container">
          <div className="div-row service-provider-container">
            <div style={{ width: '32px', height: '32px' }}>
              <img src={data.service.logo} alt={''} />
            </div>
            <p>{data.description}</p>
          </div>
          <div className="div-row grid-approval-container">
            <div className="grid-container-btn-parent">
              <GridContainer data={data} />
              <div className="btn-container">
                <button className="btn btn-green">Approve</button>
                <button className="btn btn-red">Deny</button>
              </div>
            </div>
            <div className="approver-layout-parent">
              <div className="approver-layout">
                <ApproverLayout data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;