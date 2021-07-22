import React from 'react';
import Navbar from '../features/navbar/Navbar';
import InfiniteScroll from '../features/gifDisplay/InfiniteScroll';
import useStyles from './styles/HomeStyles';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeRoot}>
      <div className={classes.navbarArea}>
        <Navbar />
      </div>
      <div className={classes.gifArea}>
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default Home;
