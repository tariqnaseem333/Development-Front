import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

class AlertDialog extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle style={{width : '500px', height : '100px'}} id="alert-dialog-title" >Added {this.props.id} to  database</DialogTitle>

          <DialogActions className='mr-auto'>
            <Button onClick={this.handleClose} >Close</Button>
            
            <Link to='/view' style={{ textDecoration : 'none'}}>
                <Button onClick={this.handleClose}  
                type='submit' >Proceed to View</Button>
            </Link>

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;