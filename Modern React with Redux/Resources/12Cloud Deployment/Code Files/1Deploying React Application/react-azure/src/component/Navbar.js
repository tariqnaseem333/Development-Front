import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appBar: {
        color: 'white'
    },
    list: {
        width: 250,
        textDecoration : 'none'
    },
    fullList: {
        width: 'auto',
    },
    navLinks: {
        textDecoration: 'none',
        backgroundColor: 'white',
        color : 'black',
        '&:hover' : {
            color : 'black',
            textDecoration: 'none',
            backgroundColor: 'white'        
        }
    }
};

class Navbar extends Component {

    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>
                    <Link to={'/add'} className={classes.navLinks}>
                        <ListItem button >
                            <ListItemIcon>
                                <i className="material-icons">
                                    dashboard</i>
                            </ListItemIcon>
                            <ListItemText primary={'Add Employee'} />
                        </ListItem>
                    </Link>
                    <Link to={'/view'} className={classes.navLinks}>
                        <ListItem button >
                            <ListItemIcon><i className="material-icons">
                                supervised_user_circle
                                </i>
                                </ListItemIcon>
                            <ListItemText primary={'View Employee'} />
                        </ListItem>
                    </Link>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar className={classes.appBar} >
                        <IconButton className={classes.menuButton} color="inherit"
                            onClick={this.toggleDrawer('left', true)} >
                            <MenuIcon />
                        </IconButton>

                        {/* Side Bar */}
                        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                            <div tabIndex={0} role="button"
                                onClick={this.toggleDrawer('left', false)}
                                onKeyDown={this.toggleDrawer('left', false)}>
                                <AppBar position='static'>
                                    <Toolbar className={classes.appBar}></Toolbar>
                                </AppBar>
                                {sideList}
                            </div>
                        </Drawer>

                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            React Cloud
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);