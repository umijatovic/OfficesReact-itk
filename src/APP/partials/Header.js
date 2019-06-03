import React from 'react';
import './Header.scss';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={
            listButtonClass: 'active',
            gridButtonClass: 'active'
        }
    }

    render(){
        const { handleClick, handleClick1 } = this.props;
        const buttonClass = (this.props.isListView) ? 'selected' : '';
        const buttonClass1 = (!this.props.isListView) ? 'selected' : '';

        return(
            <header>
                <h1>Offices</h1>
                <nav>
                    <button className={buttonClass} onClick={handleClick}>List</button>
                    <button className={buttonClass1} onClick={handleClick1} >Grid</button>
                </nav>
            </header>
        )
    }
}

export default Header;