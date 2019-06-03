import React from 'react';
import {Link} from 'react-router-dom';

const SingleOfficePage =  (props) =>{
    let office = props.officeData[props.match.params.number];
    return(
        <div>
            <Link to='/'>back</Link>
            <p>{office.name}</p>
            <p>{office.description} </p>
        </div>
    )
}

export default SingleOfficePage;