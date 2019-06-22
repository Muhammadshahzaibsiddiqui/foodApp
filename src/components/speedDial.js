import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import { capitalize } from '@material-ui/core/utils';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import "../css/ClassicFormPage.css";

import Home from '../pages/home';
import Registration from '../pages/registration';
import Login from '../pages/login';
import UserDashboard from '../pages/userDashboard';
import RestaurantDashboard from '../pages/restaurantDashboard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { MemoryRouter as Router } from 'react-router';


const styles = theme => ({
  root: {
    width: '100%',
  },
  controls: {
    margin: theme.spacing(3),
  },
  exampleWrapper: {
    position: 'relative',
    height: 380,
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: 'absolute',
    '&$directionUp, &$directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    '&$directionDown, &$directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(3),
    },
  },
  directionUp: {},
  directionRight: {},
  directionDown: {},
  directionLeft: {},
});
const actions = [
  { icon: <FileCopyIcon />, name: 'Home', click: '/' },
  { icon: <SaveIcon />, name: 'User', click: '/userDashboard' },
  { icon: <PrintIcon />, name: 'Restaurant', click:'/restaurantDashboard'},
  { icon: <ShareIcon />, name: 'Registration', click:'/registration'},
  { icon: <DeleteIcon />, name: 'Login', click:'/login'},
];

class SpeedDials extends React.Component {
  state = {
    direction: 'left',
    open: false,
    hidden: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleDirectionChange = (event, value) => {
    this.setState({
      direction: value,
    });
  };

  handleHiddenChange = (event, hidden) => {
    this.setState(state => ({
      hidden,
      // hidden implies !open
      open: hidden ? false : state.open,
    }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  

  render() {
    const { classes } = this.props;
    const { direction, hidden, open } = this.state;

    const speedDialClassName = clsx(
      classes.speedDial,
      classes[`direction${capitalize(direction)}`],
    );
  
    // console.log(Route.transitionTo('/'));
    return (
      <div className={classes.root}>
        <div className={classes.exampleWrapper}>
          <Router>
            <SpeedDial
              ariaLabel="SpeedDial example"
              className={speedDialClassName}
              hidden={hidden}
              icon={<SpeedDialIcon />}
              onBlur={this.handleClose}
              onClick={this.handleClick}
              onClose={this.handleClose}
              onFocus={this.handleOpen}
              onMouseEnter={this.handleOpen}
              onMouseLeave={this.handleClose}
              open={open}
              direction={direction}
            >
              {actions.map(action => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  component={Link}
                  to={action.click}
                  // tooltipOpen 
                  // onClick={()=>(){<Link to='/'></Link>}}
                  // onClick={this.handleClick}
                />
              ))}
            </SpeedDial>
            {/* <Route path='/' component={}/> */}
          </Router>

        </div>
      </div>
    );
  }
}
SpeedDials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeedDials);
