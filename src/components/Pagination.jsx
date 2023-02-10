import React from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import '../styles/Pagination.css'

const Pagination = ( props ) => {

    const { onLeftClick, onRightClick, page, totalPages, theme } = props;

    return (
        <div className="pagination" data-theme={theme}>
            <button className="pagination-btn" onClick={onLeftClick}>
                <IoIosArrowDropleftCircle size={50}/>
            </button>
            <div> 
            <p className='paginatio-text'>{ page } de { totalPages }</p>
            </div>
            <button className="pagination-btn" onClick={onRightClick}>
                <IoIosArrowDroprightCircle size={50}/>
            </button> 
        </div>
    );
};

export default Pagination;