import React from 'react';
import {Link} from 'react-router-dom';
import './singleOfficePage.scss'

const SingleOfficePage =  (props) =>{
    let office = props.officeData[props.match.params.number];
    return(
        <div className='singleOfficeDiv'>
            <div className='mapDiv'>
                <img id='mapImage' src="http://www.expertphp.in/images/articles/ArtImgozwPVl_n-min.png" alt=""/>
            </div>
            
            <div className='div1'>
                {(office.photo) ?  <img src={office.photo} alt=""/> : <p id='singleLogoPic'>{office.name.charAt(0).toUpperCase()} </p>} 
                <div>
                    <p>{office.name}</p>
                    <p>{office.description} </p>
                </div> 
            </div>
            <Link to='/'>&#171;back</Link>
        </div>
    )
}

export default SingleOfficePage;

