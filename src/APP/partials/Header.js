import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'

class Header extends React.Component{

    constructor(props){

        super(props);
        this.state={

            listButtonClass: 'active',
            gridButtonClass: 'active'
            
        }
    }

    render(){

        const { handleClick, handleClick1, handleClick2 } = this.props;
        const buttonClass = (this.props.view === 'list') ? 'selected' : '';
        const buttonClass1 = (this.props.view === 'grid') ? 'selected' : '';
        const buttonClass2 = (this.props.view === 'map') ? 'selected' : '';
        

        return(

            <header>

                <h1>Offices</h1>

                <nav>

                    <Link to='/'><button className={buttonClass} onClick={handleClick}>List</button></Link>
                    <Link to='/'><button className={buttonClass1} onClick={handleClick1} >Grid</button></Link>
                    <Link to='../map/'><button className={buttonClass2} onClick={handleClick2}>Map</button></Link>

                </nav>
                
            </header>
        )
    }
}

export default Header;