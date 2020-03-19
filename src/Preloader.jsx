import React from 'react';
import loader from '../src/img/Spinner.svg';

let Preloader = () => {
    return (
        <div>
            <img src={loader} />
        </div>
    );
}

export default Preloader;