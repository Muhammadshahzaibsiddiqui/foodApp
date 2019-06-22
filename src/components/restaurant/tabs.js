import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import "../../css/ClassicFormPage.css";
import NestedTabs from './nestedTabs';
import Search from './searchField';
import Chips from './chips';
import RestaurantsDeal from './restaurantsDeals';
import FoodList from './foodList';
import ChatPage from './chat';

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
const TypoHead = () => (
    <>
        <blockquote className="blockquote bq-primary">
            <strong className="bq-title">BBQ Restaurant</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum illo!
              Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!
              Sit, rem, in?
      </p>
        </blockquote>
    </>
);

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
                        <Tab label="Restaurants" />
                        <Tab label="My Requests" />
                        <Tab label="Food Gallery" />
                    </Tabs>
                </AppBar>

                {value === 0 && <TabContainer padding={0}>


                    <div id='coverPhoto'>
                        <img style={{ width: '100%' }} src='https://d1qp59yxlq7zhd.cloudfront.net/media/late-night-restaurants-bangalore-cover.jpg' />
                    </div>
                    <div style={{ paddingLeft: '3%', paddingTop: '1%' }}> {TypoHead()}</div>

                    <div style={{ padding: '3%' }}>
                        <Search />
                        <Chips />
                        <FoodList url='https://www.aprettylifeinthesuburbs.com/wp-content/uploads/2018/06/Sweet-Sticky-BBQ-Turkey-Legs-7.jpg' title='Sweet & Sticky BBQ Turkey Legs' />
                        <FoodList url='https://blog.cedars-sinai.edu/wp-content/uploads/2018/07/does-grilled-food-cause-cancer.jpg' title='Grill' />
                        <FoodList url='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/grill_skills_rmq/650x350_grill_skills_rmq.jpg' title='Zacks BBQ Sauce & Basting Stock!' />

                    </div>

                </TabContainer>}

                {value === 1 && <TabContainer padding={3}>

                    <NestedTabs />

                </TabContainer>}

                {value === 2 && <TabContainer padding={3}>

                    <RestaurantsDeal />

                </TabContainer>}

            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);