import React from 'react';
import Services from '../../Service/Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Support></Support>
        </div>
    );
};

export default Home;