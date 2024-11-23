// import React from 'react';

import Background from "./Background";
import Foreground from "./Foreground";

const Home = () => {
    return (
        <div className="relative w-full  bg-zinc-800">
         <Background></Background>
            <Foreground></Foreground>
        </div>
    );
};

export default Home;