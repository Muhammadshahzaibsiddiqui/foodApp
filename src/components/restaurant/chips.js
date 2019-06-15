import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Chips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  const params = {
    slidesPerView:7,
    spaceBetween: 30,
    pagination: {
      // el: '.swiper-pagination',
      clickable: true,
    }
  };
  return (
    <div className={classes.root}>
      <Swiper {...params}>
        <div><Chip label="Basic Chip" className={classes.chip} color="secondary" /></div>
        <div><Chip label="Basic Chip" className={classes.chip} color="secondary" /></div>
        <div><Chip label="Basic Chip" className={classes.chip} color="secondary" /></div>
        <div><Chip label="Basic Chip" className={classes.chip} color="secondary" /></div>
        <div><Chip label="Basic Chip" className={classes.chip} color="secondary" /></div>
        <div><Chip label="Basic Chip" className={classes.chip} color="secondary" /></div>
        <div><Chip label="Basic Chip" className={classes.chip} color="secondary" /></div>
        <div><Chip label="Basic Chip" className={classes.chip} color="secondary" /></div>
        <div><Chip label="Basic Chip" className={classes.chip} color="secondary" /></div>
      </Swiper>
    </div>
  );
}
