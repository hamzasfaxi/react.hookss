import React ,{useState} from "react";
import {Modal, Button , FormControl} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';




 



function AddModal(props) {

 const [name, setName] = useState("")
 const [image, setImage] = useState("")
 const [rate, setRate] = useState(0)
 
 function onStarClick(nextValue, prevValue, name) {
    setRate( nextValue);
  }
 
  return (
    <Modal
      {...props}
      {...name}
      {...image}
      {...rate}
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Add your movie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <h3>Name</h3>
       <FormControl
      type="text" placeholder="Name of your movie"
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      className="add1"
      value= {name}
      onChange = {(e)=>setName(e.target.value)}
      
      
      
    />
     <h3>URL</h3>
    <FormControl className="add1"
      type="text" placeholder="URL of the Screen Shot"
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value= {image}
         onChange = {(e)=>setImage(e.target.value)}
       
    />
     <StarRatingComponent
      
       value={rate}
          onStarClick={onStarClick}

     />
    
    
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.Save}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal

