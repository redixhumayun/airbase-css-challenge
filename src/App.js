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
          <div style={{ width: '25px', height: '25px' }}><img src={process.env.PUBLIC_URL + '/assets/logo.svg'} /></div>
          <div style={{ width: '75px', marginLeft: '10px' }}>
            <img src={process.env.PUBLIC_URL + '/assets/airbaselogo.svg'} style={{width: '100%', height: 'auto'}} />
          </div>
        </div>
        <div className="div-row icon security">
          <div><img src={process.env.PUBLIC_URL + '/assets/lockicon.svg'} /></div>
          <p>Security Message</p>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
        </div>
        <div className="data-container">
          <div className="service-provider-container-wrapper">
            <div className="div-row service-provider-container">
              <div style={{ width: '30px', height: '30px' }}>
                <img src={data.service.logo} style={{ width: '100%', height: 'auto' }} />
              </div>
              <p>{data.description}</p>
            </div>
          </div>
          <div className="div-row">
            <div className="grid-container-btn-parent">
              <GridContainer data={data} />
              <div className="btn-container">
                <button className="btn btn-green">Approve</button>
                <button className="btn btn-red">Deny</button>
              </div>
            </div>
            <div className="approver-layout-parent">
              <ApproverLayout data={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;