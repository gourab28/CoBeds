import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
function FAQ(props) {
  const [district, setDistrict] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getDistricts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getDistricts = () => {
    axios
      .get('https://cdn-api.co-vin.in/api/v2/admin/location/districts/36')
      .then((response) => {
        setDistrict(response.data['districts']);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (!isLoaded) {
    return <div className="home">
           <div class="spinner-grow text-info" role="status">
            <span class="sr-only"></span>
            </div>
           </div>;
  } else {
  return (
    <div className="mt-3">
    <Table striped bordered hover>
    <thead>
    <tr>
      <th>District</th>
      <th>Availability</th>
    </tr>
    </thead>
    <tbody>
      {district.map((item, index) => {
        return (
          <tr key={index}>
            <td>
            <h4>
               <span class="">{item.district_name}</span>
               </h4>
            </td>
            <td>
             <h3>
               <span class="badge bg-success">Available</span>
               </h3>
            </td>
          </tr>
        );
      })}
      </tbody>
     </Table>
    </div>
  );
  }
}

export default FAQ;