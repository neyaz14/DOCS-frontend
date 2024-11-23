// import React from 'react';
import { motion } from "motion/react"
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
const Card = ({ item,reference }) => {
    return (
        
            <motion.div drag dragConstraints={reference} 
            whileDrag={{
                scale:1.2,
                boxShadow: "0 4px 6px rgba(51, 161, 240, 0.57)"
            }}
            whileTap={{ scale: .95 }}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
                
              }}
            className="card flex-shrink-0 relative card w-60 rounded-[20px]  h-72 bg-zinc-900/70 py-10 px-8 text-white overflow-hidden">
                <FaRegFileAlt />
                <p className="mt-5 text-sm font-medium ">{item.description}</p>

                <div className="footer rounded-y-[20px] absolute bottom-0  w-full  left-0 ">

                    <div className="flex items-center justify-between text-white px-8 py-3 mb-1">
                        <h5>{item.fileSize}</h5>
                        <span className="w-7 h-7  rounded-full bg-zinc-600 items-center flex justify-center ">
                            {item.close ? <IoIosCloseCircleOutline size="1.1em"
                                color="#fff" /> : <AiOutlineDownload size="1.1em"
                                    color="#fff"
                            />}


                        </span>


                    </div>

                    {item.tagDetails.isOpen ? (<div className="tag w-full bg-green-600 flex items-center justify-center h-10">

                        <h1 className="text-sm font-semibold ">Download Now</h1>
                    </div>)
                    : ( <div className="tag w-full bg-sky-400 flex items-center justify-center h-10">

                        <h1 className="text-sm font-semibold ">{item.tagDetails.tagTitle}</h1>
                        </div>)  }
                </div>
            </motion.div>

       
    );
};

export default Card;