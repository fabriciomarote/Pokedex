import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TbError404 } from "react-icons/tb";
import '../styles/InvalidRoute.css'

 const InvalidRoute = ( props ) => {

    const { theme } = props;
    const navigate = useNavigate();

    return (
        <div className='invalid' data-theme={theme}>
            <div className='card-invalid'>
                <TbError404 className='error404'/>
                <div className='card-text'>
                    <h3>PÁGINA NO ENCONTRADA</h3>
                    <h6>No se ha podido encontrar la página solicitada</h6>
                </div>
            </div>
        </div>
    );
};

export default InvalidRoute; 