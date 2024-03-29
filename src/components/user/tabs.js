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
import FoodList from './foodList';
import Accordion from '../accordion';
import { userFoodList } from '../../config/firebase'




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
        list:[]
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentDidMount() {
        this.show();
    }

    async show() {
        try {
            const result = await userFoodList();
            console.log("Result", result);
            // console.log(result1);
            this.setState({
                list: result
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { classes } = this.props;
        const { value,list } = this.state;

        return (
            <div className={classes.root}>

                <AppBar position="static" style={{ backgroundColor: 'white' }}>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Restaurants" />
                        <Tab label="My Requests" />
                    </Tabs>
                </AppBar>

                {value === 0 && <TabContainer padding={3}>
                    <div id='accordion'>
                        <Accordion />
                    </div>
                    <Search />
                    <Chips />
                    <div>
                        {
                            list.map((item) => {
                                return (<FoodList food_id={item.food_id._key.path.segments[6]} restaurant_id={item.restaurant_id} foodRef={item} price={item.price} title={item.name} url={item.img_URL} description={item.description} />)
                            })
                        }
                    </div>
                    <FoodList url='https://www.aprettylifeinthesuburbs.com/wp-content/uploads/2018/06/Sweet-Sticky-BBQ-Turkey-Legs-7.jpg' title='Sweet & Sticky BBQ Turkey Legs' />
                    <FoodList url='https://blog.cedars-sinai.edu/wp-content/uploads/2018/07/does-grilled-food-cause-cancer.jpg' title='Grill' />
                    <FoodList url='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/grill_skills_rmq/650x350_grill_skills_rmq.jpg' title='Zacks BBQ Sauce & Basting Stock!' />



                </TabContainer>}

                {value === 1 && <TabContainer padding={3}>

                    <NestedTabs />

                </TabContainer>}



            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);