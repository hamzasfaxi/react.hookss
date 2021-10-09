import React from 'react'
import { Navbar, Container, Nav, InputGroup, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';


const Navbarr = ({name, setName , ratingSearch , setRatingSearch,}) => {
    

    
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{display :"flex" , justifyContent:"space-between" , width:"100%"}}>
                <div style={{display :"flex"}}>
    <Container>
    <Nav className="me-auto" >
        <Navbar.Brand href="#home" style={{marginRight:'270px'}}>Moovies Time </Navbar.Brand>
        <InputGroup.Text id="inputGroup-sizing-default">🔍</InputGroup.Text>
      <FormControl
      type="text" placeholder="your movie"
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value ={name} onChange={(e)=>setName(e.target.value)}
      style={{textAlign:'center'}}
    />
    </Nav>
    <InputGroup className="mb-3" style={{display:'flex', paddingLeft:'500px', width:'10000px'}}>
    
    
    <h2><StarRatingComponent value={ratingSearch}
     setRate={setRatingSearch} 
      
     style={{paddingLeft:'300px'}} /></h2>
    
  </InputGroup>
    </Container>
    </div>
  </Navbar>
        </div>
    )
}

export default Navbarr
