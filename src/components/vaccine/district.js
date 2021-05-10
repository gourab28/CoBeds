import React, {useState} from 'react';
import Moment from 'moment';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10px',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function VaccineDistrict (props) {
  const [date, setDate] = useState(new Date());
  const NewDate = Moment(date).format('DD-MM-YYYY');
  const [faq, setFaq] = useState([]);
   let stateid = props.match.params.id;
 const classes = useStyles();
 
  const getFAQs = () => {
    axios
      .get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id='+stateid+'&date='+NewDate)
      .then((response) => {
        setFaq(response.data['centers']);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
   return(
     <div className="home">
     <Container>
      <Form.Group>
      <Form.Control
      className="mt-3"
       size="lg" 
       type="date"
       onChange={event => setDate(event.target.value)} />
      </Form.Group>
       <Button 
        className="mt-3" 
        variant="outlined" 
        color="primary"
        onClick={getFAQs}
        >
        Change Date
      </Button>
      <br/>
      <div className={classes.root}>
       <Grid container spacing={3}>
       <Grid item xs={6} sm={3}>
          <span class="badge bg-warning text-dark">{' '}</span><strong> Vaccination Date</strong>
        </Grid>
        <Grid item xs={6} sm={3}>
          <p>
          <span class="badge bg-danger">{' '}</span> <strong> Minimum Age </strong>
          </p>
        </Grid>
        <Grid item xs={6} sm={3}>
          <p>
          <span class="badge bg-success">{' '}</span> <strong>Available Vaccination</strong>
          </p>
        </Grid>
        <Grid item xs={6} sm={3}>
          <span className="badge bg-info text-light">{' '}</span> <strong> Vaccination Time Slots</strong>
        </Grid>
       </Grid>
      </div>
     <div className={classes.root}>
      <Grid container spacing={3}>
        {faq.map((faq, index) => {
          return (
          <Grid key={index} item xs={12}>
          <Paper className={classes.paper}>
           <p><span class="badge bg-warning text-dark">
           {faq.sessions[0].date}
           </span>
           </p>
          <>
          <i class="em em-hospital"></i>
          <h2 className="hos">{faq.name}</h2>
          </>
          <p><i class="em em-round_pushpin"></i> {faq.address}</p>
           <h5>
           <i class="em em-mask"> </i> <span class="badge bg-danger"> {faq.sessions[0].min_age_limit}</span>
          </h5>
          <h3>
          <span class="badge bg-light text-dark">
          {faq.sessions[0].vaccine}</span>
          </h3>
          <h4>
          <i class="em em-syringe"></i>
          <span class="badge bg-success">
          {faq.sessions[0].available_capacity}</span></h4>
          <p className="slots bg-info text-light">{faq.sessions[0].slots}</p>
         </Paper>
        </Grid>
        );
        })}
      </Grid>
    </div>
    </Container>
     </div>
     )
}