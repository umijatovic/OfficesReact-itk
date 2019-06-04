import React from 'react';
import './officesPage.scss'
import OfficeListItem from './officeListItem';
import OfficeGridItem from './officeGridItem';
import {Link}  from 'react-router-dom'

const OfficesPage = (props) =>{
    
    const officesDivClass = (props.isListView) ? 'officesDiv' : 'officesDivGrid'
    
        return(

            <div className={officesDivClass}>

                {props.officesData.map((officeData, i) =>{

                    return  (props.isListView) ? 
                        <Link to={`singleOffice/${i}`} key={i} ><OfficeListItem officeData={officeData} key={i}/></Link>
                         : <Link to={`singleOffice/${i}`} key={i} ><OfficeGridItem officeData={officeData} key={i}/></Link>
                })}
            </div>
        )
    
        
    
}

export default OfficesPage;