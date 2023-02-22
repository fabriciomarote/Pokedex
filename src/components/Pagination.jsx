import React from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import '../styles/Pagination.css'

const Pagination = ({ onLeftClick, onRightClick, page, totalPages, theme }) => {

    return (
        <div className="pagination" data-theme={theme}>
            <button className="pagination-btn" onClick={onLeftClick}>
                <IoIosArrowDropleftCircle size={30}/>
            </button>
            <div> 
            <p className='paginatio-text'>{ page } de { totalPages }</p>
            </div>
            <button className="pagination-btn" onClick={onRightClick}>
                <IoIosArrowDroprightCircle size={30}/>
            </button> 
        </div>
    );
};

export default Pagination;