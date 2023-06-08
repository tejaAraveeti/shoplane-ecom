import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"
function Stars({ stars, reviews }) {
    const ratingStar = Array.from({ length: 5 }, (ele, i) => {
        let numbers = i + 0.5;
        return (
            <span key={i}>
                {
                    stars >= i + 1
                        ? (<FaStar className='icon' />)
                        : stars >= numbers ? (<FaStarHalfAlt className='icon' />)
                            : (<AiOutlineStar />)
                }
            </span>
        )


    })

    return (
        <div className="wrapper">
            <div className="icon-style">
                {ratingStar}
            </div>

        </div>

    );

};


export default Stars