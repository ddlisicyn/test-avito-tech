import React from 'react';
import spinner from '../../img/spinner.svg';

export function Loader({visibility}) {
    return (
        <img
         className={visibility ? 'hide' : 'main__loader'}
         src={spinner} 
         alt="loader-spinner"
        />
    )
}