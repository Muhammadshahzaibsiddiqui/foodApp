import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import "../../css/ClassicFormPage.css";
import FoodList from './requestFoodList';



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
                    <FoodList class='spinner-border text-info' progress ='Progress' url='https://www.aprettylifeinthesuburbs.com/wp-content/uploads/2018/06/Sweet-Sticky-BBQ-Turkey-Legs-7.jpg' title='Sweet & Sticky BBQ Turkey Legs' />
                    <FoodList class='spinner-border text-info' />
                    <FoodList class='spinner-border text-info'/>

                </TabContainer>}

                {value === 1 && <TabContainer padding={0}>

                    <FoodList class='spinner-border text-warning' progress ='Progress' url='https://blog.cedars-sinai.edu/wp-content/uploads/2018/07/does-grilled-food-cause-cancer.jpg' title='Grill' />
                    <FoodList class='spinner-border text-warning'/>
                    <FoodList class='spinner-border text-warning'/>

                </TabContainer>}

                {value === 2 && <TabContainer padding={0}>
               
                    <FoodList class='spinner-border text-success' progress ='Progress' url='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/grill_skills_rmq/650x350_grill_skills_rmq.jpg' title='Zacks BBQ Sauce & Basting Stock!' />
                    <FoodList class='spinner-border text-success'/>
                    <FoodList class='spinner-border text-success'/>

                </TabContainer>}

            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);