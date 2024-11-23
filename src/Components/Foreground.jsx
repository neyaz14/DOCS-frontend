// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useRef } from "react";

 // icon 
        // name 
        // file size 
        // close & download 
        // tag details 
const Foreground = () => {
    const data = useLoaderData();
    const ref = useRef(null);
   
    
    return (
        <div className="z-[10]">
            <div className="w-full h-full fixed top-0 left-0  z-[3] flex flex-wrap gap-24 p-20">
            
              {data.map(item=>
              <Card 
              item={item}
              key={item.id}>
              reference={ref}
              </Card>)}
            
            </div>

        </div>
    );
};

export default Foreground;