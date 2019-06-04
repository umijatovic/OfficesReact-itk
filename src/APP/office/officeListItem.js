import React from 'react';
import './officeListItem.scss';

 const OfficeListItem = (props) => {

    const office = props.officeData;

    return(

        <div className='officeListItem'>

            {(office.photo) ?  <img src={office.photo} alt=""/> : <p className='logoPic'>{office.name.charAt(0).toUpperCase()} </p>} 
            
            <div>

                <p>{office.name}</p>
                <p>{(office.description.length > 76) ? office.description.slice(0, 76) + '...' : office.description} </p>

            </div>
            
        </div>
    )
}

export default OfficeListItem;