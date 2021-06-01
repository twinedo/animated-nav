import React from 'react';
import '../styles/home.css';

const Home = ({ show }) => {
    return (
        <div className={show ? 'container-home active' : 'container-home'}>
            Home
        </div>
    );
};

export default Home;
