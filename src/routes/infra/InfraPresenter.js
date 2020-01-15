import React from 'react'

const InfraPresenter = () => {
    return (
        <div style={GridWrapper}>infra</div>
    )
}

const GridWrapper ={
    display:'grid',
    gridGap:'10px',
    marginTop:'1em',
    marginLeft:'6em',
    marginRigth:'6em',
    gridTemplateColumns:'repeat(12,1fr)',
    gridAutoRows:'minmax(25px,auto)',
}

export default InfraPresenter