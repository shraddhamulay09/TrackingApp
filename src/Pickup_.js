import React, { Component } from 'react'
import firebase from './firebase';
import {Form} from 'react-bootstrap';
export class pickup_ extends Component {
  handleClick=()=>{
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = '+91'+document.getElementById('number').value.toString();
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      var code = prompt('Enter the otp', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log(result.user);

            document.querySelector('label').textContent +=   result.user.phoneNumber + "Number verified";
            
        }).catch(function (error) {
            console.error( error);
            
        });

    })
    .catch(function (error) {
        console.error( error);

    });
  }
  render() {
    return (
      <div>
           <label></label>
        
        <div id="recaptcha"></div>
        <Form>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" id="number" placeholder="Contact" /> 
              </Form.Group>
              </Form>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default pickup_