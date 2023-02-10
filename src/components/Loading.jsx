import React from 'react';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Loading.css'

const Loading = () => {
    return (
        <>
            <div className="loading">
                <Spinner className='spinner'/>
            </div>
        </>
    );

}

export default Loading;