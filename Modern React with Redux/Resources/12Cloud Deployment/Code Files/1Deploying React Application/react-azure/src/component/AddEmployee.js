import React from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

// Form
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';

//Dialog 
import Dialog from "./Dialog.js";

const styles = theme => ({
  card: {
    fontSize : '125%',
    maxWidth: 500,
    margin: 'auto',
    marginTop: '15px',
    position: 'realtive',
    padding: '15px'
  },
  actions: {
    display: 'flex',
  },
  cardHeader: {
    backgroundColor: "rgb(144, 74, 209)",
    borderRadius: '3px',
  },
  formControl: {
    margin: theme.spacing(1),
    marginLeft :'50px',
    width: '350px'
  }
});

class AddEmployee extends React.Component {

  state = {
    form:{
      email: '',
      empNo: '',
      age : ''
    },
    formError:{
      email: '',
      empNo: '',
      age : ''
    },
    formValid:{
      email: false,
      empNo: false,
      age : false,
      buttonActive :false
    },
    errorMessage : '',
    successMessage :''
  };

  handleChange = (e) => {
    const form = this.state.form
    const name = e.target.name;
    const value = e.target.value;
    form[name] = value;
    this.validateField(name, value);
  }

  validateField = (fieldName,value)=>{
    let message;
    let formError = this.state.formError;
    let formValid = this.state.formValid;

    switch (fieldName) {
      case 'email':
          let emailRegex = new RegExp(/^[a-z]*@infy\.com$/);
          value === "" ? message="You must enter a value":  emailRegex.test(value)?message="":message="Not a valid email"
        break;

        case 'empNo':
          let empNoRegex = new RegExp(/^123[0-9]{3}$/);
          value === "" ? message="You must enter a value":  empNoRegex.test(value)?message="":message="Not a valid employee number"
        break;

      case "age": 
          value === "" ? message="You must enter a value": value < 21   ? message="Minimum age is 21" : value > 60   ? message="Maximum age is 60" : message=""
        break

      default:
        break;
    }
    
    //Form err message set
    formError[fieldName] = message;
    
    //Form Valid set
    message === "" ? formValid[fieldName] = true : formValid[fieldName] = false;
    formValid.buttonActive = formValid.email && formValid.empNo && formValid.age
    this.setState({})
  }

  handleSubmit = ( e )=> {
      e.preventDefault()
      let url = "" //provide the url of web service running in azure
      axios.post(url, this.state.form).then( (response) => {
        this.setState({successMessage : <Dialog id={this.state.form.empNo}/>})
      }).catch( error => {
        if (error.response) {
          this.setState({ errorMessage: error.response.data.message, });
        } else {
          this.setState({ errorMessage: error.message,  successMessage : ''});
        }
      });
  }

  render() {
    const { classes } = this.props;
    const {form, formError, formValid} = this.state
    return (
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <img src={require('../assets/emp.png')} alt='icon' style={{ borderRadius: '25px' }} height='40' width='43' />
          }
          title={<span style={{ color: 'white', fontSize: '150%' }}>Add Employee</span>}
          subheader={<span style={{ color: 'white', fontSize: '90%' }}>New employee details</span>}
        />

        <CardContent>
          <form  onSubmit={this.handleSubmit}>
            {/* Email */}
            <FormControl className={classes.formControl} error={!!formError.email}>
              <InputLabel htmlFor="component-error">Email id</InputLabel>
              <Input
                name = 'email'
                id="component-error"
                value={form.email}
                onChange={this.handleChange}
                aria-describedby="component-error-text"
              />
              {!formValid.email ? <FormHelperText id="component-error-text">{formError.email}</FormHelperText> : <FormHelperText >
              Hint: abc@infy.com</FormHelperText>}
            </FormControl>
      
            {/* EmpNo */}
            <FormControl className={classes.formControl} error={!!formError.empNo}>
              <InputLabel htmlFor="component-error">Employee number</InputLabel>
              <Input
                name = 'empNo'
                type= 'number'
                id="component-error"
                value={form.empNo}
                onChange={this.handleChange}
                aria-describedby="component-error-text"
              />
              {!formValid.empNo ? <FormHelperText id="component-error-text">{formError.empNo}</FormHelperText> : <FormHelperText >
              Hint: 123XXX</FormHelperText>}
            </FormControl>

            {/* Age */}
            <FormControl className={classes.formControl} error={!!formError.age}>
              <InputLabel htmlFor="component-error">Age</InputLabel>
              <Input
                name = 'age'
                type = 'number'
                id="component-error"
                value={form.age}
                onChange={this.handleChange}
                aria-describedby="component-error-text"
              />
              {!formValid.age ? <FormHelperText id="component-error-text">{formError.age}</FormHelperText> : <FormHelperText >
              Hint: 21-60</FormHelperText>}
            </FormControl>

            <div className='text-center'>
            <Button disabled={!formValid.buttonActive} 
              style={{margin : 'auto', position : 'relative'}}
            type='submit' variant="contained" 
            color='primary'>Add Employee</Button>
            </div>            
          </form>
          {this.state.successMessage}
          <span className='text-danger'>{this.state.errorMessage}</span>
        </CardContent>
      </Card>
    );
  }
}

AddEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddEmployee);

