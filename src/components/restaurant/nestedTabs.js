import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import "../../css/ClassicFormPage.css";
import FoodList from './foodList';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * props.padding }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>

                <AppBar position="static" style={{ backgroundColor: 'white' }}>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Pending" />
                        <Tab label="In Progress" />
                        <Tab label="Delivered" />
                    </Tabs>
                </AppBar>

                {value === 0 && <TabContainer padding={0}>
                    {/* <img src={bg} width='100%'/> */}
                    <FoodList/>

                </TabContainer>}

                {value === 1 && <TabContainer padding={0}>
                <FoodList/>


                </TabContainer>}

                {value === 2 && <TabContainer padding={0}>

                <FoodList/>

                </TabContainer>}

            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);