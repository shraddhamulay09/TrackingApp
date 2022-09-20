import react from 'react';
import './css/Form.css';
import './css/pickupsection.css';
import {Container,Row, Col, Button} from 'react-bootstrap';
function PickupForm(){
    return(
        <>

        <center><h4 style={{marginBottom:'20px',marginTop:'20px'}}>Request for Pick Up</h4></center>
     
        <div className='form_'>
        
        <form>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="name"/>
            
          </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="contact" className="form-label">Contact</label>
          <input type="text" inputmode="numeric" className="form-control" id="contact"/>
        </div>
        <div className="mb-3">
            <label for="address" className="form-label">Pick Up Address</label>
            <input type="text" className="form-control" id="address" aria-describedby="address"/> 
        </div>
        <div className="mb-3">
            <label for="date" className="form-label">Pick Up Date</label>
            <input type="date" className="form-control" id="date" aria-describedby="date"/> 
        </div>
        <div className="mb-3">
            <label for="weight" className="form-label">Approximate Weight</label>
            <input type="number" className="form-control" id="weight" aria-describedby="weight"/> 
        </div>
        <div className="mb-3">
            <label for="description" className="form-label">Description of Goods</label>
            <input type="description" className="form-control" id="description" aria-describedby="description"/> 
        </div>
        <div className="mb-3">
            <label for="dest_address" className="form-label">Destination Address</label>
            <input type="text" className="form-control" id="dest_address" aria-describedby="dest_address"/> 
        </div>
        
        <center>
        <button type="submit" className="btn btn-primary">Submit</button>
    </center>
      </form>
      </div>
      </>
    )
}

export default PickupForm;