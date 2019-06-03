import React from 'react';

 const OfficeListItem = (props) => {

    return(
        <div className='listItem'>
            {(props.officeData.photo) ?  <img src={props.officeData.photo} alt=""/> : <p className='logoPic'>{props.officeData.name.charAt(0).toUpperCase()} </p>} 
            
            <div>
                <p>{(props.officeData.name.length > 40) ? props.officeData.name.slice(0, 70) + '...' : props.officeData.name} </p>
                <p>{props.officeData.description}</p>
            </div>
        </div>
    )
}

export default OfficeListItem;