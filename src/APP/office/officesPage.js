import React from 'react';
import OfficeListItem from './officeListItem';
import OfficeGridItem from './officeGridItem';
import {Link}  from 'react-router-dom'

const OfficesPage = (props) =>{

      
  
    
    

    
        return(
            <div className='officesDiv'>
                {props.officesData.map((officeData, i) =>{
                    return <Link to={`singleOffice/${i}`} key={i} >
                    { (props.isListView) ? <OfficeListItem officeData={officeData} key={i}/> : <OfficeGridItem officeData={officeData} key={i}  />}
                    </Link>
                })}
            </div>
        )
    
        
    
}

export default OfficesPage;