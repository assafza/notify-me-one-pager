import React, { Component } from 'react';
import logo from './logoNEW.png';
import mati from './mati.jpg';
import assaf from './assaf.jpg';
import guy from './guy.jpg';
import tal from './tal.jpg';
import {Jumbotron} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Grid} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import './App.css';

class App extends Component {

  click =()=>{
    window.open('https://chrome.google.com/webstore/detail/zendesk-notifications-by/akndeknkfbncfoalobhohpegmpffibii?utm_source=gmail')
  }

  render() {
    return (
      <div className="App">

        <Jumbotron className="jumbotronHead">
          <img src={logo} className="App-logo" alt="logo" />

    <h1>Advanced notifications for Zendesk</h1>
    <p>
Get notified of any tickets you receive on Zendesk in real-time without the hassle of constently refreshing</p>
    <p><Button bsStyle="primary" onClick={this.click}>DOWNLOAD ON CHROME WEB STORE</Button></p>
  </Jumbotron>
        <p className="App-intro">
          MADE BY :

        </p>
        <Grid>
    <Row>
      <Col xs={4} ></Col>
      <Col xs={1} >
        <Image className="profile" src={mati} circle  />
      </Col>
      <Col xs={1} >
        <Image className="profile" src={assaf} circle  />
      </Col>
      <Col xs={1}>
        <Image className="profile" src={guy} circle />
      </Col>
      <Col xs={1}>
        <Image className="profile" src={tal} circle />
      </Col>
      <Col xs={4} ></Col>

    </Row>
  </Grid>
      </div>
    );
  }
}

export default App;
