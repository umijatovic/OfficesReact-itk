import React from 'react';

 const OfficeGridItem = (props) => {

    return(
        <div className='gridItem'>
            <p>{props.officeData.name} </p>
            <p>{props.officeData.description} </p>
        </div>
    )
}

export default OfficeGridItem;