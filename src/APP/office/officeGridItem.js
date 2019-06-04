import React from 'react';
import './officeGridItem.scss';

 const OfficeGridItem = (props) => {

    const office = props.officeData;

    return(
        <div className='officeGridItem'>
            
            {(office.photo) ? <img src={office.photo} alt=""/> : <p className='logoPic'>{office.name.charAt(0).toUpperCase()} </p>} 
            <h4>{office.name} </h4>
            <p>{(office.description.length > 76) ? office.description.slice(0, 76) + '...' : office.description} </p>
            
        </div>
    )
}

export default OfficeGridItem;