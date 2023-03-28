import React from 'react';
import axios from "axios";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

//Table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  table: {
    width: '100%',
  },
  paper: {
    maxWidth: '50%',
    margin: 'auto',
    position: 'realtive',
    marginTop: '20px',
  }
});


class ViewEmployee extends React.Component {
  state = {
    employeeData: '',
    error: ''
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  fetchEmployees = () => {
    let url = "" //provide the url of web service running in azure
    axios.get(url).then(response => {
      this.setState({ employeeData: response.data, error: '' })
    }).catch(error => {
      console.log(error)
    }
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.employeeData && this.state.employeeData.length > 0 ? <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Email Id</TableCell>
                <TableCell align="left">Employee Number</TableCell>
                <TableCell align="left">Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.employeeData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="left" style={{ fontSize: '14px' }}>{row.email}</TableCell>
                  <TableCell align="left" style={{ fontSize: '14px' }}>{row.empNo}</TableCell>
                  <TableCell align="left" style={{ fontSize: '14px' }}>{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper> : <div className='offset-5' style={{ marginTop: '25px' }}>Please wait loading data ...</div>}
      </React.Fragment>
    )
  }
}

ViewEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewEmployee);