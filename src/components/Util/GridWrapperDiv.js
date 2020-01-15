import React from 'react';

export const gridDiv = () => {
    const GridWrapper ={
        display:'grid',
        gridGap:'10px',
        marginTop:'1em',
        marginLeft:'6em',
        marginRigth:'6em',
        gridTemplateColumns:'repeat(12,1fr)',
        gridAutoRows:'minmax(25px,auto)',
    }
    return(
        <div style={GridWrapper}/>   
    )
}