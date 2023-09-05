import React from 'react';
import Shop from '../Shop/Shop';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';


const Home = () => {
    return (
        <div className='bg-[#EEEEEE]'>
            <Header></Header>
            <Shop></Shop>
            <Footer></Footer>
        </div>
    );
};

export default Home;