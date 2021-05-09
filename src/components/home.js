import React from 'react';
import {Form, Container} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import VaccineDistrict from './vaccine/home';

export default function Home(props) {
  const SearchV = () => alert("System Disabled");
  
  return(
    <div className="home">
    <Container>
    <div className="vaccine">
       <h3><i class="em em-syringe"></i>  Nearby Vaccine Center</h3>
    </div>
    <Form.Group>
      <Form.Control size="lg" type="text" placeholder="Enter Pin Code" />
      </Form.Group>
      <Button 
        className="mt-3" 
        variant="outlined" 
        color="primary"
        onClick={SearchV}
        >
        Search
      </Button>
     <VaccineDistrict />
     </Container>
    </div>
   )
}